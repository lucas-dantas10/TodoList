<template>
    <Notification />
    <section class="w-full h-full ">
        <form class="h-screen p-10 flex flex-col justify-between" @submit.prevent="registerCategory()">
            <div class="w-full h-3/6 flex flex-col justify-center gap-6">
                <div>
                    <h1 class="text-2xl">Criar Nova Categoria</h1>
                </div>

                <div class="flex flex-col justify-center gap-4">
                    <label for="name">Nome da Categoria:</label>
                    <input type="text" id="name" v-model.trim="category.name"
                        class="shadow appearance-none border border-white bg-[#1D1D1D] rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Nome da categoria" required>
                </div>

                <div class="flex flex-col justify-center gap-4">
                    <label for="icon">Icone da Categoria:</label>
                    <div class="flex items-center gap-4">
                        <div v-for="(icon, index) in icons" :key="index" @click.prevent="selectIcon(icon)">
                            <div class="w-8 h-8 border py-6 px-6 rounded-md flex justify-center items-center bg-[#1D1D1D] relative">
                                <font-awesome-icon class="text-2xl" :icon="['fas', icon]" />
                                <span v-if="selectedIcon === icon" class="text-black text-2xl font-bold absolute">✓</span>                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-center gap-4">
                    <label for="color">Cor da Categoria:</label>
                    <div class="flex items-center gap-4">
                        <div v-for="(color, index) in colors" :key="index" @click.prevent="selectColor(color)">
                            <div :style="{ backgroundColor: color }" class="w-8 h-8 rounded-full flex justify-center items-center">
                                <span v-if="selectedColor === color" class="text-black font-semibold">✓</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full h-full flex justify-between items-center">
                <router-link :to="{ name: 'Home' }">
                    <button class="text-[#8687E7]">Cancelar</button>
                </router-link>

                <div class=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-[#8687E7]">
                    <button class="flex items-center gap-2">
                        <Spinner :loading="isLoading" :full-page="false" />
                        Criar Categoria
                    </button>
                </div>
            </div>
        </form>

    </section>
</template>

<script>
import Notification from '../../components/Notification/Notification.vue';
import Spinner from '../../components/Spinner/Spinner.vue';

export default {
    components: {
        Notification,
        Spinner
    },

    data() {
        return {
            category: {
                name: '',
                icon: '',
                color: ''
            },

            colors: ['#C9CC41', '#66CC41', '#9741CC', '#809CFF', '#41CCA7', '#80FFFF', '#FF9680'],
            icons: ['briefcase', 'dumbbell', 'graduation-cap', 'music', 'heart-pulse'],
            selectedColor: null,
            selectedIcon: null,
        }
    },

    methods: {
        selectColor(color) {
            this.selectedColor = color;
        },

        selectIcon(icon) {
            this.selectedIcon = icon;
        },

        registerCategory() {
            this.category.color = this.selectedColor;
            this.category.icon = this.selectedIcon;
            this.$store.dispatch('registerCategory', this.category);
        },
    },

    computed: {
        isLoading() {
            return this.$store.state.categories.loading;
        }
    }
}
</script>