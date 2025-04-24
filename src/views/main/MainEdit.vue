<template>
    <div>
        <div class="ui-title-3">
            <h3>서비스 그룹 기본 정보</h3>
            <!-- <div class="abs">
                <button type="button" class="btn btn-sm">조직관리</button>
            </div> -->
        </div>
        
        <div class="ui-section">
            <div class="tbl-reg-wrap half">
                <FormLine :labelText="'서비스 그룹명'" :required="true">
                    <div>AlHub</div>
                </FormLine>
                <FormLine :labelText="'서비스 그룹 코드'" :required="true">
                    <div>UCA</div>
                </FormLine>
                <FormLine :labelText="'서비스 관리조직'" :required="true">
                    <div>시스템 운영부</div>
                </FormLine>
                <FormLine :labelText="'서비스 관리자'" :required="true">
                    <div>김용국(MS090909)</div>
                </FormLine>
            </div>
        </div>
        <div class="ui-title-3 mt-50">
            <h3>프로젝트 정보</h3>
            <!-- <div class="abs">
                <button type="button" class="btn btn-sm">조직관리</button>
            </div> -->
        </div>
        <VeeForm
            ref="formRef"
            v-slot="{ values }"
            :validation-schema="schema"
            :initial-values="{}"
        >
        <div class="ui-section">
            <div class="tbl-reg-wrap half">
                <FormLine :labelText="'프로젝트 유형'" :required="true">
                    <div>springboot Basic</div>
                </FormLine>
                <FormLine :labelText="'프로젝트 중요도'" :required="true">
                    <div>RT03</div>
                </FormLine>
                <FormLine :labelText="'프로젝트 명'" :required="true">
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
                <FormLine :labelText="'프로젝트 영문명'" :required="true">
                    <div>springboot maven5</div>
                </FormLine>
                <FormLine :labelText="'Featuer 개수'" :required="true">
                    <div>5</div>
                </FormLine>
                <FormLine :labelText="'JDK 버전'" :required="true">
                    <div>5</div>
                </FormLine>
                <FormLine :labelText="'프로젝트 설명'" :required="true">
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
            <button type="button" class="btn btn-sl nega" @click="goToPage('/main')">목록</button>
            <button type="button" class="btn btn-sl posi" @click="editChange()">수정</button>
            <button type="button" class="btn btn-sl nega"  @click="goToPage('/main/mainview')">취소</button>
        </div>
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
const formRef = defineModel({
  type: Object,
  default: {},
  required: true,
})
const schema = yup.object().shape({
    projectName: rules.create('프로젝트 명').required(),
    projectDesc: rules.create('프로젝트 설명').required()
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
            message: `${formRef.value.values.projectName} 이 수정 되었습니다.`,
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
            goToPage('/main/mainview');
        })
        .catch(error => {
            console.log(error);
        });
    }
}
onMounted(() => {
    //폼 데이터 초기값 설정
    formRef.value.setValues({
        projectName: 'springboot maven5',
        projectDesc: 'springboot maven5',
    });
})
</script>

