import { createRouter, createWebHistory } from 'vue-router'

import dashboard from '../pages/master/dashboard.vue'
import department from '../pages/department.vue'
import employee from '../pages/employee.vue'
import login from '../pages/auth/login.vue'
import register from '../pages/auth/register.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: dashboard,
        children: [
            {
                path: '/department',
                name: 'Department',
                component: department
            },
            {
                path: '/employee',
                name: 'Employee',
                component: employee
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: login
    },
    {
        path: '/register',
        name: 'Register',
        component: register
    },
]

const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes
    });
    return router;
}




