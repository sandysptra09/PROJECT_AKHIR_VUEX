import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue'
import Products from '../views/Products.vue'
import DetailProduct from '../views/DetailProduct.vue'
import AllCategories from '../views/AllCategories.vue'
import FilterPageCategory from '../views/FilterPageCategory.vue'
import AllBrands from '../views/AllBrands.vue'
import FiltePageBrand from '../views/FilterPageBrand.vue'
import CartCheckout from '../views/CartCheckout.vue'
import CompletePayment from '../views/CompletePayment.vue'
import OrderConfirmed from '../views/OrderConfirmed.vue'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


const routes = [
    {
        path: '/user',
        name: 'User',
        component: Profile,
        beforeEnter : cekToken,
        
    },
    {
        path: '/',
        name: 'Products',
        component: Products
    },
    {
        path: "/product/:slug",
        name: "DetailProduct",
        component: DetailProduct,
      },
    {
        path: '/category',
        name: 'All-Categories',
        component: AllCategories
    },
    {
        path: "/category/:slug",
        name: "FilterCategory",
        component: FilterPageCategory,
        props: true,
    },
    {
        path: '/brands',
        name: 'All-Brands',
        component: AllBrands
    },
    {
        path: '/brands/:id',
        name: 'FilterBrand',
        component: FiltePageBrand
    },
    {
        path: '/cart-checkout',
        name: 'Cart-Checkout',
        component: CartCheckout
    },
    {
        path: '/complete-payment',
        name: 'Complete-Payment',
        component: CompletePayment
    },
    {
        path: '/order-confirmed/:orderCode',
        name: 'OrderConfirmed',
        component: OrderConfirmed,
        props: true,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true },
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/home',
        name: 'Search',
        component: Home
    },
    
]

function cekToken(to, from, next) {
    var isAuthenticated = false;

    if (localStorage.getItem('token')) {
        isAuthenticated = true
        next();
    }
    else {
        isAuthenticated = false
        next('/login')
    }

}

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  


export default router