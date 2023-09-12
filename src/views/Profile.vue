<template>
    <div class="p-16">
        <div class="p-8 bg-white shadow mt-24">
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                    <div>
                        <p class="font-bold text-gray-700 text-xl">{{ getKeranjang.length }}</p>
                        <p class="text-gray-400">In Cart</p>
                    </div>
                    <div>
                        <p class="font-bold text-gray-700 text-xl">{{ getWishlist.length }}</p>
                        <p class="text-gray-400">In Wishlist</p>
                    </div>
                    <div>
                        <p class="font-bold text-gray-700 text-xl">{{ getDasboard.total_order_products }}</p>
                        <p class="text-gray-400">Ordered</p>
                    </div>
                </div>
                <div class="relative">
                    <div
                        class="w-48 h-48 bg-yellow-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-yellow-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                    <div>
                        <p class="font-bold text-gray-700 text-xl">Rp. 0</p>
                        <p class="text-gray-400">My Wallet</p>
                    </div>

                </div>
            </div>
            <div class="mt-20 text-center border-b pb-12">
                <h1 class="text-4xl font-medium text-gray-700">{{ getUsers.name }} </h1>

                <p class="font-light text-gray-600 mt-3">{{ getUsers.email }}</p>

            </div>

            <div class="mx-auto max-w-5xl justify-center mt-6 px-6 md:flex md:space-x-6 xl:px-0">
                <div class="rounded-lg md:w-2/3">
                    <p class="text-gray-700 font-semibold">Default Address</p>
                    <div class="relative mt-4">
                        <input type="radio" name="" class="peer hidden" checked>
                        <label
                            class="peer-checked:border-2 peer-checked:border-yellow-400 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                            for="">

                            <div class="ml-2">
                                <span class="mt-2 font-semibold">{{ getUsers.name }}</span>
                                <p class="text-slate-500 text-sm leading-6">{{ getAddress[0].phone }}</p>
                                <p class="text-slate-500 text-sm leading-6">{{ getAddress[0].address }}, {{
                                    getAddress[0].city }},
                                    {{
                                        getAddress.country }}.</p>
                            </div>
                        </label>

                    </div>

                    <div class="relative mt-4" v-for="address in getAddress" :key="address.id">
                        <input type="radio" name="radio_address" id="radio_address" class="peer hidden">

                        <label class=" flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                            for="radio_address">

                            <div class="ml-2">
                                <span class="mt-2 font-semibold">{{ getUsers.name }} </span>
                                <p class="text-slate-500 text-sm leading-6">{{ address.phone }}</p>
                                <p class="text-slate-500 text-sm leading-6">{{ address.address }}, {{ address.city }},
                                    {{
                                        address.country }}.</p>
                            </div>
                            <div @click="deleteAddress(address.id)">
                                <button class="text-slate-500 text-sm leading-6 ml-72">Delete</button>
                            </div>

                        </label>

                    </div>


                    <div class="mt-2">
                        <ModalAddressComponent></ModalAddressComponent>
                    </div>

                    <div class="mt-6">
                        <p class="text-gray-700 font-semibold">Product in Wishlist</p>
                        <div class="grid md:grid-cols-3 gap-6">
                            <div v-for="wishlist in getWishlist" :key="wishlist.id"
                                class="product-card w-full mt-4 bg-white shadow-md rounded-lg">
                                <a href="">
                                    <img class="object-cover w-full rounded-t-lg md:h-auto ml-10 md:w-28 md:rounded-none md:rounded-l-lg"
                                        src="https://img.freepik.com/premium-photo/fresh-bright-fruits-berries-white-background-ai-generated_447653-648.jpg?w=360"
                                        alt="">
                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                        <p class="text-lg font-bold text-black truncate block capitalize">{{
                                            formatRupiah(wishlist.base_price) }}</p>
                                        <p class="text-sm font-bold text-gray-600 truncate block capitalize mt-2 mb-4">{{
                                            wishlist.name }}
                                        </p>
                                    </div>
                                </a>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-28 mb-3">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    <button @click="deleteWishlist(wishlist.id)">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" class="w-6 h-6 ml-4 fill-red-700 mb-3">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </button>


                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div>
                        <div v-for="orderHistory in getOrderHistory" :key="orderHistory.id">
                            <p>{{ getOrderHistory.code }}</p>
                        </div>
                    </div> -->

                </div>

                <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <p class="text-gray-700 font-semibold">User info</p>
                    <div class="flex justify-between mt-2">
                        <p class="text-sm font-semibold">Name</p>
                        <div class="">

                            <p class="text-sm text-gray-700">{{ getUsers.name }}</p>
                        </div>
                    </div>
                    <div class="flex justify-between mt-2">
                        <p class="text-sm font-semibold">Email</p>
                        <div class="">

                            <p class="text-sm text-gray-700">{{ getUsers.email }}</p>
                        </div>
                    </div>
                    <div class="flex justify-between mt-2">
                        <p class="text-sm font-semibold">Phone</p>
                        <div class="">

                            <p class="text-sm text-gray-700">{{ getAddress[0].phone }}</p>
                        </div>
                    </div>
                    <div class="flex justify-between mt-2">
                        <p class="text-sm font-semibold">City</p>
                        <div class="">

                            <p class="text-sm text-gray-700">{{ getAddress[0].city }}</p>
                        </div>
                    </div>

                    <div class="mt-12">
                        <p class="text-gray-700 font-semibold">Recent Purchase History</p>

                        <div v-for="recentProduct in getRecentProduct" :key="recentProduct.id"
                            class="bg-white mt-4 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">

                            <p class="text-sm font-bold text-gray-600 truncate block capitalize mt-2 ml-4">{{
                                recentProduct.name }}</p>
                            <div class="flex items-center">
                                <img class="object-cover w-full mt-2 mb-2 rounded-t-lg md:h-auto ml-4 md:w-12 md:rounded-none md:rounded-l-lg"
                                    src="https://img.freepik.com/premium-photo/fresh-bright-fruits-berries-white-background-ai-generated_447653-648.jpg?w=360"
                                    alt="">
                                <p class="text-sm font-bold text-black truncate block capitalize ml-2">{{
                                    formatRupiah(recentProduct.base_price) }}</p>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ModalAddressComponent from '../components/ModalAddressComponent.vue';

export default {
    components: {
        ModalAddressComponent
    },
    computed: {
        ...mapGetters('user', ['getUsers', 'getDasboard', 'getRecentProduct']),
        ...mapGetters('keranjang', ['getKeranjang']),
        ...mapGetters('keranjang', ['getAddress']),
        ...mapGetters('wishlist', ['getWishlist']),
        // ...mapGetters('order', ['getOrderHistory'])
    },
    methods: {
        ...mapActions('user', ['fetchUsers', 'fetchDasboard', 'fetchRecentProduct']),
        ...mapActions('keranjang', ['fetchKeranjang']),
        ...mapActions('keranjang', ['fetchAddress']),
        ...mapActions('wishlist', ['fetchWishlist']),

        // Hapus Wishlist
        ...mapActions('wishlist', ['deleteWishlist']),
        
        ...mapActions('address', ['deleteAddress']),
        // ...mapActions('order', ['fetchOrderHistory']),

        formatRupiah(number) {
            const formatter = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            });
            return formatter.format(number);
        },
    },
    beforeMount() {
        this.fetchAddress()
    },
    created() {
        this.fetchUsers(),
            this.fetchKeranjang()
        this.fetchDasboard()
        this.fetchAddress()
        this.fetchRecentProduct()
        this.fetchWishlist()
        //    this.fetchOrderHistory()
    }
}

</script>
