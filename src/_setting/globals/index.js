import request from '@/_setting/axios/request'
import $Modal from '@/_setting/modal/index'
import eventBus from '@/_setting/emit/index'

export const registerGlobals = (app) => {
    // API 요청 객체 등록
    app.provide('$api', request)
    // 모달 객체 등록
    app.provide('$Modal', $Modal)
    // 이벤트 버스 등록
    app.provide('$eventBus', eventBus)
    
    // window 객체에도 등록 (기존 코드와의 호환성을 위해)
    window.$api = request
    window.$Modal = $Modal
    window.emitter = eventBus
} 