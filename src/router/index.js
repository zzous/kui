import { createRouter, createWebHistory } from 'vue-router';
import main from '@/router/modules/main.js';
const routes = [
    {
        path: '/',
        redirect: '/main',
        name: 'index'
    },
    {
        redirect: '/main',
        name: 'main',
        component: () => import('@/components/layout/Index.vue'),
        children: [
            ...main,
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/Login.vue'),
    },
    {
        path: '/member-join',
        name: 'member-join',
        component: () => import('@/views/login/MemberJoin.vue'),
    },
    {
        path: '/change-pass',
        name: 'change-pass',
        component: () => import('@/views/login/ChangePass.vue'),
    },
    {
        path: '/sample',
        name: 'sample',
        component: () => import('@/views/sample/Sample.vue'),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach(async (to, from, next) => {
    /* 라우터 전처리
    * to:  이동할 URL정보가 담긴 라우터 객체
    * from: 현재 URL정보가 담긴 라우터 객체
    * next : from 에서 to로 이동하기 위해 호출 되야 하는 함수, next()가 호출되기 전에는 이동하지 않음.
    */
    console.log('from ==>', from.fullPath);
    console.log('to ==>', to.fullPath);
    next();
});
export default router;
