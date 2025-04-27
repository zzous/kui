import { getCurrentInstance } from 'vue'
import eventBus from '../emit/index'

const $Modal = {
    simple: (v) => {
        return new Promise((resolve, reject) => {
            eventBus.emit('modalSimple', v, { resolve, reject });
        });
    },
    alert: (v) => {
        return new Promise((resolve, reject) => {
            eventBus.emit('modalAlert', v, { resolve, reject });
        });
    },
    confirm: (v) => {
        return new Promise((resolve, reject) => {
            eventBus.emit('modalConfirm', v, { resolve, reject });
        });
    }
};

export default $Modal;