const withPrefix = (prefix, routes) =>
    routes.map((route) => {
    route.path = prefix + route.path;
    return route;
});
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
            sublocation_depth: ['로그관리', '거래로그 조회', '거래로그 상세'],
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
        path: '/loglevel',
        meta: {
            unauthorized: true,
            sublocation_depth: ['로그관리', '로그레벨조회'],
        },
        name: 'loglevel',
        component: () => import('@/views/main/Sample.vue'),
    },
    ...withPrefix('/loglevelview', [
        {
            path: '/',
            name: 'loglevelview',
            component: () => import('@/views/main/SampleView.vue'),
            meta: {
                unauthorized: true,
                sublocation_depth: ['로그관리','로그레벨조회', '로그레벨 상세'],
            },
            props: true
        },
        {
            path: '/:viewId',
            name: 'loglevelview-detail',
            component: () => import('@/views/main/SampleView.vue'),
            meta: {
                unauthorized: true,
                sublocation_depth: ['로그관리', '로그레벨조회','로그레벨 상세'],
            },
            props: true
        }
    ]),
    {
        path: '/buildlist',
        meta: {
            unauthorized: true,
            sublocation_depth: ['전문관리', '전문이력조회'],
        },
        name: 'buildlist',
        component: () => import('@/views/main/BuildList.vue'),
    },
    {
        path: '/builddetail',
        meta: {
            unauthorized: true,
            sublocation_depth: ['전문관리', '전문이력조회', '전문이력상세'],
        },
        name: 'builddetail',
        component: () => import('@/views/main/BuildForm.vue'),
    },
    {
        path: '/authmanage',
        meta: {
            unauthorized: true,
            sublocation_depth: ['메뉴권한관리'],
        },
        name: 'authmanage',
        component: () => import('@/views/main/AuthManage.vue'),
    },
    {
        path: '/notice',
        meta: {
            unauthorized: true,
            sublocation_depth: ['자료실', '공지사항'],    
        },
        name: 'notice',
        component: () => import('@/views/main/Notice.vue'),
    },
    {
        path: '/orgmanage',
        meta: {
            unauthorized: true,
            sublocation_depth: ['사용자관리'],
        },  
        name: 'orgmanage',
        component: () => import('@/views/main/Member.vue'),
    },
    {
        path: '/Faq',
        meta: {
            unauthorized: true,
            sublocation_depth: ['자료실', 'FAQ'],
        },  
        name: 'Faq',
        component: () => import('@/views/main/Faq.vue'),
    },
    
]
export default main;
