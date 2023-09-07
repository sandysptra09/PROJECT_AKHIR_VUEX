<template>
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16" id="scroll_product">
    <h1 class="text-xl font-bold text-gray-900 dark:text-white">All Product</h1>
    <br>
    <div class="grid md:grid-cols-4 gap-8">

      <div v-for="category in getCategoriesBySlug" :key="category.id"
        class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

        <a href="">
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/collection-of-fruit-on-white-background-nicholas-eveleigh.jpg"
            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
        </a>
        <div class="px-4 py-3 w-72">
          <router-link :to="{ name: 'DetailProduct', params: { slug: category.slug } }" class="group">
            <a href="">
              <p class="text-lg font-bold text-black truncate block capitalize">{{ category.name }}</p>
            </a>

            <del>
              <p class="text-sm text-gray-600 cursor-auto mt-4">{{ formatRupiah(category.base_price) }}</p>
            </del>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">{{
                formatRupiah(category.base_discounted_price) }}
              </p>
              <div class="ml-28">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </button>
              </div>
            </div>
          </router-link>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      category: '',
    }
  },
  computed: {
    ...mapGetters("category", ["getCategoriesBySlug"]),
    product() {
      return this.getCategoriesBySlug(this.$route.params.slug);
    },
  },
  methods: {
    ...mapActions("category", ["fetchCategory", "fetchCategoryBySlug"]),

    // Format Rupiah
    formatRupiah(number) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      });
      return formatter.format(number);
    },
  },
  beforeMount() {
    this.fetchCategory()
  },
  mounted() {
    const categorySlug = this.$route.params.slug;
    this.fetchCategoryBySlug(categorySlug);
  }
}

</script>