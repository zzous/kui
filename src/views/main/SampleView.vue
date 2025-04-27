<template>
    <div>
        <div class="ui-title-3 mt-50">
            <h3>로그레벨 상세</h3>
            <!-- <div class="abs">
                <button type="button" class="btn btn-sm">조직관리</button>
            </div> -->
        </div>
        <VeeForm
            ref="formRef"
            v-slot="{ values }"
            :validation-schema="schema"
            :initial-values="{

            }"
        >
        <div class="ui-section">
            <div class="tbl-reg-wrap half">
                <FormLine :labelText="'이름'" :required="true">
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
                <FormLine :labelText="'적용레벨'" :required="true">
                    <div>
                        <VeeField v-slot="{ errors, handleChange }" name="level1">
                            <InputText 
                                :inputPlaceholder="'기업명을 입력하세요.'" 
                                :inputType="'text'" 
                                :model-value="values.level1"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                    </div>
                </FormLine>
                <FormLine :labelText="'환경레벨'" :required="true">
                    <div>
                        <VeeField v-slot="{ errors, handleChange }" name="level2">
                            <InputText 
                                :inputPlaceholder="'기업명을 입력하세요.'" 
                                :inputType="'text'" 
                                :model-value="values.level2"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                    </div>
                </FormLine>
                <FormLine :labelText="'등록일시'" :required="true">
                    <div>
                        <VeeField v-slot="{ errors, handleChange }" name="date">
                            <InputText 
                                :readonly="true"
                                :disabled="true"
                                :inputPlaceholder="'기업명을 입력하세요.'" 
                                :inputType="'text'" 
                                :model-value="values.date"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                    </div>
                </FormLine>
                <FormLine :labelText="'로그레벨 설명'" :required="true">
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
        <div class="btn-bottom-set flex justify-center">
            <button type="button" class="btn btn-sl posi" @click="editChange()">수정</button>
            <button type="button" class="btn btn-sl nega"  @click="goToPage('/loglevel')">취소</button>
        </div>
    </div>
</template>
<script setup>
import { reactive, computed, nextTick, ref, onMounted, markRaw, onUnmounted, inject } from 'vue';
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

const $Modal = inject('$Modal');
const router = useRouter();
const route = useRoute();
const props = defineProps({
    viewId: {
        type: String,
        default: ''
    }
});
const formRef = ref(null);
const schema = yup.object().shape({
    projectName: rules.create('로그레벨 명').required(),
    level1: rules.create('적용레벨').required(),
    level2: rules.create('환경레벨').required(),
    projectDesc: rules.create('로그레벨 설명').required()
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
            goToPage('/loglevel');
        })
        .catch(error => {
            console.log(error);
        });
    }
}
onMounted(() => {
    console.log('route.params:', route.params);
    console.log('route.query:', route.query);
    console.log('route.fullPath:', route.fullPath);
    
    const viewId = route.params.viewId || route.query.viewId;
    console.log('viewId:', viewId);
    
    if(viewId){
        if(viewId=='0'){
            //폼 데이터 초기값 설정
            formRef.value?.setValues({
                projectName: 'ROOT',
                level1: 'INFO',
                level2: 'INFO',
                projectDesc: 'ROOT 로그레벨 설정',
                date: '2025-04-27 13:22:14',
            });
        }else if(viewId=='1'){
            //폼 데이터 초기값 설정
            formRef.value?.setValues({
                projectName: 'JdbCallLogging',
                level1: 'INFO',
                level2: 'INFO',
                projectDesc: 'JdbCallLogging 로그레벨 설정',
                date: '2025-04-27 13:22:14',
            });
        }else if(viewId=='2'){
            //폼 데이터 초기값 설정
            formRef.value?.setValues({
                projectName: 'TRACE',
                level1: 'TRACE',
                level2: 'TRACE',
                projectDesc: 'TRACE 로그레벨 설정',
                date: '2025-04-27 13:22:14',
            });
        }
    }
})
</script>

