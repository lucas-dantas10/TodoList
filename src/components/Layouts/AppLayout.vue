<template>

    <ModalTask :model-value="showAddNewModal" @close="closeModal()" />

    <header class="flex flex-row items-center justify-between p-8">
        <div>
            <font-awesome-icon @click.prevent="$emit('searchShow')" class="text-2xl" :icon="['fas', 'filter']" />
        </div>
        <div>
            <h1 class="text-2xl">{{ title }}</h1>
        </div>
        <div class="border border-primary rounded-full w-10 h-10">
            <!-- <img src="https://randomuser.me/api/portraits/men/1.jpg" class="border border-primary rounded-full"
                alt="Imagem de perfil de um homem"> -->
            <img src="/todo.svg" class="border border-primary rounded-full"
                alt="Imagem de perfil de um homem">
        </div>
    </header>

    <main class="w-full h-[65vh]">
        <slot></slot>
    </main>

    <footer class="w-full flex flex-row items-center justify-between p-6 bg-[#363636] relative">
        <router-link :to="{name: 'Home'}" class="flex flex-col items-center justify-center w-[15%]">
            <font-awesome-icon class="text-2xl" :icon="['fas', 'house']" />
            <h3 class="text-lg-">Home</h3>
        </router-link>
        <router-link :to="{ name: 'Calendary' }" class="flex flex-col items-center justify-center w-[15%]">
            <font-awesome-icon class="text-2xl" :icon="['fas', 'calendar-days']" />
            <h3 class="text-lg-">Calendario</h3>
        </router-link>
        <div  @click.prevent="showNewModal()" 
            class="w-[15%] text-center absolute border border-indigo-600 bg-indigo-600 rounded-full top-[-37%] right-[43%] p-4">
            <font-awesome-icon class="text-2xl" :icon="['fas', 'plus']"/>
        </div>
        <router-link :to="{ name: 'Focus' }" class="flex flex-col items-center justify-center w-[15%]">
            <font-awesome-icon class="text-2xl" :icon="['fas', 'clock']" />
            <h3 class="text-lg-">Foco</h3>
        </router-link>
        <router-link :to="{ name: 'Profile' }" class="flex flex-col items-center justify-center w-[15%]">
            <font-awesome-icon class="text-2xl" :icon="['fas', 'user']" />
            <h3 class="text-lg-">Perfil</h3>
        </router-link>
    </footer>
</template>

<script>
import ModalTask from '../Modal/ModalTask.vue';

export default {
    components: {
        ModalTask,
    },

    data() {
        return {
            showAddNewModal: false,
        }
    },

    mounted() {
        this.$store.dispatch('getCurrentUser');
        this.$store.dispatch('getCategoriesUser');
        this.$store.dispatch('getTasks');
    },

    emits: ['searchShow'],

    props: {
        title: String,
        focus: Boolean
    },

    methods: {
        showNewModal() {
            this.showAddNewModal = true;
        },
        
        closeModal() {
            this.showAddNewModal = false;
        }
    }
}
</script>