<template>
    <swiper :slides-per-view="1" :space-between="50" @slide-change="onSlideChange">
        <template v-slot:container-start>
            <HeaderCarousel :last-index="pages.length - 1"></HeaderCarousel>
        </template>        

        <swiper-slide v-for="(page, i) in pages" :key="i">
            <div class="flex flex-col items-center justify-center gap-10">
                <img class="w-full h-60" :src="page.img" alt="">

                <h2 class="text-4xl">{{ page.title }}</h2>

                <p class="text-2xl px-4 text-center">{{ page.text }}</p>
            </div>
        </swiper-slide>

        <ButtonCarousel :current-name-button="currentNameButton"></ButtonCarousel>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import { reactive } from 'vue';
import 'swiper/css';
import ButtonCarousel from './ButtonCarousel.vue';
import HeaderCarousel from './HeaderCarousel.vue';
import Manager from '../../assets/manager.svg';
import Routine from '../../assets/routine.svg';
import Organize from '../../assets/organize.svg';

export default {
    components: {
        Swiper,
        SwiperSlide,
        ButtonCarousel,
        HeaderCarousel
    },

    setup() {
        let currentNameButton = reactive({ value: 'Próximo' });

        const onSlideChange = (swiper) => {
            swiper.activeIndex == 2 ? currentNameButton.value = 'Começar' : currentNameButton.value = 'Próximo';
        }

        return {
            onSlideChange,
            currentNameButton,
        }
    },

    data() {
        return {
            pages: [
                {
                    img: Manager,
                    title: 'Gerencie suas tarefas',
                    text: 'Você pode facilmente gerenciar suas tarefas diárias'
                },
                {
                    img: Routine,
                    title: 'Crie sua rotina diária',
                    text: 'No ToDo List você pode criar sua rotina personalizada e se manter produtivo'
                },
                {
                    img: Organize,
                    title: 'Organize suas tarefas',
                    text: 'Você pode organizar suas tarefas diárias adicionando em categorias diferentes'
                },
            ],
        }
    },
}

</script>