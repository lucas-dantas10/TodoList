<template>
    <section class="w-full h-full ">
        <form class="h-screen p-10 flex flex-col justify-between">
            <div class="w-full h-3/6 flex flex-col justify-center gap-6">
                <div>
                    <h1 class="text-2xl">Criar Nova Categoria</h1>
                </div>

                <div class="flex flex-col justify-center gap-4">
                    <label for="name">Nome da Categoria:</label>
                    <input type="text" id="name"
                        class="shadow appearance-none border border-white bg-[#1D1D1D] rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Nome da categoria">
                </div>

                <div class="flex flex-col justify-center gap-4">
                    <label for="icon">Icone da Categoria:</label>
                    <input type="text" id="icon"
                        class="shadow appearance-none border border-white bg-[#1D1D1D] rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline">
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
                    <button>
                        Criar Categoria
                    </button>
                </div>
            </div>
        </form>

    </section>
</template>

<script>
export default {
    data() {
        return {
            category: {
                name: '',
                icon: '',
                color: ''
            },

            colors: ['yellow', 'green', 'red', 'blue', 'gray', 'orange', 'purple'],
            selectedColor: null
        }
    },

    methods: {
        selectColor(color) {
            this.selectedColor = color;
        }
    }
}
</script>