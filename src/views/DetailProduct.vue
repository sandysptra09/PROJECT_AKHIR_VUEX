<template>
    <div v-if="product">
        <nav class="relative flex w-full flex-wrap items-center justify-between  lg:flex-wrap lg:justify-start mt-3 ml-4"
            data-te-navbar-ref>
            <div class="flex w-full flex-wrap items-center justify-between px-3">
                <nav class="bg-grey-light w-full rounded-md" aria-label="breadcrumb">
                    <ol class="list-reset flex">
                        <li>
                            <router-link to="/" class="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200">
                                <svg class="w-6 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" fill="#000000">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path
                                        d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
                                </svg>

                            </router-link>
                        </li>
                        <li>
                            <span class="mx-4 text-neutral-500 dark:text-neutral-200">/</span>
                        </li>
                        <li>
                            <router-link to="/">
                                <a href="#" class="text-neutral-500 dark:text-neutral-200">Product</a>
                            </router-link>
                            <span class="mx-4 h-auto text-gray-400 font-medium">/</span>
                        </li>

                        <li>
                            <router-link to="/all-categories">
                                <a href="#" class="text-neutral-500 dark:text-neutral-200">Category</a>
                            </router-link>
                            <span class="mx-4 h-auto text-gray-400 font-medium">/</span>
                        </li>

                        <li>
                            <a href="#" class="text-neutral-500 dark:text-neutral-200">Name Category</a>

                            <span class="mx-4 h-auto text-gray-400 font-medium">/</span>
                        </li>

                        <li>
                            <a href="#" class="text-neutral-500 dark:text-neutral-200">{{
                                capitalizeFirstLetter(product.name)
                            }}</a>
                        </li>
                    </ol>
                </nav>
            </div>
        </nav>


        <!-- Detail Product -->
        <section class="text-gray-700 body-font overflow-hidden bg-white">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-6 mb-4">
                <div class="grid md:grid-cols-3 gap-8">
                    <img alt="ecommerce" class=" w-full object-cover object-center rounded  border-gray-200"
                        src="https://img.freepik.com/premium-photo/fresh-bright-fruits-berries-white-background-ai-generated_447653-648.jpg?w=360">

                    <div class="rounded-lg p-8 md:p-2 ">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest mb-2">CATEGORY NAME</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{
                            capitalizeFirstLetter(product.name) }}
                        </h1>
                        <div class="flex mb-4">
                            <span class="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-300"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-300"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-300"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-300"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                    </path>
                                </svg>
                                <span class="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                <a class="text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a class="ml-2 text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        class="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="ml-2 text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        class="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                        </path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha
                            taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage
                            brooklyn.
                            Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over,
                            neutra
                            jean shorts keytar banjo tattooed umami cardigan.</p>
                        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                            <div class="flex">
                                <span class="mr-3">Color</span>
                                <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button
                                    class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button
                                    class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div class="flex ml-6 items-center">
                                <span class="mr-3">Size</span>
                                <div class="relative">
                                    <select
                                        class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span
                                        class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div class="flex">
                            <span class="title-font font-medium text-2xl text-gray-900">Rp. {{ product.base_price }}</span>
                           
                            <button
                                class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    class="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>


                    <div
                        class="max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Set amount
                                and
                                notes</h5>
                        </a>
                        <div class="class= grid md:grid-cols-3">
                            <img class="rounded-lg" height="80px" width="80px"
                                src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" alt="image description">
                            <h2 class="text-neutral-700 dark:text-neutral-500 mt-6">The Catcher, 34</h2>
                        </div>

                        <div class="class= grid md:grid-cols-3 mb-3 mt-3">
                            <div class="flex items-center border-gray-100">
                                <!-- Counter Item -->
                                <span @click="kurang"
                                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-yellow-400 hover:text-yellow-50">
                                    - </span>
                                    <span class="mr-2 ml-2">
                                            {{ cek }}
                                        </span>
                                <span @click="tambah"
                                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-yellow-400 hover:text-yellow-50">
                                    + </span>
                            </div>
                            <h2 class="font-bold text-black truncate mt-2">Stock : 1.950</h2>
                        </div>

                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline
                            process
                            on how to certify for your weekly benefits:</p>

                        <div class="class= grid md:grid-cols-2">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">Subtotal</h2>
                            <h2 class="text-2xl font-bold text-black truncate block capitalize mb-4 px-1">Rp. {{ product.base_price*cek }}</h2>
                        </div>

                        <!-- Authtentication Token -->
                        <div class="mb-4" v-if="token">
                            <button @click="addKeranjang(product.variations[0].id)"
                                class="grid w-full cursor-pointer select-none rounded-md border border-yellow-400 bg-yellow-400 py-2 px-5 text-center align-middle font-bold text-white truncate text-white shadow hover:border-yellow-400 hover:bg-yellow-400 hover:text-white focus:border-yellow-400 focus:bg-yellow-400 focus:text-white focus:shadow-none"
                                type="submit">+ Cart</button>
                        </div>
                        
                        <div class="mb-4" v-else>
                            <router-link to="/login">
                                <button
                                    class="grid w-full cursor-pointer select-none rounded-md border border-yellow-400 bg-white-400 py-2 px-5 text-center align-middle font-bold text-yellow-400 truncate "
                                    type="submit">Buy Now</button>
                            </router-link>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    </div>
    <!-- <div v-else>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <center>
                <img src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif" alt="">
            </center>
        </div>
    </div> -->
</template>


<script>

import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            token: null,
            cek: 1
        }
    },
    computed: {
        ...mapGetters("product", ["getProductBySlug"]),
        product() {
            return this.getProductBySlug(this.$route.params.slug);
        },
    },
    methods: {
        ...mapActions("product", ["fetchSingleProduct"]),
        ...mapActions('product', ['fetchProduct']),

        // Keranjang
        ...mapActions('keranjang', ['fetchKeranjang']),
        

        // Tambah Keranjang
        ...mapActions('product', ['addKeranjang']),
        

        capitalizeFirstLetter(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        },
        tambah() {
            this.cek++
        },
        kurang() {
            if(this.cek > 1) {
                this.cek--
            }
            
        }
    },
    beforeMount() {
        this.fetchProduct()
        this.fetchKeranjang()
    },
    mounted() {
        const product_slug = this.$route.params.slug;
        // console.log("Fetching single product with Slug:", product_slug);
        this.fetchSingleProduct(product_slug);

        // Authtentication Token
        const cekToken = localStorage.getItem("token")
        this.token = cekToken
    },

};

</script>