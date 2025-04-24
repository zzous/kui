<template>
    <div :class="className">
        <label v-if="labelText" :for="labelId">{{ labelText }}</label>
        <div class="reg-item">
            <textarea 
                :id="labelId"
                :class="[{'error': errorMessages.length > 0}, 'form-control']"
                :placeholder="inputPlaceholder"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                :style="textareaStyle"
            ></textarea>
        </div>
        <span class="input-guide error" v-if="errorMessages?.length > 0">
            {{ errorMessages[0] }}
        </span>
    </div>
</template>

<script setup>
defineProps({
    className: Array,
    labelId: String,
    labelText: String,
    inputPlaceholder: String,
    modelValue: String,
    errorMessages: {
        type: Array,
        default: () => []
    },
    textareaStyle: {
        type: Object,
        default: () => ({ height: '100px' })
    }
});

defineEmits(['update:modelValue']);
</script>