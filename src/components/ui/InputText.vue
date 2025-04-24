<template>
    <div :class="className">
        <label :for="labelId">{{labelText}}</label>
        <div class="reg-item">
            <input
                :class="[inputSize, {'error': errorMessages.length > 0}]" 
                :type="inputType" 
                :id="labelId" 
                class="form-control" 
                :placeholder="inputPlaceholder"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
            >
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
    inputType: String,
    labelText: String,
    modelValue: String,
    errorMessages: Array,
    inputSize: String
});

// v-model 업데이트를 위한 이벤트 추가
const emit = defineEmits(['update:modelValue']);

onMounted(() => {
});
</script>

