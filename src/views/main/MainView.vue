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
        <div class="ui-section ">
           
            <div class="tbl-reg-wrap half">
                <FormLine :labelText="'프로젝트 유형'" :required="true">
                    <div>springboot Basic</div>
                </FormLine>
                <FormLine :labelText="'프로젝트 중요도'" :required="true">
                    <div>RT03</div>
                </FormLine>
                <FormLine :labelText="'프로젝트 명'" :required="true">
                    <div>springboot maven5</div>
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
                    <div>springboot maven5</div>
                </FormLine>
                
            </div>
        </div>
        <div class="btn-bottom-set flex justify-center">
            <button type="button" class="btn btn-sl nega" @click="goToPage('/main')">목록</button>
            <button type="button" class="btn btn-sl posi" @click="goToPage('/main/mainedit')">수정</button>
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
</script>

