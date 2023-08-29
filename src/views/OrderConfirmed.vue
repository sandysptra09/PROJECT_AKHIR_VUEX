<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <h1 class="mb-10 text-center text-3xl font-bold">Thank You for Your Order</h1>
        <p class="text-500 text-center  text-sm ">Order code : {{ getOrder.code }}</p>
        <p class="text-500 text-center italic text-sm ">A copy of your order summary has been sent to {{ getUsers.email }}
        </p>
        <div class="mx-auto max-w-9xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-4/5">
                <h1 class="mb-2 mt-10 ml-5 text-left text-2xl font-bold">Order Summary</h1>
                <div class="grid md:grid-cols-2 mt-5 mb-5 gap-5">

                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                            <tbody>
                                <tr class="bg-white">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Order Code :
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ getOrder.code }}
                                    </td>

                                </tr>
                                <tr class="bg-white">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Name :
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ getUsers.name }}
                                    </td>

                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Email :
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ getUsers.email }}
                                    </td>

                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Shipping Address :
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ getOrder.shipping_address.address }}, {{ getOrder.shipping_address.postal_code
                                        }}, {{ getOrder.shipping_address.city }}, {{ getOrder.shipping_address.state }},
                                        {{ getOrder.shipping_address.country }}, {{ getOrder.shipping_address.phone }}
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                            <tbody>
                                <tr class="bg-white">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Total Order Amount :
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ formatRupiah(getOrder.grand_total) }}
                                    </td>

                                </tr>
                                <tr class="bg-white">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Payment Method :
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ getOrder.orders[0].payment_type }}
                                    </td>

                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Delivery type :
                                    </th>
                                    <td class="px-6 py-4 capitalize">
                                        {{ getOrder.orders[0].delivery_type }}
                                    </td>

                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Billing Address :
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ getOrder.shipping_address.address }}, {{ getOrder.shipping_address.postal_code
                                        }}, {{ getOrder.shipping_address.city }}, {{ getOrder.shipping_address.state }},
                                        {{ getOrder.shipping_address.country }}, {{ getOrder.shipping_address.phone }}
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="mx-auto max-w-4xl justify-center px-6 md:flex md:space-x-4 xl:px-0">
            <div class="rounded-lg md:w-3/5">
                <div v-for="(order) in getOrder.orders[0].products.data"
                            class="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                                src="https://img.freepik.com/premium-photo/fresh-bright-fruits-berries-white-background-ai-generated_447653-648.jpg?w=360"
                                alt="" />
                            <div class="flex w-full flex-col px-4 py-4">
                                <span class="font-semibold">{{ order.name }}</span>
                                <span class=" mt-1 mb-2 float-right text-gray-700"> {{ order.quantity }} pcs</span>
                                <p class="font-bold">{{ formatRupiah(order.total) }}</p>
                            </div>
                </div>
            </div>

            <div class="rounded-lg md:w-4/5">
                <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-5/5">
                    <div class="mb-4 flex justify-between">
                        <p class="text-gray-700 font-bold">Sub Total</p>
                        <p class="text-sm text-gray-700 font-bold">{{ formatRupiah(getOrder.grand_total) }}</p>
                    </div>

                    <div class="mb-4 flex justify-between">
                        <p class="text-gray-700 font-bold">Tax</p>
                        <p class="text-sm text-gray-700 font-bold">Rp. 0</p>
                    </div>

                    <div class="mb-4 flex justify-between">
                        <p class="text-gray-700 font-bold">Shipping Charge</p>
                        <p class="text-sm text-gray-700 font-bold">Rp. 0</p>
                    </div>
                    
                    <div class="mb-4 flex justify-between">
                        <p class="text-gray-700 font-bold">Coupon discount</p>
                        <p class="text-sm text-gray-700 font-bold">Rp. 0</p>
                    </div>
                    
                    <hr class="my-4" />
                    <div class="flex justify-between">
                        <p class="text-lg font-bold">Total</p>
                        <div class="">
                            <p class="mb-1 text-lg font-bold"></p>
                            <p class="text-gray-700 font-bold">{{ formatRupiah(getOrder.grand_total) }}</p>
                        </div>
                    </div>
                  
                </div>
            </div>

        </div>

       <center>
        <router-link to="/" class="inline-flex items-center justify-center mt-12 h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-yellow-300 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            BACK TO HOME
        </router-link>
       </center>

    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    // data() {
    //     return {
    //         standard: 15000,
    //         express: 30000

    //     }
    // },
    props: ['orderCode'],
    computed: {

        ...mapGetters('user', ['getUsers']),
        ...mapGetters('keranjang', ['getAddress']),
        ...mapGetters('keranjang', ['getKeranjang']),
        ...mapGetters('order', ['getOrder'])
    },
    methods: {

        ...mapActions('user', ['fetchUsers']),
        ...mapActions('keranjang', ['fetchAddress']),
        ...mapActions('keranjang', ['fetchKeranjang'],),
        ...mapActions('order', ['fetchOrderData']),



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
            this.fetchAddress(),
            this.$store.dispatch('order/fetchOrderData', this.orderCode);

    }
}

</script>