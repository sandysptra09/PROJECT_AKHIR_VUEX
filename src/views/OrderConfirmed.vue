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
        <div class="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 class="mb-4 text-3xl font-bold leadi">Order Summary</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full text-xs">
                    <!-- <colgroup>
                        <col>
                        <col>
                        <col>
                        <col>
                        <col>
                        <col class="w-24">
                    </colgroup> -->
                    
                    <tbody>
                        <tr>
                            <td class="p-3">
                                <p class="text-sm font-bold">Order Code :</p>
                            </td>
                            <td class="p-3">
                                <p class="text-sm">{{ getOrder.code }}</p>
                            </td>
                            <td class="p-3">
                                <p class="dark:text-gray-400 text-sm font-bold">Total Order Amount</p>
                            </td>
                            <td class="p-3">
                                <p class="text-sm">{{ formatRupiah(getOrder.grand_total) }}</p>
                            </td>
                            
                        </tr>
                        <tr>
                            <td class="p-3">
                                <p class="text-sm font-bold">Name :</p>
                            </td>
                            <td class="p-3">
                                <p class="text-sm">{{ getUsers.name }}</p>
                            </td>
                            <td class="p-3">
                                <p class="dark:text-gray-400 text-sm font-bold">Payment Method :</p>
                            </td>
                            <td class="p-3">
                                <p class="text-sm">{{ getOrder.orders[0].payment_type }}</p>
                            </td>
                        </tr>
                        <tr >
                            <td class="p-3">
                                <p class="text-sm font-bold">Email :</p>
                            </td>
                            <td class="p-3">
                                <p class="text-sm">{{ getUsers.email }}</p>
                            </td>
                            <td class="p-3">
                                <p class="dark:text-gray-400 text-sm font-bold">Delivery type :</p>
                            </td>
                            <td class="p-3">
                                <p class="text-sm">{{ getOrder.orders[0].delivery_type }}</p>
                            </td>
                            
                        </tr>
                        <tr >
                            <td class="p-3">
                                <p class="text-sm font-bold">Shipping Address :</p>
                            </td>
                            <td class="p-3">
                                <p class="text-sm">{{ getOrder.shipping_address.address }}, {{ getOrder.shipping_address.postal_code }}, {{ getOrder.shipping_address.city }}, {{ getOrder.shipping_address.state }}, 
                                    {{ getOrder.shipping_address.country }}, {{ getOrder.shipping_address.phone }}</p>
                            </td>
                            <td class="p-3">
                                <p class="dark:text-gray-400 text-sm font-bold">Billing Address :</p>
                            </td>
                            <td class="p-3">
                                <p class="text-sm">{{ getOrder.shipping_address.address }}, {{ getOrder.shipping_address.postal_code }}, {{ getOrder.shipping_address.city }}, {{ getOrder.shipping_address.state }}, 
                                    {{ getOrder.shipping_address.country }}, {{ getOrder.shipping_address.phone }}</p>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
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