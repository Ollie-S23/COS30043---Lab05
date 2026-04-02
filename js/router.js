const routes = [
    { path: '/job-overview', component: JobOverview },
    { path: '/job/:id', component: JobDetail, props: true }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});
