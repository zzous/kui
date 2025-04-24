<template>
    <div class="ui-login-wrap">
        <div class="ui-login-content">
            <div class="ui-login-intro">
                <div class="ui-login-visual">
                    추후 이미지 변경예정
                </div>
                <div class="ui-login-form">
                    <div class="ui-login-form-head">
                        <h1><span class="offscreen">KB 어드민 포탈</span></h1>
                        <h2>KB 어드민 포탈</h2>
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
                                :labelText="'아이디'" 
                                :inputPlaceholder="'아이디를 입력하세요.'" 
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
                                :labelText="'비밀번호'" 
                                :inputPlaceholder="'비밀번호를 입력하세요.'" 
                                :inputType="'password'" 
                                :model-value="values.password"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                        <VeeField v-slot="{ errors, handleChange }" name="idSave">
                            <InputCheck 
                                :className="['ui-login-form-item']" 
                                :labelId="'idSave'" 
                                :labelText="'아이디 저장'" 
                                :inputName="'idSave'"
                                :model-value="values.idSave"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                    </div>

                    
                    <div class="btn-bottom-set mt-40">
                        <button type="button" class="btn btn-sl posi full" @click="validate">로그인</button>
                    </div>
                    <div class="ui-login-util">
                        <ul>
                            <li>
                                <button type="button" class="ui-login-util-item" @click="goToPage('/member-join')">회원가입</button>
                            </li>
                            <li>
                                <button type="button" class="ui-login-util-item" @click="goToPage('/change-pass')">비밀번호 변경</button>
                            </li>
                        </ul>
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
import { useRouter, useRoute } from 'vue-router';
import { useCommFunc } from '@/_setting/helper';
const {  goToPage } = useCommFunc();
const router = useRouter();
const route = useRoute();
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