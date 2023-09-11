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
                            <router-link to="/category">
                                <a href="#" class="text-neutral-500 dark:text-neutral-200">Category</a>
                            </router-link>
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
        <div class="mx-auto max-w-6xl mt-10 justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-4/12">
                <img alt="ecommerce" class=" w-100 object-cover  object-center rounded  border-gray-200"
                    src="https://img.freepik.com/premium-photo/fresh-bright-fruits-berries-white-background-ai-generated_447653-648.jpg?w=360">
            </div>

            <div class="rounded-lg md:w-5/12">
                <h2 class="text-sm title-font text-gray-500 tracking-widest mb-2">BRAND NAME</h2>
                <h1 class="text-gray-900 text-3xl title-font mb-4 font-medium mb-1">{{
                    capitalizeFirstLetter(product.name) }}
                </h1>
                <div class="flex mb-4">
                    <span class="flex items-center">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                            </path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                            </path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                            </path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
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
                        <span class="text-gray-600 ml-3">729 Reviews</span>
                    </span>

                </div>
                <p class="leading-relaxed">"This is natural delicacy like no other! The fresh fruit we offer is the perfect
                    choice for lovers of natural taste and nutritional enjoyment. Every bite of this selected fruit takes
                    you on an extraordinary taste adventure.
                    Rich in nutrients, this fruit is not only a delicious snack, but also a smart choice for maintaining
                    your health. Get natural energy, high fiber, and a million vitamins in every part of this product.
                </p>

                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

                </div>

                <div class="flex">
                    <span class="title-font font-medium text-2xl text-gray-900">{{ formatRupiah(product.base_price)
                    }}</span>

                    <button @click="addwishlist(product.variations[0].product_id)"
                        class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z">
                            </path>
                        </svg>
                    </button>
                    <button class="ml-4" @click="deleteWishlist(product.id)">
                        Hapus Wishlist
                    </button>
                </div>

            </div>

            <div class="rounded-lg md:w-3/12">
                <div
                    class="max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">Set amount
                            and
                            notes</h5>
                    </a>
                    <div>
                        <img class="w-16"
                            src="https://img.freepik.com/premium-photo/fresh-bright-fruits-berries-white-background-ai-generated_447653-648.jpg?w=360"
                            alt="">
                    </div>

                    <div>
                        <h2 class="font-semibold text-black capitalize mt-2">{{ product.name }}</h2>
                    </div>

                    <!-- <div class="class= grid md:grid-cols-3 mb-3 mt-3">
                        <div class="flex items-center border-gray-100">
                            
                            <span 
                                class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-yellow-400 hover:text-yellow-50">
                                - </span>
                            <span class="mr-2 ml-2">
                                
                            </span>
                            <span 
                                class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-yellow-400 hover:text-yellow-50">
                                + </span>
                        </div>

                    </div> -->

                    <!-- <h2 class="font-bold text-black truncate mt-2">Stock : 1.950</h2> -->
                    <div class="mt-4">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">Subtotal</h2>
                        <h2 class="text-2xl mt-2 font-bold text-black truncate block capitalize mb-4 ">{{
                            formatRupiah(product.base_price) }}</h2>
                    </div>

                    <!-- Authtentication Token -->
                    <div class="mb-4" v-if="token">
                        <button @click="addKeranjang(product.variations[0].id)"
                            class="grid w-full cursor-pointer select-none rounded-md border border-yellow-400 bg-yellow-400 py-2 px-5 text-center align-middle font-bold text-white truncate text-white shadow hover:border-yellow-400 hover:bg-yellow-400 hover:text-white focus:border-yellow-400 focus:bg-yellow-400 focus:text-white focus:shadow-none"
                            type="submit">Add to Cart</button>
                    </div>

                    <div class="mb-4" v-else>
                        <router-link to="/login">
                            <button
                                class="grid w-full cursor-pointer select-none rounded-md border border-yellow-400 bg-white-400 py-2 px-5 text-center align-middle font-bold text-yellow-400 truncate "
                                type="submit">Add to Cart</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>


        <div class="mx-auto max-w-6xl mt-10 justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-1/3">
                <div class="flex w-full flex-col">
                    <div class="ml-32">
                        <div class="my-4 rounded-xl  sm:my-0 sm:ml-auto">
                            <div class="flex h-16 items-center text-4xl font-bold ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 text-yellow-300"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                4.7
                            </div>

                        </div>
                    </div>
                    <p class="text-sm ml-28 mb-3 text-gray-500">96% of buyers are satisfied</p>
                    <div class="text-gray-700">
                        <p class="font-medium">1,929 ratings • 729 reviews</p>
                        <ul class="mb-6 mt-2 space-y-2">
                            <li class="flex items-center text-sm font-medium">
                                <span class="w-3">5</span><span class="mr-4 text-yellow-300"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg></span>
                                <div class="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                                    <div class="h-full w-10/12 bg-yellow-300"></div>
                                </div>
                                <span class="w-3">1.722</span>
                            </li>
                            <li class="flex items-center text-sm font-medium">
                                <span class="w-3">4</span><span class="mr-4 text-yellow-300"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg></span>
                                <div class="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                                    <div class="h-full w-8/12 bg-yellow-300"></div>
                                </div>
                                <span class="w-3">132</span>
                            </li>
                            <li class="flex items-center text-sm font-medium">
                                <span class="w-3">3</span><span class="mr-4 text-yellow-300"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg></span>
                                <div class="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                                    <div class="h-full w-1/12 bg-yellow-300"></div>
                                </div>
                                <span class="w-3">33</span>
                            </li>
                            <li class="flex items-center text-sm font-medium">
                                <span class="w-3">2</span><span class="mr-4 text-yellow-300"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg></span>
                                <div class="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                                    <div class="h-full w-0 bg-yellow-300"></div>
                                </div>
                                <span class="w-3">9</span>
                            </li>
                            <li class="flex items-center text-sm font-medium">
                                <span class="w-3">1</span><span class="mr-4 text-yellow-300"><svg
                                        xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg></span>
                                <div class="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                                    <div class="h-full w-1/12 bg-yellow-300"></div>
                                </div>
                                <span class="w-3">33</span>
                            </li>
                        </ul>
                    </div>
                    <!-- <button class="w-36 rounded-full bg-blue-900 py-3 text-white font-medium">Write a review</button> -->
                </div>
            </div>
            <div class="mt-6 h-full ml-4 md:mt-0 md:w-2/3">
                <RatingReviewComponent />
            </div>
        </div>
    </div>
