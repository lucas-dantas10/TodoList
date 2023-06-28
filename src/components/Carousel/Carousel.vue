<template>
    <swiper :slides-per-view="1" :space-between="50" @slide-change="onSlideChange" @swiper="onSwiper" ref="swiper">
        <swiper-slide v-for="(page, i) in pages" :key="i">
            <div class="flex flex-col items-center justify-center gap-10">
                <img class="w-full h-96" :src="`src/assets/${page.img}`" alt="">

                <h2 class="text-4xl">{{ page.title }}</h2>

                <p class="text-2xl px-4 text-center">{{ page.text }}</p>
            </div>

        </swiper-slide>
    </swiper>

    <div class="flex justify-between items-center p-4 mt-10">
        <button class="uppercase text-xl text-slate-500">Voltar</button>
        <button class="uppercase text-xl border border-indigo-500 rounded-md py-2 px-4 bg-indigo-500">
            {{ currentButton }}
        </button>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide
    },

    setup() {

        let currentNameButton = 'Próximo';

        const onSwiper = (swiper) => {
            console.log('oi');
        }

        const onSlideChange = (swiper) => {
            swiper.activeIndex == 2 ? currentNameButton = 'Começar' : currentNameButton = 'Próximo';
            console.log(currentNameButton);
        }        

        return {
            onSwiper,
            onSlideChange,
            currentNameButton
        }
    },

    data() {
        return {
            pages: [
                {
                    img: 'manager.svg',
                    title: 'Gerencie suas tarefas',
                    text: 'Você pode facilmente gerenciar suas tarefas diárias'
                },
                {
                    img: 'routine.svg',
                    title: 'Crie sua rotina diária',
                    text: 'no ToDo List você pode criar sua rotina personalizada e se manter produtivo'
                },
                {
                    img: 'organize.svg',
                    title: 'Organize suas tarefas',
                    text: 'Você pode organizar suas tarefas diárias adicionando em categorias diferentes'
                },
            ]
        }
    }
}
</script>