<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-8 ml-3">All Brands</h1>
        <div class="grid md:grid-cols-4 gap-8">
            
            <div v-for="brands in getBrands" class="flex flex-wrap -m-2">

                <div class="p-4 w-full">
                    <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Fruit_logo.svg/640px-Fruit_logo.svg.png">
                    </a>
                    <div class="mt-4">
                        <h3 class="text-black-500 text-lg tracking-widest title-font mb-1">{{ brands.name }}</h3>

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
        ...mapGetters('brands', ['getBrands'])
    },
    methods: {
        ...mapActions('brands', ['fetchBrands'])
    },
    created() {
        this.fetchBrands()
    }
}


</script>