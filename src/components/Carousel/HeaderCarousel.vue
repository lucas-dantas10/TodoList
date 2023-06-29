<template>
    <header class="p-6">
        <ul>
            <li>
                <a @click="swiper.slideTo(lastIndex)" href="#" class="text-2xl uppercase text-slate-500">Pular</a>
            </li>
        </ul>
    </header>
</template>

<script>
import { useSwiper } from 'swiper/vue';

export default {
    setup() {
        const swiper = useSwiper();

        return {
            swiper
        }
    },

    props: {
        lastIndex: {
            type: Number,
            require: true
        }
    }
}
</script>