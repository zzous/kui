<template>
    <div id="adminNav">
        <button type="button" class="nav-toggle" @click="toggleNav"><span class="offscreen">메뉴숨기기</span></button>
        <div class="admin-fav-wrap" v-if="false">
            <div class="admin-fav-head" >
                <ul class="util">
                    
                    <li class="setting"><strong>helpDesk:</strong> 시스템 운영부 조민기 과장(3466)</li>
                    <li class="service-create"><button type="button" class="btn">서비스그룹 생성 신청</button></li>
                </ul>
                <div></div>
            </div>
        </div>
        <div class="admin-nav-scroller">
            <div class="admin-menu-wrap">
                <ul>
                    <li class="depth" v-for="(item, index) in menuList" :key="index">
                        <button type="button"
                            :class="['admin-menu-item dep1', { 'active': item.isActive }, { 'no-child': item?.submenu?.length == 0 }]"
                            @click="gnbOpen(index)">
                            {{ item.label }}
                        </button>
                        <ul class="depth2" v-if="item?.submenu?.length > 0">
                            <li v-for="(sub, i) in  item.submenu" :key="i">
                                <button type="button"
                                    :class="['admin-menu-item dep2', { 'active': sub.isActive }, { 'no-child': sub?.submenu?.length == 0 }]"
                                    @click="gnbOpen(index, i)">
                                    {{ sub.label }}
                                </button>
                                <ul  class="depth3" v-if="sub?.submenu?.length > 0">
                                    <li v-for="(depth, idx) in  2 " :key="idx">
                                        <button type="button"
                                            :class="['admin-menu-item dep3', { 'active':depth.isActive }]"
                                            @click="gnbOpen(index, i,idx)">
                                            {{ depth.label }}
                                        </button>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive,computed, onMounted, inject, ref } from 'vue';
const emits = defineEmits(['gnbOpen'])
const props = defineProps({
  menuList: {
    type: Array,
    default: [],
  },
})
const state = reactive({
    
});
const gnbOpen = (depth1, depth2, depth3) => {
    emits('gnbOpen', depth1, depth2, depth3)
}
const toggleNav = () => {
    console.log('toggleNav')
    const nav = document.querySelector('.layout');
    nav.classList.toggle('nav-hide');
}
</script>
<style scoped>
.admin-menu-wrap>ul>li>ul>li>ul>li.isActive {
    background-color: #e4ebf5;
}

.admin-menu-wrap>ul>li ul {
    display: none;
}

.admin-menu-item.active+ul {
    display: block;
}
</style>