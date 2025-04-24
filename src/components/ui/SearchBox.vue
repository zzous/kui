<template>
    <div class="tbl_searchin ui-data-filter">
        <div class="form-item">
          <slot name="formItem" />
          <div class="btn-filter-set">
              <button type="button" class="btn btn-sm" @click="onSearchResult"><span class="ico-search"></span>조회</button>
              <button type="button" class="btn btn-sm" @click="onrReload"><span class="ico-reload sg"></span><span class="offscreen">리로드</span></button>
          </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, computed, nextTick, ref, onMounted,markRaw } from 'vue';
const emits = defineEmits(['onSearchResult', 'onReload'])
const onSearchResult = () => {
    console.log('onSearchResult', '검색조회버튼');
    emits('onSearchResult');
}
const onrReload = () => {
    console.log('onrReload', '리로드버튼');
    emits('onReload');
}
</script>


