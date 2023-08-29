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


    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16" id="scroll_product">
        <p class="text-gray-900 text-3xl title-font font-medium mb-8 ml-3">Product</p>
        
        <div class="grid md:grid-cols-4 gap-8">

            <div v-for="product in getProduct" :key="product.id"
                class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="">
                    <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/collection-of-fruit-on-white-background-nicholas-eveleigh.jpg"
                        alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                </a>
                <div class="px-4 py-3 w-72">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        class="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                        <path
                                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
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

export default {
    computed: {
        ...mapGetters('product', ['getProduct'])
    },
    methods: {
        ...mapActions('product', ['fetchProduct']),

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
        this.fetchProduct()
    }
}

</script>