<template>
    <div>
        <header class="p-8">
            <ul>
                <li>
                    <a href="#" class="text-2xl uppercase text-slate-500">Pular</a>
                </li>
            </ul>
        </header>

        <Carousel></Carousel>
    </div>
</template>

<script>
    import Carousel from '../../components/Carousel/Carousel.vue';

    export default {
        components: {
            Carousel
        },
    }
</script>