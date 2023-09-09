<template>
  <div>
    <input v-model="searchKeyword" @input="searchProducts" />
    <ul>
      <li v-for="product in searchResults" :key="product.id">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      searchKeyword: '',
    };
  },
  computed: {
    ...mapState('search', ['searchResults']),
  },
  methods: {
    ...mapActions('search', ['fetchSearchResults']),
    searchProducts() {
      this.fetchSearchResults(this.searchKeyword);
    },
  },
};
</script>