<template>
    <div>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">

                <div class="rounded-lg md:w-2/3">
                    <div v-for="cart in getKeranjang" :key="cart.cart_id"
                        class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <img src="https://img.freepik.com/premium-photo/fresh-bright-fruits-berries-white-background-ai-generated_447653-648.jpg?w=360"
                            alt="product-image" class="w-full rounded-lg sm:w-40" />
                        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div class="mt-5 sm:mt-0">
                                <h2 class="text-lg capitalize font-bold text-gray-900">{{ cart.name }}</h2>
                                <p class="text-lg font-semibold text-black cursor-auto my-3">{{
                                    formatRupiah(cart.dicounted_price) }}
                                </p>
                                <del>
                                    <p class="text-sm text-gray-600 cursor-auto ml-2">{{ formatRupiah(cart.regular_price) }}
                                    </p>
                                </del>
                            </div>
                            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                <div class="flex items-center border-gray-100">
                                    <span @click="editKeranjang({ cart_id: cart.cart_id, type: 'minus' })"
                                        class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                        - </span>
                                    <span class="mr-2 ml-2">
                                        {{ cart.qty }}
                                    </span>

                                    <span @click="editKeranjang({ cart_id: cart.cart_id, type: 'plus' })"
                                        class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                        + </span>
                                </div>
                                <div @click="deleteKeranjang(cart.cart_id)" class="flex items-center space-x-4">
                                    <p class="text-sm">{{ formatRupiah(cart.regular_price * cart.qty) }}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <!-- Sub total -->
                <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div class="mb-4 flex justify-between">
                        <p class="text-gray-700">Subtotal</p>
                        <p class="text-gray-700">{{ formatRupiah(subTotalHarga()) }}</p>
                    </div>
                    <!-- <div class="mb-2 flex justify-between">
                        <p class="text-1xl font-bold">Shipping address :</p>
                        
                    </div>
                    <div>
                        <p class="text-sm mb-1 font-bold text-black">{{ getUsers.name }}</p>
                        <p class="text-sm text-gray-800">{{getAddress.address}}, {{getAddress.city }}, {{ getAddress.country }}.</p>
                    </div> -->
                    <!-- <div class="flex justify-between">
                        <p class="text-gray-700">Shipping</p>
                        <p class="text-gray-700">{{ formatRupiah(shipping) }}</p>
                        
                        
                    </div> -->
                    <hr class="my-4" />
                    <div class="flex justify-between">
                        <p class="text-lg font-bold">Total</p>
                        <div class="">
                            <p class="mb-1 text-lg font-bold">{{ formatRupiah(subTotalHarga()) }}</p>
                            <p class="text-sm text-gray-700"></p>
                        </div>
                    </div>
                    <router-link to="/complete-payment">
                        <button
                            class="mt-6 w-full rounded-md bg-yellow-400 py-1.5 font-medium text-yellow-50 hover:bg-yellow-400">Check
                            out</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            cek: 1,
            shipping: 25000,

        }
    },
    computed: {
        ...mapGetters('keranjang', ['getKeranjang', 'getAddress'],),
        ...mapGetters('user', ['getUsers'])
    },
    methods: {
        ...mapActions('keranjang', ['fetchKeranjang', 'fetchAddress']),

        // Adress user
        ...mapActions('user', ['fetchUsers']),

        // Edit Keranjang  
        ...mapActions('product', ['editKeranjang']),

        // Hapus Keranjang
        ...mapActions('keranjang', ['deleteKeranjang']),

        // Format Rupiah
        formatRupiah(number) {
            const formatter = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            });
            return formatter.format(number);
        },

        subTotalHarga() {
            this.subtotal = this.getKeranjang.reduce((acc, cart) => {
                return acc + parseFloat(cart.regular_price * cart.qty);
            }, 0);
            return this.subtotal
        },


    },
    created() {
        this.fetchKeranjang()
        this.fetchAddress()
        this.fetchUsers()
    }

}


</script>