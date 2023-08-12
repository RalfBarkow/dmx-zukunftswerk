// Global functions and values (non-reactive)

import Vue from 'vue'
import dmx from 'dmx-api'
import store from './store/zukunftswerk'

const uiStrings = require('./ui-strings').default
const quillOptions = require('./quill-options').default   // Quill config for canvas
const quillOptions2 = dmx.utils.clone(quillOptions)       // Quill config for discussion panel
quillOptions2.bounds = '.zw-discussion .comments'
quillOptions2.modules.toolbar.container[2].splice(2, 1)   // strip "video" button

const logo = {
  de: require('../resources-build/zw-logo.de.png'),
  fr: require('../resources-build/zw-logo.fr.png')
}

const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
console.log('[ZW] isChrome:', isChrome)

export default {

  ITEM_COLORS: [
    'white',
    'rgb(238, 232, 234)',       // lavender
    'rgb(248, 195, 213)',       // red
    'rgb(228, 214, 166)',       // brown
    'rgb(162, 190, 168)',       // green
    'rgb(145, 187, 205)',       // blue
    'transparent'
  ],
  CANVAS_GRID: 20,              // 20x20 pixel = size of grid.png
  CANVAS_BORDER: 40,            // Affects a) position of new items and document revelation, b) zoom-to-fit (in pixel).
                                // Should be a multiple of CANVAS_GRID.
  FORM_WIDTH: 384,              // 360 = width of upload area, +24=2*12 pixel padding   // TODO: proper geometry
  ARROW_LENGTH: 200,            // Should be a multiple of CANVAS_GRID
  ARROW_HEIGHT: 40,             // Should be a multiple of CANVAS_GRID

  getLogo,
  getViewport,
  getDisplayName,
  getShowEmailAddress,
  getUser,
  getString,

  topicSort,
  workspaceSort,
  findWorkspace,
  workspaceName,

  canvasFilter,
  confirmDeletion,

  quillOptions,
  quillOptions2,
  isChrome
}

// TODO: make it a store getter?
function getLogo () {
  return logo[store.state.lang]
}

// TODO: make it a store getter?
/**
 * @return  the viewport of the current topicmap (object with "pan" and "zoom" props).
 */
function getViewport() {
  const viewport = getViewportTopic()
  if (viewport) {
    const zoom = viewport.viewProps['dmx.topicmaps.zoom']
    return {
      pan: {
        x: -viewport.pos.x * zoom,
        y: -viewport.pos.y * zoom
      },
      zoom
    }
  } else {
    // fallback
    const topicmap = store.state.topicmap
    console.warn(`[ZW] Viewport topic missing in Topicmap ${topicmap.id}`)
    return {
      pan: {
        x: topicmap.panX,
        y: topicmap.panY
      },
      zoom: topicmap.zoom
    }
  }
}

function getViewportTopic() {
  return store.state.topicmap.topics.find(topic => topic.typeUri === 'zukunftswerk.viewport')
}

function getDisplayName (username) {
  return getUser(username)?.children['dmx.signup.display_name']?.value || '?'
}

function getShowEmailAddress (username) {
  return getUser(username)?.children['zukunftswerk.show_email_address'].value
}

/**
 * Returns Username topic corresponding to given username (case-insensitive).
 * If no such user exists undefined is returned. The latter happens if that user has been deleted.
 */
function getUser (username) {
  // TODO: better use localeCompare() or regex (or toUpperCase()) instead of toLowerCase()?
  // https://stackoverflow.com/questions/2140627/how-to-do-case-insensitive-string-comparison
  return store.state.users.find(user => user.value.toLowerCase() === username.toLowerCase())
}

function getString (key, value) {
  const str = uiStrings[`${key}.${store.state.lang}`]
  return value ? substitute(str, value) : str
}

function substitute (str, value) {
  const i = str.indexOf('${}')
  return str.substring(0, i) + value + str.substring(i + 3)
}

function topicSort (t1, t2) {
  return t1.value.localeCompare(t2.value)
}

function workspaceSort (w1, w2) {
  return workspaceName(w1).localeCompare(workspaceName(w2))
}

/**
 * Finds the given workspace among the current user's workspaces.
 *
 * @return  the workspace (plain topic), or undefined if the given ID does not refer to one of the current user's
 *          workspaces.
 */
function findWorkspace (id) {
  return store.state.workspaces.find(ws => ws.id === id)
}

function workspaceName (topic) {
  const de = topic.children['dmx.workspaces.workspace_name#zukunftswerk.de']
  const fr = topic.children['dmx.workspaces.workspace_name#zukunftswerk.fr']
  if (de && fr) {
    return topic.children['dmx.workspaces.workspace_name#zukunftswerk.' + store.state.lang].value
  } else {
    return de?.value || fr?.value || '?'
  }
}

function canvasFilter (topic) {
  return topic.typeUri === 'zukunftswerk.document'  ||
         topic.typeUri === 'zukunftswerk.note'      ||
         topic.typeUri === 'zukunftswerk.textblock' ||
         topic.typeUri === 'zukunftswerk.label'     ||
         topic.typeUri === 'zukunftswerk.arrow'     ||
         topic.typeUri === 'zukunftswerk.viewport' && (store.state.isTeam || store.state.isEditor)
}

function confirmDeletion (textKey = 'warning.delete', value) {
  return Vue.prototype.$confirm(getString(textKey, value), {
    type: 'warning',
    title: getString('label.warning'),
    confirmButtonText: getString('action.delete'),
    confirmButtonClass: 'el-button--danger',
    cancelButtonText: getString('action.cancel'),
    showClose: false
  })
}
