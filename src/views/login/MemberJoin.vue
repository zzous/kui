<template>
    <div class="ui-modal full">
        <div class="ui-modal-wrap" style="width: 1000px;">
            <div class="ui-modal-head">
                <h1 class="ui-modal-title">회원가입</h1>
            </div>
            <div class="ui-modal-body">
                <VeeForm
                    ref="formRef"
                    v-slot="{ values }"
                    :validation-schema="schema"
                    :initial-values="{
                        idSave:false
                    }"
                >
                    <div class="ui-title-3 ">
                        <h3>계정 정보</h3>
                    </div>
                    <div class="ui-content">
                    
                        
                        <div class="tbl-reg-wrap">
                            <FormLine :labelText="'기업명'" :required="true">
                                <VeeField v-slot="{ errors, handleChange }" name="companyName">
                                    <InputText 
                                        :inputPlaceholder="'기업명을 입력하세요.'" 
                                        :inputType="'text'" 
                                        :model-value="values.companyName"
                                        :error-messages="errors"
                                        @update:model-value="handleChange"
                                    />
                                </VeeField>
                            </FormLine>
                            <FormLine :labelText="'대표자명'" :required="true">
                                <VeeField v-slot="{ errors, handleChange }" name="companyName">
                                    <InputText 
                                        :inputPlaceholder="'대표자명을 입력하세요.'" 
                                        :inputType="'text'" 
                                        :model-value="values.companyName"
                                        :error-messages="errors"
                                        @update:model-value="handleChange"
                                    />
                                </VeeField>
                            </FormLine>
                            <FormLine :labelText="'업태/종목'" :required="true" class="input-group">
                                <VeeField v-slot="{ errors, handleChange }" name="companyNum">
                                    <InputText 
                                        :inputSize="'medium'"
                                        :inputType="'text'" 
                                        :model-value="values.companyName1"
                                        :error-messages="errors"
                                        @update:model-value="handleChange"
                                        style="margin-right:15px"
                                    />
                                   
                                    <InputText 
                                        :inputSize="'medium'"
                                        :inputType="'text'" 
                                        :model-value="values.companyName2"
                                        :error-messages="errors"
                                        @update:model-value="handleChange"
                                    />
                                    
                                </VeeField>
                            </FormLine>
                            <FormLine :labelText="'사업자등록번호'" :required="true" class="input-group">
                                <VeeField v-slot="{ errors, handleChange }" name="companyNum">
                                    <InputText 
                                        :inputSize="'small'"
                                        :inputType="'text'" 
                                        :model-value="values.companyName1"
                                        :error-messages="errors"
                                        @update:model-value="handleChange"
                                    />
                                    <span class="dash">-</span>
                                    <InputText 
                                        :inputSize="'small'"
                                        :inputType="'text'" 
                                        :model-value="values.companyName2"
                                        :error-messages="errors"
                                        @update:model-value="handleChange"
                                    />
                                    <span class="dash">-</span>
                                    <InputText 
                                        :inputSize="'small'"
                                        :inputType="'text'" 
                                        :model-value="values.companyName3"
                                        :error-messages="errors"
                                        @update:model-value="handleChange"
                                    />
                                    <button type="button" class="btn btn-slm ml-5">중복체크</button>
                                </VeeField>
                            </FormLine>
                            <FormLine :labelText="'대표전화번호'" :required="true" class="input-group">
                                <VeeField v-slot="{ errors, handleChange }" name="companyNum">
                                    <select class="custom-select">
                                        <option value="010">010</option>
                                        <option value="011">011</option>
                                    </select>
                                    <span class="dash">-</span>
                                    <InputText 
                                        :inputSize="'small'"
                                        :inputType="'text'" 
                                        :model-value="values.companyName2"
                                        :error-messages="errors"
                                        @update:model-value="handleChange"
                                    />
                                    <span class="dash">-</span>
                                    <InputText 
                                        :inputSize="'small'"
                                        :inputType="'text'" 
                                        :model-value="values.companyName3"
                                        :error-messages="errors"
                                        @update:model-value="handleChange"
                                    />
                                </VeeField>
                            </FormLine>
                            <FormLine :labelText="'주소'" :required="true" class="input-group">
                                <VeeField v-slot="{ errors, handleChange }" name="companyNum">
                                    <InputText
                                        :className="['addresszip']" 
                                        :inputType="'text'" 
                                        :model-value="values.companyName1"
                                        :error-messages="errors"
                                        @update:model-value="handleChange"
                                    />
                                    
                                    <button type="button" class="btn btn-slm ml-5">우편번호 검색</button>
                                </VeeField>
                                <VeeField v-slot="{ errors, handleChange }" name="companyNum">
                                    <InputText 
                                        :className="['addressdetail']"
                                        :inputType="'text'" 
                                        :model-value="values.companyName1"
                                        :error-messages="errors"
                                        @update:model-value="handleChange"
                                    />
                                    
                                </VeeField>
                            </FormLine>
                        </div>
                    
                    </div>
                    <div class="ui-title-3 mt-20">
                        <h3>첨부파일</h3>
                    </div>
                    <div class="ui-content">
                        <div class="tbl-reg-wrap">
                            <FormLine :labelText="'첨부파일'" :required="true">
                                <VeeField v-slot="{ errors, handleChange }" name="formFiles">
                                    <FormFile :error-messages="errors" @update:model-value="handleChange" :model-value="values.formFiles"/>
                                </VeeField>
                            </FormLine>
                        </div>
                    </div>
                </VeeForm> 
                   
            </div>
            <div class="ui-modal-footer">
                <div class="btn-bottom-set flex justify-center">
                    <button type="button" class="btn btn-sl nega">이전</button>
                    <button type="button" class="btn btn-sl posi" disabled>다음</button>
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
<style>

    </style>