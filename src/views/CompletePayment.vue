<template>
    <div>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <h1 class="mb-10 text-left ml-5 text-2xl font-bold">Checkout</h1>

            <div class="mx-auto max-w-8xl justify-center px-6 md:flex md:space-x-6 xl:px-0">

                <div class="rounded-lg md:w-2/3" >
                    <h1 class="mb-4  text-left text-lg font-bold">Shipping address </h1>
                    <hr class="my-4" />
                    <div>
                        <input type="radio" name="radio_address" id="radio_address" class="peer hidden" checked>
                        <span
                            class="peer-checked:border-yellow-400 ml-4 absolute left mt-14 box-content block h-1 w-1 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label
                            class="peer-checked:border-2 peer-checked:border-yellow-400 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                            for="radio_address">

                            <div class="ml-8">
                                <span class="mt-2 font-semibold">{{ getUsers.name }}</span>
                                <p class="text-slate-500 text-sm leading-6">{{ getAddress[0].phone }}</p>
                                <p class="text-slate-500 text-sm leading-6">{{ getAddress[0].address }}, {{ getAddress[0].city }},
                                    {{
                                        getAddress.country }}.</p>
                            </div>
                        </label>
                       
                    </div>
                    <div class="grid md:grid-cols-2 mt-5 mb-4 gap-6">
                        <div v-for="cart in getKeranjang" :key="cart.cart_id"
                            class="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                                src="https://img.freepik.com/premium-photo/fresh-bright-fruits-berries-white-background-ai-generated_447653-648.jpg?w=360"
                                alt="" />
                            <div class="flex w-full flex-col px-4 py-4">
                                <span class="font-semibold capitalize">{{ cart.name }}</span>
                                <span class=" mt-1 mb-2 float-right text-gray-700">{{ cart.qty }} pcs</span>
                                <p class="font-bold">{{ formatRupiah(cart.regular_price * cart.qty) }}</p>
                            </div>
                        </div>

                    </div>


                    <p class="mt-4 text-lg font-bold">Delivery Option</p>
                    <div class="grid md:grid-cols-2 mt-5 mb-5 gap-6">
                        <div class="relative">
                            <input class="peer hidden" id="radio_1" type="radio" value="standard" v-model="deliveryType"
                                name="radio_shipping" checked />
                            <span
                                class="peer-checked:border-yellow-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label
                                class="peer-checked:border-2 peer-checked:border-yellow-400 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                for="radio_1">
                                <img class="w-14 object-contain"
                                    src="https://www.vhv.rs/dpng/d/467-4673817_standard-shipping-icon-clipart-png-download-blue-delivery.png"
                                    alt="Standard Delivery" />
                                <div class="ml-5">
                                    <span class="mt-2 font-semibold">Standard Delivery</span>
                                    <p class="text-slate-500 text-sm leading-6">Delivery cost : {{ formatRupiah(standard) }}
                                    </p>
                                    <p class="text-slate-500 text-sm leading-6">Delivery timing : 2-4 Days</p>
                                </div>
                            </label>
                        </div>
                        <div class="relative">
                            <input class="peer hidden" id="radio_2" type="radio" name="radio_shipping" value="express"
                                v-model="deliveryType" checked />
                            <span
                                class="peer-checked:border-yellow-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label
                                class="peer-checked:border-2 peer-checked:border-yellow-400 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                for="radio_2">
                                <img class="w-14 object-contain"
                                    src="https://5.imimg.com/data5/TW/DF/GLADMIN-33279647/express-delivery-services-500x500.png"
                                    alt="Express Delivery" />
                                <div class="ml-5">
                                    <span class="mt-2 font-semibold">Express Delivery</span>
                                    <p class="text-slate-500 text-sm leading-6">Delivery cost : {{ formatRupiah(express) }}
                                    </p>
                                    <p class="text-slate-500 text-sm leading-6">Delivery timing : 2-4 Days</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <p class="mt-4 text-lg font-bold">Payment Option</p>
                    <div class="grid md:grid-cols-2 mt-5 mb-5 gap-6">
                        <div class="relative">
                            <input class="peer hidden" id="radio_3" type="radio" name="radio_payment" v-model="paymentType"
                                value="cash_on_delivery" checked />
                            <span
                                class="peer-checked:border-yellow-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label
                                class="peer-checked:border-2 peer-checked:border-yellow-400 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                for="radio_3">
                                <img class="w-14 object-contain"
                                    src="data:image/png;base64,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"
                                    alt="" />
                                <div class="ml-5 mt-4">
                                    <span class="mt-2 font-semibold">Cash on Delivery</span>
                                    <!-- <p class="text-slate-500 text-sm leading-6">Delivery cost : Rp.</p>
                                    <p class="text-slate-500 text-sm leading-6">Delivery timing : 2-4 Days</p> -->
                                </div>
                            </label>
                        </div>
                        <div class="relative">
                            <input class="peer hidden" id="radio_4" type="radio" name="radio_payment" v-model="paymentType"
                                value="payment_wallet" checked />
                            <span
                                class="peer-checked:border-yellow-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label
                                class="peer-checked:border-2 peer-checked:border-yellow-400 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                for="radio_4">
                                <img class="w-14 object-contain"
                                    src="https://png.pngtree.com/png-clipart/20190904/original/pngtree-orange-wallet-icon-png-image_4462385.jpg"
                                    alt="" />
                                <div class="ml-5 mt-4">
                                    <span class="mt-16 font-semibold ">Payment Wallet</span>
                                    <!-- <p class="text-slate-500 text-sm leading-6">Delivery cost : Rp.</p>
                                    <p class="text-slate-500 text-sm leading-6">Delivery timing : 2-4 Days</p> -->
                                </div>
                            </label>
                        </div>
                        

                    </div>



                </div>
                <!-- Sub total -->
                <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div class="mb-4 flex justify-between">
                        <p class="text-gray-700">Subtotal</p>
                        <p class="text-gray-700">{{ formatRupiah(subTotalHarga()) }}</p>
                    </div>
                   
                    <div>
                        <p class="text-sm mb-1 font-bold text-black"></p>
                        <p class="text-sm text-gray-800"></p>
                    </div>
                   
                    <hr class="my-4" />
                    <div class="flex justify-between">
                        <p class="text-lg font-bold">Total</p>
                        <div class="">
                            <p class="mb-1 text-lg font-bold"></p>
                            <p class="text-sm text-gray-700">{{ formatRupiah(subTotalHarga()) }}</p>
                        </div>
                    </div>
                    <!-- <router-link to="/order-confirmed/:orderCode"> -->
                        <button @click="performCheckout"
                            class="mt-6 w-full rounded-md bg-yellow-400 py-1.5 font-medium text-yellow-50 hover:bg-yellow-400">Place
                            Order</button>
                    <!-- </router-link> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            standard: 15000,
            express: 30000

        }
    },
    computed: {
        ...mapGetters('user', ['getUsers']),
        ...mapGetters('keranjang', ['getAddress']),
        ...mapGetters('keranjang', ['getKeranjang', 'getDataKeranjang']),
    },
    methods: {
        ...mapActions('user', ['fetchUsers']),
        ...mapActions('keranjang', ['fetchAddress']),
        ...mapActions('keranjang', ['fetchKeranjang'],),

        async performCheckout() {
            // Collect the product IDs to be checked out
            const cartItemIds = this.getKeranjang.map(cart => cart.cart_id);
            // Get user address
            const userAddressResponse = await this.$store.dispatch('keranjang/fetchAddress');
            const userAddressId = userAddressResponse.data[0].id;

            const checkoutPayload = {
                shippingAddress: userAddressId,
                billingAddress: userAddressId,
                paymentType: this.paymentType,
                deliveryType: this.deliveryType,
                cart_item_ids: cartItemIds
            };

            // Call the checkout action with the collected IDs and user address
            await this.$store.dispatch('keranjang/checkoutCart', checkoutPayload)
            .then(() => {
                this.$router.push(`/order-confirmed/${this.getDataKeranjang.order_code}`);
            });
        },

        // Format Rupiah
        formatRupiah(number) {
            const formatter = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            });
            return formatter.format(number);
        },

        // Total harga
        subTotalHarga() {
            this.subtotal = this.getKeranjang.reduce((acc, cart) => {
                return acc + parseFloat(cart.regular_price * cart.qty);
            }, 0);
            return this.subtotal
        },


    },
    beforeMount() {
        this.fetchAddress()
    },
    created() {
        this.fetchUsers(),
        this.fetchAddress()

    }
}


</script>