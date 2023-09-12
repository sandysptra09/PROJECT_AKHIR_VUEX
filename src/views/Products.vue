<template>
    <div class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div
            class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block" viewBox="0 0 100 100"
                fill="currentColor" preserveAspectRatio="none slice">
                <path d="M50 0H100L50 100H0L50 0Z"></path>
            </svg>
            <img class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                src="https://e0.pxfuel.com/wallpapers/281/373/desktop-wallpaper-fruits-salad-berries-grapes-fresh.jpg"
                alt="" />
        </div>
        <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    Refresh Your Life<br class="hidden md:block" />
                    with Natural Delicacy
                    <span class="inline-block text-deep-purple-accent-400">is real</span>
                </h2>
                <p class="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                    We believe that a healthy life starts with good food choices. Therefore, we provide a wide range of
                    fresh and high quality fruit straight to your door.
                </p>
                <div class="flex items-center">
                    <a href="#scroll_product"
                        class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-yellow-300 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                        Get started
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-4">
        <p class="text-gray-900 text-2xl title-font font-medium mb-8 ml-3">
            Popular Categories
        </p>

        <swiper :slidesPerView="5" :spaceBetween="30" :modules="modules" :autoplay="{ delay: 4000 }" class="mySwiper">
            <swiper-slide v-for="categories in getCategories" :key="categories.id">
                <router-link :to="{ name: 'FilterCategory', params: { slug: categories.slug } }">
                    <div class="p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="img-fluid"
                                src="https://img.freepik.com/premium-vector/fruit-color-gradient-logo-design_93835-1653.jpg" />
                        </a>
                        <div class="mt-4">
                            <h3 class="text-lg font-bold text-black truncate block capitalize mb-1">{{ categories.name }}
                            </h3>
                        </div>
                    </div>
                </router-link>
            </swiper-slide>
        </swiper>
    </div>

    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <p class="text-gray-900 text-2xl title-font font-medium mb-8 ml-3">Flash Sale</p>
        <div class="grid md:grid-cols-3 gap-8">
            <div v-for="product in getShortProduct" :key="product.id"
                class="product-card w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

                <router-link :to="{ name: 'DetailProduct', params: { slug: product.slug } }" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row
                    md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg md:h-auto ml-4 md:w-28 md:rounded-none md:rounded-l-lg"
                        src="https://img.freepik.com/premium-photo/fresh-bright-fruits-berries-white-background-ai-generated_447653-648.jpg?w=360" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <p class="text-lg font-bold text-black truncate block capitalize">{{
                            formatRupiah(product.base_price) }}</p>
                        <p class="text-sm font-bold text-gray-600 truncate block capitalize mt-2 mb-4">{{ product.name }}
                        </p>
                        <div class="flex items-center">
                            <p class="text-sm font-bold text-black truncate block capitalize mt-2">Buy Now</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 ml-28 mt-2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 ml-4 mt-2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>

                        </div>

                    </div>
                </router-link>

            </div>
        </div>
    </div>

    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-8" id="scroll_product">
        <p class="text-gray-900 text-2xl title-font font-medium mb-8 ml-3">Product</p>

        <div class="grid md:grid-cols-4 gap-8">
            <div v-for="product in getProduct" :key="product.id"
                class="product-card w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="">
                    <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/collection-of-fruit-on-white-background-nicholas-eveleigh.jpg"
                        alt="Product" class="h-80 w-full object-cover rounded-t-xl" />
                </a>
                <div class="px-4 py-3">
                    <a href="">
                        <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                    </a>
                    <router-link :to="{ name: 'DetailProduct', params: { slug: product.slug } }">
                        <a href="">
                            <p class="text-lg font-bold text-black truncate block capitalize">{{ product.name }}</p>
                        </a>

                        <div class="flex items-center">
                            <p class="text-lg font-semibold text-black cursor-auto my-3">{{
                                formatRupiah(product.base_discounted_price) }}
                            </p>
                            <del>
                                <p class="text-sm text-gray-600 cursor-auto ml-2">{{ formatRupiah(product.base_price) }}</p>
                            </del>
                            <div class="ml-1">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
        ...mapGetters('product', ['getProduct', 'getShortProduct']),
        ...mapGetters('category', ['getCategories']),
    },
    methods: {
        ...mapActions('product', ['fetchProduct', 'fetchShortProduct']),
        ...mapActions('category', ['fetchCategory']),

        // Format Rupiah
        formatRupiah(number) {
            const formatter = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            });
            return formatter.format(number);
        },
    },
    created() {
        this.fetchProduct(),
            this.fetchShortProduct()
        this.fetchCategory();
    },
    setup() {
        return {
            modules: [Pagination],
            modules: [Autoplay]
        };
    },
}

</script>

