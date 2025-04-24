<template>
    <div class="ui-login-wrap">
        <div class="ui-login-content">
            <div class="ui-login-intro">
                <div class="ui-login-visual">
                    추후 이미지 변경예정
                </div>
                <div class="ui-login-form">
                    <div class="ui-login-form-head">
                        <h1><span class="offscreen">비밀번호 변경</span></h1>
                        <h2>
                            비밀번호 변경
                            <p>새로운 비밀번호를 설정해주세요.</p>
                        </h2>
                    </div>
                    <VeeForm
                        ref="formRef"
                        v-slot="{ values }"
                        :validation-schema="schema"
                        :initial-values="{
                            idSave:false
                        }"
                    >
                    <div class="ui-login-form-content">
                        <VeeField v-slot="{ errors, handleChange }" name="userID">
                            <InputText 
                                :className="['ui-login-form-item']" 
                                :labelId="'userID'" 
                                :labelText="'현재 비밀번호'" 
                                :inputPlaceholder="'현재 비밀번호를 입력하세요.'" 
                                :inputType="'text'" 
                                :model-value="values.userID"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                        <VeeField v-slot="{ errors, handleChange }" name="password">
                            <InputText 
                                :className="['ui-login-form-item']" 
                                :labelId="'password'" 
                                :labelText="'신규 비밀번호'" 
                                :inputPlaceholder="'신규 비밀번호를 입력하세요.'" 
                                :inputType="'password'" 
                                :model-value="values.password"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                        <VeeField v-slot="{ errors, handleChange }" name="password">
                            <InputText 
                                :className="['ui-login-form-item']" 
                                :labelId="'password'" 
                                :labelText="'신규 비밀번호 확인'" 
                                :inputPlaceholder="'신규 비밀번호를 입력하세요.'" 
                                :inputType="'password'" 
                                :model-value="values.password"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                       
                    </div>

                    
                    <div class="btn-bottom-set mt-40">
                        <button type="button" class="btn btn-sl posi full" @click="validate">변경하기</button>
                    </div>
                    
                    </VeeForm>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,reactive } from 'vue';
// VeeForm 사용 시 s-form-item 컴포넌트에 name 값 필수
// import { Form as VeeForm } from 'vee-validate'
import { Form as VeeForm, Field as VeeField } from 'vee-validate'
import * as yup from 'yup'
import { rules } from '@/_setting/validate';

const state = reactive({
    userID: '',
    userPW: '',
});
const formData = ref({
    userID: '',
    userPW: '',
});
const formRef = defineModel({
  type: Object,
  default: {},
  required: true,
})
const schema = yup.object().shape({
    userID: rules.id,
    password: rules.create('비밀번호').required()
});
const validate = async () => {
  if (formRef.value) {
    const { valid } = await formRef.value.validate()
    console.log(valid)
    return valid
  }
}
const setFormData = (key, value) => {
    console.log(key, value);
    formRef.value[key] = value;
    console.log(key, value, formRef.value);
};
</script>