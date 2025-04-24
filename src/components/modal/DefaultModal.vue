<template>
    <Modal v-if="state.isShow" :close="modalbtns">
        <div class="ui-modal-wrap">
            <div class="ui-modal-head">
                <h5 class="ui-modal-title">
                    {{ state.modalTitle }}
                </h5>
                <button type="button" class="ui-modal-close" @click="modalbtns('modalclose', `${state.modalName}`)">
                    <span class="offscreen">팝업닫기</span>
                </button>
            </div>
            <div class="ui-modal-body">
                <!-- 모달 컨텐츠 -->
                <slot name="modalcontent"></slot>
            </div>
            <div class="ui-modal-footer">
                <div class="btn-bottom-set flex justify-center">
                    <button type="button" class="btn btn-sl nega" v-if="state.buttonCancel"
                        @click="modalbtns('modalcancel', `${state.modalName}`)">{{ state.buttonCancel }}
                    </button>
                    <button type="button" class="btn btn-sl posi" v-if="state.buttonConfirm"
                        @click="modalbtns('modalconfirm', `${state.modalName}`)">{{ state.buttonConfirm }}
                    </button>
                </div>
            </div>
        </div>
    </Modal>
</template>
<script setup>
import { getCurrentInstance, computed, reactive } from 'vue';
const props = defineProps({
    isShow: Boolean,
    modalTitle: String,
    buttonConfirm: String,
    buttonCancel: String,
    modalName: String

});
const emit = defineEmits(['modalclose']);
const state = reactive({
    isShow: computed(() => props.isShow),
    modalTitle: computed(() => props.modalTitle),
    buttonConfirm: computed(() => props.buttonConfirm),
    buttonCancel: computed(() => props.buttonCancel),
    modalName: computed(() => props.modalName)

});
const modalbtns = (type, Name) => {
    if (!Name) {
        emit('modalclose', type);
    } else {
        emit('modalclose', type, Name);
    }

};
const closeModal = () => {
    console.log(state.isShow);
};

</script>