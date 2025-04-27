<template>
    <div>
        <div class="ui-title-3 mt-50">
            <h3>전문이력 상세</h3>
        </div>
        <VeeForm
            ref="formRef"
            v-slot="{ values }"
            :validation-schema="schema"
            :initial-values="{}"
        >
        <div class="ui-section">
            <div class="tbl-reg-wrap half">
                <FormLine :labelText="'전문ID'" :required="true">
                    <div>
                        <VeeField v-slot="{ errors, handleChange }" name="projectName">
                            <InputText 
                                :inputPlaceholder="'전문ID을 입력하세요.'" 
                                :inputType="'text'" 
                                :model-value="values.projectName"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                    </div>
                </FormLine>
                <FormLine :labelText="'전달일시'" :required="true">
                    <div>
                        <VeeField v-slot="{ errors, handleChange }" name="date">
                            <InputText 
                                :disabled="true"
                                :readonly="true"
                                :inputPlaceholder="'기업명을 입력하세요.'" 
                                :inputType="'text'" 
                                :model-value="values.date"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                    </div>
                </FormLine>
               
                <FormLine :labelText="'결과코드'" :required="true">
                    <div>
                        <VeeField v-slot="{ errors, handleChange }" name="prtype">
                            <InputText 
                                :inputPlaceholder="'기업명을 입력하세요.'" 
                                :inputType="'text'" 
                                :model-value="values.prtype"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                    </div>
                </FormLine>
                <FormLine :labelText="'업무코드'" :required="true">
                    <div>
                        <VeeField v-slot="{ errors, handleChange }" name="code">
                            <InputText 
                                :inputPlaceholder="'기업명을 입력하세요.'" 
                                :inputType="'text'" 
                                :model-value="values.code"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                    </div>
                </FormLine>
                <FormLine :labelText="'등록자'" :required="true">
                    <div>
                        <VeeField v-slot="{ errors, handleChange }" name="register">
                            <InputText 
                                :disabled="true"
                                :readonly="true"
                                :inputPlaceholder="'기업명을 입력하세요.'" 
                                :inputType="'text'" 
                                :model-value="values.register"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                    </div>
                </FormLine>
                <FormLine :labelText="'등록일'" :required="true">
                    <div>
                        <VeeField v-slot="{ errors, handleChange }" name="date">
                            <InputText 
                                :disabled="true"
                                :readonly="true"
                                :inputPlaceholder="'기업명을 입력하세요.'" 
                                :inputType="'text'" 
                                :model-value="values.date"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                    </div>
                </FormLine>
                <FormLine :labelText="'요청BODY'" :required="true">
                    <div>
                        <VeeField v-slot="{ errors, handleChange }" name="body">
                            <Textarea 
                                inputPlaceholder="내용을 입력하세요"
                                :model-value="values.body"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                    </div>
                </FormLine>
            </div>
        </div>
        </VeeForm>
        <div class="btn-bottom-set flex justify-center">
            <button type="button" class="btn btn-sl posi" @click="editChange()">수정</button>
            <button type="button" class="btn btn-sl nega" @click="goToPage('/buildlist')">취소</button>
        </div>
    </div>
</template>

<script setup>
import { reactive, computed, nextTick, ref, onMounted, markRaw, onUnmounted, inject } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia'
import { useCommFunc } from '@/_setting/helper';
const {  dayJS, goToPage } = useCommFunc();
import { Form as VeeForm, Field as VeeField } from 'vee-validate'
import * as yup from 'yup'
import { rules } from '@/_setting/validate';

const $Modal = inject('$Modal');
const router = useRouter();
const route = useRoute();

const formRef = ref(null);

const schema = yup.object().shape({
    projectName: rules.create('전문 ID').required(),
    date: rules.create('전달일시').required(),
    prtype: rules.create('결과코드').required(),
    code: rules.create('업무코드').required(),
    register: rules.create('등록자').required(),
    date: rules.create('등록일시').required(),
    body: rules.create('요청BODY').required()
});

const validate = async () => {
  if (formRef.value) {
    const { valid } = await formRef.value.validate()
    console.log(valid)
    return valid
  }
  return false;
}

const editChange = async (e) => {
    const result = await validate();
    console.log(result)
    if(result){
        $Modal.simple({
            message: `${formRef.value.values.projectName} 이 수정 되었습니다.`,
            type: 'modalAlert',
            closeButtonHide: true,
            className:'confirm',
            buttonText: {
                ok: '확인',
                cancel: '취소',
            }
        })
        .then(success => {
            console.log(success);
            goToPage('/buildlist');
        })
        .catch(error => {
            console.log(error);
        });
    }
}
onMounted(() => {
    console.log('route.params:', route.params);
    console.log('route.query:', route.query);
    // prname: 'WCZ75A11751_I',
    //         prenname: '2025-04-27 13:22:14',
    //         register: '김국민',
    //         date: '2025-04-27 13:22:14',
    //         prtype: '200',
    //         code: 'KB1010',
    formRef.value?.setValues({
        projectName: 'WCZ75A11751_I',
        date: '2025-04-27 13:22:14',
        prtype: '200',
        code: 'KB1010',
        register: '김국민',
        date: '2025-04-27 13:22:14',
        body: '전문1 설명',
    });
})
</script>

