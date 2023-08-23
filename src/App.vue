<script>
import 'flowbite/dist/flowbite';

import { RouterLink, RouterView } from 'vue-router';

import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue';


export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  },
}
</script>

<template>
  
  <div>
    <NavbarComponent/>
    <router-view/>

    <FooterComponent/>
  </div>
  
</template>

<style scoped>

</style>
