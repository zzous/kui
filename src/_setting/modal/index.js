const $Modal = {
    simple: (v) => {
        console.log('>>>', app, emitter);
        return new Promise((resolve, reject) => {
            emitter.$emit('modalSimple', v, { resolve, reject });
        });
    },
    alert: (v) => {
        return new Promise((resolve, reject) => {
            emitter.$emit('modalAlert', v, { resolve, reject });
        });
    },
    confirm: (v) => {
        console.log('>>>', app, emitter);
        return new Promise((resolve, reject) => {
            emitter.$emit('modalConfirm', v, { resolve, reject });
        });
    }
};

export default $Modal;