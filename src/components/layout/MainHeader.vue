<template>
    <div>
        <header id="adminHeader">
            
            <h1>

            <span class="s-name">
                <strong class="s-badge">P클라우드 포탈</strong>
            </span>

            </h1>
            <ul class="util">
                <li>
                    <a href="#" class="pw" @click="showModal">비밀번호 변경</a>
                </li>
                <li>
                    <a href="#" class="session">접속 IP 0:0:0:0:0:0:0:1 (마지막 접속 일시 : 2025-04-07 10:00:00)</a>
                </li>
                <li>
                    <a href="#" class="user">김국민님 서비스 관리자</a>
                </li>
                <!-- <li>
                    <a href="#" class="session" @click="resetCounter">세션만료 남은시간 <span>{{ counter.hour }}:{{ counter.min }}:{{ counter.sec }}</span></a>
                </li> -->
                <li>
                    <a href="#" class="logout" @click="signOut">로그아웃</a>
                </li>
            </ul>
        </header>
    </div>
</template>

<script setup>
import { reactive, computed, nextTick, ref, inject, onMounted } from 'vue';
const state = reactive({
});
const resetCounter = () => {
    isShowlogin.value = false; // 로그인 연장 팝업 close
    counter.count = 1800000;
    clearInterval(counter.interval);
    sessionCounter();
};
const counter = reactive({
    interval: null,
    count: 1800000, // milliseconds
    hour: computed(() => String(Math.floor(counter.count / 3600000)).padStart(2, '0')),
    min: computed(() => String(Math.floor((counter.count % 3600000) / 60000)).padStart(2, '0')),
    sec: computed(() => String(Math.floor((counter.count % 60000) / 1000)).padStart(2, '0'))
});
</script>
<style>
.helper{display: flex; justify-content: flex-end; padding-right:30px; font-weight:700; }
</style>
