<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted } from 'vue';

import HelloWorld from './components/HelloWorld.vue';

import { useProducts } from './stores/products';

const products = useProducts();

onMounted(() => {
    console.log('onMounted');
    products.fetchProducts();

    console.log('isDev', import.meta.env.DEV);
});
</script>

<template>
    <img
        alt="Vue logo"
        src="./assets/logo.png"
    >
    <HelloWorld
        msg="Hello Vue 3 + TypeScript + Vite"
        :list-number="[1, 2, 3]"
    />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
