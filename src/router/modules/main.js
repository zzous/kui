const main = [
    {
        path: '/main',
        name: 'mainpage',
        component: () => import('@/views/main/Main.vue'),
        meta: {
            unauthorized: true,
            sublocation_depth: ['로그관리', '거래로그 조회']
        }
    },
    {
        path: '/main/mainview',
        name: 'mainview',
        meta: {
            unauthorized: true,
            sublocation_depth: ['로그관리', '거래로그 상세'],
        },
        
        component: () => import('@/views/main/MainView.vue'),
    },
    {
        path: '/main/mainedit',
        meta: {
            unauthorized: true,
            sublocation_depth: ['빌드/배포관리', '프로젝트 수정'],
        },
        
        name: 'mainedit',
        component: () => import('@/views/main/MainEdit.vue'),
    },
    {
        path: '/buildlist',
        meta: {
            unauthorized: true,
            sublocation_depth: ['빌드/배포관리', '빌드 이력'],
        },
        name: 'buildlist',
        component: () => import('@/views/main/BuildList.vue'),
    },
    {
        path: '/authmanage',
        meta: {
            unauthorized: true,
            sublocation_depth: ['권한관리'],
        },
        name: 'authmanage',
        component: () => import('@/views/main/AuthManage.vue'),
    },
    {
        path: '/notice',
        meta: {
            unauthorized: true,
            sublocation_depth: ['공지사항'],    
        },
        name: 'notice',
        component: () => import('@/views/main/Notice.vue'),
    },
    {
        path: '/orgmanage',
        meta: {
            unauthorized: true,
            sublocation_depth: ['조직관리'],
        },  
        name: 'orgmanage',
        component: () => import('@/views/main/Member.vue'),
    },
    {
        path: '/Faq',
        meta: {
            unauthorized: true,
            sublocation_depth: ['공지사항', 'FAQ'],
        },  
        name: 'Faq',
        component: () => import('@/views/main/Faq.vue'),
    },
    
]
export default main;
