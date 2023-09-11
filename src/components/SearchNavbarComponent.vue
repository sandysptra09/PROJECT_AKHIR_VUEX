<template>
    <div class="search-navbar relative" @click="closeSearch">
        <input type="text" v-model="searchKeyword" @input="searchProducts"
            class="bg-white border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2"
            placeholder="Search for products ..." />
        <button disabled type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                width="512px" height="512px">
                <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
        </button>
        <div v-if="showResults" class="search-results absolute bg-white border rounded border-gray-400 mt-1 w-full py-1 shadow-md">
            <p class="text-gray-700 sm:text-sm ml-5 mt-2 mb-2">
                PRODUCT
            </p>
            <hr class="mb-2">
            <ul class="list-unstyled p-0">
                <li v-for="product in searchResults" :key="product.id" class="py-1 px-5">
                    <router-link :to="{ name: 'DetailProduct', params: { slug: product.slug } }"
                        class="text-gray-900 text-sm">
                        <div class="flex items-center">
                            <img src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
                                :alt="product.name" class="w-10 h-10 object-cover mr-2" />
                            <div>
                                <div class="font-medium">{{ product.name }}</div>
                                <div class="text-red-500 font-bold">{{ formatRupiah(product.base_price) }}</div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            searchKeyword: "",
        };
    },
    computed: {
        searchResults() {
            return this.$store.getters["search/getSearchResults"];
        },
        showResults() {
            return this.searchResults.length > 0;
        },
    },
    methods: {
        searchProducts() {
            if (this.searchKeyword.trim() !== "") {
                this.$store.dispatch("search/fetchSearchResults", this.searchKeyword);
            } else {
                this.$store.commit("search/SET_SEARCH_RESULTS", []);
            }
        },
        closeSearch() {
            this.$store.commit("search/SET_SEARCH_RESULTS", []);
        },

        formatRupiah(number) {
            const formatter = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            });
            return formatter.format(number);
        },
    },
};
</script>
  
<style scoped>
.search-navbar {
    position: relative;
}

input {
    width: 300px;
    padding: 8px;
}

.search-results {
    max-height: 200px;
    overflow-y: auto;
    z-index: 1;
}
</style>
  