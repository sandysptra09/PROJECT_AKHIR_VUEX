<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div class="grid md:grid-cols-4 gap-8">

            <div v-for="product in getProduct" :key="product.id"
                class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="">
                    <img src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" alt="Product"
                        class="h-80 w-72 object-cover rounded-t-xl" />
                </a>
                <div class="px-4 py-3 w-72">
                    <a href="">
                        <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                    </a>
                    <router-link :to="{name : 'DetailProduct', params: { slug: product.slug }}">
                        <a href="">
                            <p class="text-lg font-bold text-black truncate block capitalize">{{ product.name }}</p>
                        </a>
                    </router-link>

                    <div class="flex items-center">
                        <p class="text-lg font-semibold text-black cursor-auto my-3">Rp. {{ product.base_discounted_price }}
                        </p>
                        <del>
                            <p class="text-sm text-gray-600 cursor-auto ml-2">Rp. {{ product.base_price }}</p>
                        </del>
                        <div class="ml-auto">
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
        ...mapActions('product', ['fetchProduct'])
    },
    created() {
        this.fetchProduct()
    }
}

</script>