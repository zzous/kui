<template>
    <div>
        
        
        <VeeForm
            ref="formRef"
            v-slot="{ values }"
            :validation-schema="schema"
            :initial-values="{}"
        >
        <div class="ui-section">
            <div class="tbl-reg-wrap">
                
                <FormLine :labelText="'빌드 명'" :required="true">
                    <div>
                        <VeeField v-slot="{ errors, handleChange }" name="projectName">
                            <InputText 
                                :inputPlaceholder="'기업명을 입력하세요.'" 
                                :inputType="'text'" 
                                :model-value="values.projectName"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                    </div>
                </FormLine>
               
                <FormLine :labelText="'빌드 내용'" :required="true">
                    <div>
                        <VeeField v-slot="{ errors, handleChange }" name="projectDesc">
                            <Textarea 
                                inputPlaceholder="내용을 입력하세요"
                                :model-value="values.projectDesc"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                    </div>
                </FormLine>
                
            </div>
        </div>
        </VeeForm>
    </div>
</template>
<script setup>
import { reactive, computed, nextTick, ref, onMounted,markRaw } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia'
import sample from '@/views/sample/sample/example1.vue'
import { useCommFunc } from '@/_setting/helper';
const {  dayJS, goToPage } = useCommFunc();
// VeeForm 사용 시 s-form-item 컴포넌트에 name 값 필수
// import { Form as VeeForm } from 'vee-validate'
import { Form as VeeForm, Field as VeeField } from 'vee-validate'
import * as yup from 'yup'
import { rules } from '@/_setting/validate';
const emits = defineEmits(['modalClose'])
const formRef = defineModel({
  type: Object,
  default: {},
  required: true,
})

const schema = yup.object().shape({
    projectName: rules.create('빌드명').required(),
    projectDesc: rules.create('빌드 내용').required()
});
const validate = async () => {
  if (formRef.value) {
    const { valid } = await formRef.value.validate()
    console.log(valid)
    return valid
  }
}
const editChange =async (e) => {
    const result = await validate();
    console.log(result)
    if(result){
        $Modal.simple({
            message: `${formRef.value.values.projectName} 이 빌드 요청이 완료 되었습니다.`,
            type: 'modalAlert',
            closeButtonHide: true,
            className:'confirm',
            buttonText: {
                ok: '확인',
                cancel: '취소',
            }
        })
        /** 버튼 이벤트 처리 */
        .then(success => {
            console.log(success);
            emits('modalClose')
            goToPage('/buildlist');
        })
        .catch(error => {
            console.log(error);
        });
    }
}
onMounted(() => {
  
})
defineExpose({ editChange, validate })
</script>

