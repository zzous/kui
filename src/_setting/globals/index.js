import request from '@/_setting/axios/request'
import $Modal from '@/_setting/modal/index'
import eventBus from '@/_setting/emit/index'

export const registerGlobals = () => {
    window.$api = request
    window.$Modal = $Modal
    window.emitter = eventBus
} 