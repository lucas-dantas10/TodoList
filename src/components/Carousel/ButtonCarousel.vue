<template>
    <div class="flex justify-between items-center p-8 mt-10">
        <button @click="swiper.slidePrev()" class="uppercase text-xl text-slate-500">Voltar</button>
        <button @click="swiper.slideNext()" class="uppercase text-xl border border-indigo-500 rounded-md py-2 px-4 bg-indigo-500">
            <router-link to="/welcome" v-if="currentNameButton.value == 'Começar'">
                {{ currentNameButton.value }}
            </router-link> 

            <p v-else>{{ currentNameButton.value }}</p>
        </button>
    </div>
</template>
<script>
import { useSwiper } from 'swiper/vue';

export default {
    setup() {
        const swiper = useSwiper();

        return {
            swiper,
        };
    },

    props: {
        currentNameButton: Object
    }
};
</script>