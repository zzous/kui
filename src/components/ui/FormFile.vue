<template>
    <div class="filebox">
        <div class="input-file-wrap">
            {{modelValue}}
            <div class="btn-file">
                <input type="file" id="upload-file" hidden="" >
                <label class="btn-up" for="upload-file" @click="handleFileUpload">파일첨부</label>
            </div>
            <span class="input-guide inline">용량 : 2MB 이하 | 형식 : jpg, gif, pdf</span>
        </div>
        <div class="upload-file-box">
            <div class="upload-file-head flex space-between">
                <button type="button" class="btn del-all btn-secondary">
                    <span class="offscreen">전체파일삭제</span>
                </button>
                <span class="name">파일명</span>
                <span class="volume">용량</span>
            </div>
            <div class="upload-file-list">
                <div class="upload-file-list-item flex space-between">
                    <button type="button" class="btn del btn-secondary">
                        <span class="offscreen">파일삭제</span>
                    </button>
                    <span class="name">chrome.dll</span>
                    <span class="volume">214.52 MB</span>
                </div>
            </div>
        </div>
        <span class="input-guide error" v-if="errorMessages.length > 0">{{errorMessages[0]}}</span>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    className: Array,
    labelId: String,
    inputPlaceholder: String,
    labelText: String,
    modelValue: Array,
    errorMessages: Array,
    inputName: String
});

// v-model 업데이트를 위한 이벤트 추가
const emit = defineEmits(['update:modelValue']);
const handleFileUpload = () => {
    console.log('handleFileUpload');
}
onMounted(() => {
});
</script>