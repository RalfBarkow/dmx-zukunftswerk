# DMX Zukunftswerk

Zukunftswerk is a platform for bilingual collaboration. It provides shared workspaces for handling and commenting
on various kinds of content objects (documents, notes, textblocks). Content objects are freely placed on a workspace "canvas", and can be decorated by headings and arrows. Every user input is automatically translated on-the-fly by the means of the
[DeepL](https://www.deepl.com) service.

The canvas is synchronized between collaborating users. There are 3 user roles: *administrators* (create workspaces and user accounts, manage menberships), *editors* (edit content objects and arrange the canvas), and *users* (browsing canvas content).

The Zukunftswerk application is developed by contract with the
[Deutsch-Französisches Zukunftswerk](https://df-zukunftswerk.eu).
The Zukunftswerk UI is fixed to German/French languages. A generalized version of this application, with configurable
languages, is available as project "[Linqa](https://github.com/dmx-systems/dmx-linqa)".

Zukunftswerk is an application for the [DMX platform](https://github.com/dmx-systems/dmx-platform). Both, Zukunftswerk and Linqa are Open Source software.

## Version History

**1.5** -- Sep 5, 2022

* Improvements:
    * Auto-translate document name
    * Manual-translate button is always visible (documents, notes, headings, and comments)
    * PDFs remember selected page when fullscreen is switched on/off
    * Note and heading forms have a gray background
    * Image data-URLs are not send to the DeepL service (improved in DeepL plugin)
    * Discussion panel shows a spinner while loading
    * Admin area:
        * The respective workspace owners are displayed
        * Only the owner can delete a workspace
    * Send email digests: only one mail per day and workspace (at 6am)
* Fixes:
    * Working with multiple forms at the same time works
        * The selected form appears before other forms
    * New canvas items are selected programmatically
    * New document name is shown if entered afterwards
    * New viewport zoom value is respected immediately (when pressing the Home button)
    * When switching UI language the document resize-frame adapts
    * Document discussion button appears yellow when doc-filter is set
    * Change no-workspace error text ("Du" -> "Sie")
* Compatible with DMX 5.3-SNAPSHOT

**1.4** -- Aug 6, 2022

* Features:
    * New user profile dialog:
        * The user can edit her Display Name
        * The user controls whether to show her email address to other users by the means of a checkbox
        * The user can initiate a password-reset
    * Chat panel: show email-address of other users, if allowed by respective user
    * Canvas: documents can be downloaded
    * The Privacy policy text is now in place
* Improvements:
    * ZW UI language:
        * At first launch the browser's language setting is respected
        * The UI language chosen by the user is remembered
    * Canvas:
        * Item rotation is restricted to steps of 5 degrees, so resetting to 0 is easy
        * New "reset zoom" button sets the zoom back to "normal" (1)
    * Chat panel: scroll comment's OK/Cancel buttons into view when clicking Edit
    * Imprint/privacy policy: clicking the ZW logo returns to home page
    * Updated texts for the password-reset workflow
* Fixes:
    * Canvas:
        * Zoom-to-fit button works as expected
        * Editing of notes/headings when created w/o translation
        * Item selection works for participants (selected item appears on-top)
    * Chat panel:
        * Break long words in comments
        * Comments are properly rendered when logged in using uppercase in username
    * Admin area: workspace names in membership list reflect UI language
    * Images survive the auto-translation
    * Special characters in sent emails are properly encoded (both, HTML and plain text parts)
    * Client-sync:
        * Client sync for update-comment and delete-comment
        * Control box is updated when item moves
    * Redirect if user is logged in but the requested workspace is not readable
    * Missing translations are added
* Compatible with DMX 5.3-SNAPSHOT

**1.3** -- Jul 7, 2022

* Features:
    * 4 new canvas buttons: "Home", "Zoom to fit", "Zoom in", "Zoom out"
    * Rotatable canvas items: Notes, Documents, Headlines
* Improvements:
    * Login:
        * User lands in recently used workspace (based on ws-cookie)
        * Workspace deep-links: request login if due
    * Canvas / PDF viewer:
        * Larger "fullscreen" toggle button
    * Chat panel:
        * Accept only images and PDFs as comment attachments
        * Use "paper plane" icon for submit
* Fixes:
    * Canvas: arrows properly follow when moving handles
    * Chat panel:
        * Editors can't edit posts (only her own)
        * Reset doc-filter on workspace change
        * New-comment placeholder text adapts to UI language
    * Header: workspace drop down is up-to-date after WS edit
    * Admin area: disable "Editor" checkbox if "Member" is unchecked
* Compatible with DMX 5.3-SNAPSHOT

**1.2** -- Jun 4, 2022

* Features:
    * Client-sync for canvas items:
        * Notes, Documents, Arrows, Headings, Viewport Topic
        * Operations: Create, Move, Edit, Delete
* Improvements:
    * Auto-translation:
        * Untranslatable notes and headings can be saved anyways
        * Notes, headings, and comments can be auto-translated after creation
    * Canvas:
        * Add Note colors "white" and "transparent"
        * Draggable items show hand cursor
        * Arrows:
            * Arrows appear before other items (except selected items and forms)
            * Different mouse cursors for move-arrow vs. move-arrow-handle
        * Slightly more prominent grid in the background. The grid now zooms along with canvas.
    * Discussion panel: strip "video" button from text editor toolbar
* Fixes:
    * Login of users which are not Team members
    * Set initial viewport in zoomed topicmaps. "Persistent Viewport" feature is now complete.
    * Header: show workspace names in dropdown bilingually
    * Admin area:
        * User list shows workspace names bilingually
        * User area is up-to-date once workspace edited
    * PDF viewer works with Chinese characters
* Compatible with DMX 5.3-SNAPSHOT

**1.1** -- May 6, 2022

* Features:
    * Freely editable arrows
    * Admin area: Edit/Delete of Users/Workspace
    * Editor role (selected users can create/edit canvas content of selected workspaces)
    * Colored notes
    * Persistent viewport
* Improvements:
    * Clicking on canvas deselects
* Fixes:
    * In comment-refs show Display Name (not email address)
* Compatible with DMX 5.3-SNAPSHOT

**1.0.3** -- Apr 6, 2022

* Improvements:
    * Login page has a "beta" stamp
* Fixes (admin area):
    * Also the 2nd level of workspaces/users lists is sorted
    * Workspaces and Users areas are consistent after updates
    * Disable create-user button when user input is missing

**1.0.2** -- *rejected*

**1.0.1** -- Apr 4, 2022

* Improvements:
    * Show notification once password reset mail is sent

**1.0** -- Apr 4, 2022

* Features:
    * Admin area (for ZW team members)
        * Create users and workspaces
        * Manage memberships
    * Notification mails (team members are notified via email about new comments)
    * PDF read mode (the entire canvas is used)
* Improvements:
    * Login page (no public access anymore)
        * Password reset dialog
    * Users are pseudonymized via "Display Name" (email addresses are never shown)
    * Comments which are not auto-translatable can be stored anyways (and manually translated later on)
    * Comment auto-translation status is shown: "automatic"/"edited"/"none"
    * Workspace selector (in case the user has more than one workspace memberships)
    * "Imprint" & "Privacy Policy" shown on to Login page (linkable)
* Design:
    * ZW corporate style guide is applied (not yet complete)
* Fixes:
    * Only team members can move canvas items
* Compatible with DMX 5.3-SNAPSHOT

**0.9.1** -- Mar 1, 2022

* Fixes:
    * PDF viewer and language switch
    * Edit/Delete and non-team members
* Compatible with DMX 5.3-SNAPSHOT

**0.9** -- Mar 1, 2022

* Improvements:
    * UI-less PDF viewer
    * Discussion panel: chat metaphor
    * Reply works also when doc-filter is set
    * Canvas zooms around mouse position
    * Edit and Delete functions for all types (Notes, Documents, Comments, Labels)
    * All forms have a Cancel button
* Design:
    * Redesigned discussion panel
    * Doc-filter is more visible
    * Header shows ZW logo
* Compatible with DMX 5.3-SNAPSHOT

**0.8** -- Jan 15, 2022

* Data model: Notes, Documents, Comments, Labels, Arrows
* Basic UI: header, canvas, discussion panel, doc-filter
* Actions: create, reply, set doc-filter, pan, zoom, move item, resize item
* User roles: team member (authoring), participant (commenting)
* Client-sync: comments
* Compatible with DMX 5.3-SNAPSHOT
