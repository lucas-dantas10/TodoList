<template>

    <ModalTask :show="modalShow" />

    <header class="flex flex-row items-center justify-between p-8">
        <div>
            <font-awesome-icon @click.prevent="$emit('searchShow')" class="text-2xl" :icon="['fas', 'filter']" />
        </div>
        <div>
            <h1 class="text-2xl">Home</h1>
        </div>
        <div class="border border-primary rounded-full w-10 h-10">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" class="border border-primary rounded-full"
                alt="Imagem de perfil de um homem">
        </div>
    </header>

    <main class="w-full h-[65vh]">
        <slot></slot>
    </main>

    <footer class="w-full flex flex-row items-center justify-between p-6 bg-[#363636] relative">
        <div class="flex flex-col items-center justify-center w-[15%]">
            <font-awesome-icon class="text-2xl" :icon="['fas', 'house']" />
            <h3 class="text-lg-">Home</h3>
        </div>
        <div class="flex flex-col items-center justify-center w-[15%]">
            <font-awesome-icon class="text-2xl" :icon="['fas', 'calendar-days']" />
            <h3 class="text-lg-">Calendario</h3>
        </div>
        <div  @click.prevent="showModal()" 
            class="w-[15%] text-center absolute border border-indigo-600 bg-indigo-600 rounded-full top-[-37%] right-[43%] p-4">
            <font-awesome-icon class="text-2xl" :icon="['fas', 'plus']"/>
        </div>
        <div class="flex flex-col items-center justify-center w-[15%]">
            <font-awesome-icon class="text-2xl" :icon="['fas', 'clock']" />
            <h3 class="text-lg-">Foco</h3>
        </div>
        <div class="flex flex-col items-center justify-center w-[15%]">
            <font-awesome-icon class="text-2xl" :icon="['fas', 'user']" />
            <h3 class="text-lg-">Perfil</h3>
        </div>
    </footer>
</template>

<script>
import ModalTask from '../Modal/ModalTask.vue';

export default {
    components: {
        ModalTask
    },

    data() {
        return {
            modalShow: false
        }
    },

    mounted() {
        this.$store.dispatch('getCurrentUser');
    },

    emits: ['searchShow'],

    methods: {
        showModal() {
            this.modalShow = !this.modalShow;
        }
    }
}
</script>