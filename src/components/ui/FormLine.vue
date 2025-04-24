<template>
    <div class="tbl-form-type">
        <div class="tbl-label">{{labelText}}<span class="ess" v-if="required"><span class="offscreen">필수입력</span></span></div>
        <div class="tbl-content">
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    labelText: String,
    required: Boolean,
    errorMessages: Array,
    inputName: String
});

// v-model 업데이트를 위한 이벤트 추가
const emit = defineEmits(['update:modelValue']);

onMounted(() => {
});
</script>