</template>


<script>
import RatingReviewComponent from "../components/RatingReviewComponent.vue";
import { mapGetters, mapActions } from "vuex";
import Swal from 'sweetalert2';

export default {
    components: {
        RatingReviewComponent
    },
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
        wishlist() {
            return this.$store.getters['wishlist/getWishlist'];
        },
    },
    methods: {
        ...mapActions("product", ["fetchSingleProduct"]),
        ...mapActions('product', ['fetchProduct']),

        // Keranjang
        ...mapActions('keranjang', ['fetchKeranjang']),


        // Tambah Keranjang
        ...mapActions('product', ['addKeranjang']),

        // Tambah Wishlist
        async addwishlist(productId) {
            await this.$store.dispatch('wishlist/addwishlist', productId);
            Swal.fire({
                title: 'Product successfully added to wishlist !',
                icon: 'success',
                confirmButtonText: 'OK',
            });
        },

        // Hapus Wishlist
        ...mapActions('wishlist', ['deleteWishlist']),


        capitalizeFirstLetter(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        },


        // Format Rupiah
        formatRupiah(number) {
            const formatter = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            });
            return formatter.format(number);
        },
    },
    beforeMount() {
        this.fetchProduct()
        this.fetchKeranjang()
    },
    mounted() {
        const product_slug = this.$route.params.slug;
        
        this.fetchSingleProduct(product_slug);

        // Authtentication Token
        const cekToken = localStorage.getItem("token")
        this.token = cekToken
    },

};

</script>


