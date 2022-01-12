import Vue from 'vue'
import {Button, Input, Select, Option, Dropdown, DropdownMenu, DropdownItem, Dialog, Upload, Loading} from 'element-ui'
import locale from 'element-ui/lib/locale'
import DialogDraggable from 'vue-element-dialog-draggable'

// set locale
locale.use(require('element-ui/lib/locale/lang/en').default)

// register components
Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Dialog)
Vue.use(DialogDraggable)
Vue.use(Upload)

Vue.use(Loading.directive)
