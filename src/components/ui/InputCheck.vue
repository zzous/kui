<template>
    <div :class="className">
        <span class="checkbox">
            <input :id="labelId" :name="inputName"  :checked="modelValue" type="checkbox" @input="$emit('update:modelValue', $event.target.checked)">
            <label :for="labelId">{{labelText}}</label>
        </span>
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
    modelValue: Boolean,
    errorMessages: Array,
    inputName: String
});

// v-model 업데이트를 위한 이벤트 추가
const emit = defineEmits(['update:modelValue']);

onMounted(() => {
});
</script>

