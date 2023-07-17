<template>
    <div>
        <Carousel></Carousel>
    </div>
</template>

<script>
    import Carousel from '../../components/Carousel/Carousel.vue';

    export default {
        components: {
            Carousel
        },

        mounted() {
            this.$store.commit('setVisited');
        }
    }
</script>