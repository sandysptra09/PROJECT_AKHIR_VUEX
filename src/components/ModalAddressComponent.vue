<template>
    <!-- Modal toggle -->
    <button data-modal-target="staticModal" data-modal-toggle="staticModal"
        class="block text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button">
        Add Address
    </button>

    <!-- Main modal -->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->

            <div class="relative bg-white">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Add New Address
                    </h3>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <div>
                        <form @submit.prevent="addNewAddress">
                            <div>
                                <label for="address"
                                    class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Address</label>
                                <input type="text" id="address" v-model="address"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Your Address" />
                            </div>
                            <div>
                                <label for="city"
                                    class="text-sm font-medium mt-3 text-gray-900 block mb-2 dark:text-gray-300">City</label>
                                <input type="text" id="city" v-model="city"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="City" />
                            </div>
                            <div>
                                <label for="country"
                                    class="text-sm font-medium mt-3 text-gray-900 block mb-2 dark:text-gray-300">Country</label>
                                <input type="text" id="country" v-model="country"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Country" />
                            </div>
                            <div>
                                <label for="postal_code"
                                    class="text-sm font-medium mt-3 text-gray-900 block mb-2 dark:text-gray-300">Postal
                                    Code</label>
                                <input type="text" id="postal_code" v-model="postal_code"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Postal Code" />
                            </div>
                            <div>
                                <label for="state"
                                    class="text-sm font-medium mt-3 text-gray-900 block mb-2 dark:text-gray-300">State</label>
                                <input type="text" id="state" v-model="state"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="State" />
                            </div>
                            <div>
                                <label for="phone"
                                    class="text-sm font-medium mt-3 text-gray-900 block mb-2 dark:text-gray-300">Phone</label>
                                <input type="text" id="phone" v-model="phone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Your phone number" />
                            </div>
                            <div>
                                <button type="submit">Add Address</button>
                            </div>
                        </form>
                    </div>

                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <!-- <button data-modal-hide="staticModal" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
                        accept</button> -->
                    <!-- <button data-modal-hide="staticModal" type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            address: "",
            city: "",
            country: "",
            postal_code: "",
            state: "",
            phone: "",
        };
    },
    methods: {
        async addNewAddress() {
            try {
                await this.$store.dispatch("address/addAddress", {
                    address: this.address,
                    city: this.city,
                    country: this.country,
                    postal_code: this.postal_code,
                    state: this.state,
                    phone: this.phone,
                });
                this.address = "";
                this.city = "";
                this.country = "";
                this.postal_code = "";
                this.state = "";
                this.phone = "";
            } catch (error) {
                console.error("Error adding address:", error);
            }
        },
    },
};
</script>