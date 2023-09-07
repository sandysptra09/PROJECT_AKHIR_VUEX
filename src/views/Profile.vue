<template>
    <!-- <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div class="h1">ID : {{ getUsers.id }}</div>
        <div class="h1">Name : {{ getUsers.name }}</div>
        <div class="h1">Email : {{ getUsers.email }}</div>
        <div class="h1">Phone : {{ getUsers.phone }}</div>


    </div> -->

    <div class="p-16">
        <div class="p-8 bg-white shadow mt-24">
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                    <div>
                        <p class="font-bold text-gray-700 text-xl">{{ getKeranjang.length }}</p>
                        <p class="text-gray-400">In Cart</p>
                    </div>
                    <div>
                        <p class="font-bold text-gray-700 text-xl">10</p>
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

                            <div class="ml-4">
                                <span class="mt-2 font-semibold">{{ getUsers.name }}</span>
                                <p class="text-slate-500 text-sm leading-6">{{ getAddress.phone }}</p>
                                <p class="text-slate-500 text-sm leading-6">{{ getAddress.address }}, {{ getAddress.city }},
                                    {{
                                        getAddress.country }}.</p>
                            </div>
                        </label>

                    </div>
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

                            <p class="text-sm text-gray-700">{{ getAddress.phone }}</p>
                        </div>
                    </div>
                    <div class="flex justify-between mt-2">
                        <p class="text-sm font-semibold">City</p>
                        <div class="">

                            <p class="text-sm text-gray-700">{{ getAddress.city }}</p>
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
        ...mapGetters('user', ['getUsers', 'getDasboard']),
        ...mapGetters('keranjang', ['getKeranjang']),
        ...mapGetters('keranjang', ['getAddress']),
        ...mapGetters('wishlist', ['getWishlist'])
    },
    methods: {
        ...mapActions('user', ['fetchUsers', 'fetchDasboard']),
        ...mapActions('keranjang', ['fetchKeranjang']),
        ...mapActions('keranjang', ['fetchAddress']),
        ...mapActions('wishlist', ['fetchWishlist'])
    },
    beforeMount() {
        this.fetchAddress()
    },
    created() {
        this.fetchUsers(),
        this.fetchKeranjang()
        this.fetchDasboard()
        this.fetchAddress()
        this.fetchWishlist()
    }
}

</script>
