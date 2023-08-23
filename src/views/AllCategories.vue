<template>
     <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-8 ml-3">All Categories</h1>
        <div class="grid md:grid-cols-4 gap-8">
            
            <div v-for="categories in getCategories" class="flex flex-wrap -m-2">

                <div class="p-4 w-full">
                    <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                            src="https://dummyimage.com/420x260">
                    </a>
                    <div class="mt-4">
                        <h3 class="text-black-500 text-xs tracking-widest title-font mb-1">{{ categories.name }}</h3>

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
        ...mapGetters('category', ['getCategories'])
    },
    methods:{
        ...mapActions('category', ['fetchCategory'])
    },
    created() {
        this.fetchCategory()
    }
}


</script>