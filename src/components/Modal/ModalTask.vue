<template>
    <div class="w-screen h-screen z-10 flex flex-col items-center justify-center fixed" v-if="modalShow">
        <form class="w-[90%] bg-[#363636] shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-white text-xl font-bold mb-4" for="task">
                    Adicione uma Tarefa
                </label>
                <input
                    class="shadow appearance-none border border-white bg-[#363636] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="task" type="text" placeholder="Tarefa">
            </div>
            <div class="mb-6">
                <input
                    class="appearance-none border-0 border-[#363636] rounded w-full py-2 px-3 bg-[#363636] text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="description" type="text" placeholder="Descrição">
            </div>

            <div class="mb-6">
                <div class="flex flex-row gap-6 items-center">
                    <font-awesome-icon class="text-2xl" :icon="['far', 'clock-four']" />
                    <font-awesome-icon class="text-2xl" :icon="['fas', 'tag']" />
                </div>
                
            </div>

            <div class="flex items-center justify-between">

                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#" @click.prevent="closeModal()">
                    Fechar
                </a>

                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                    Criar
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default 
{
    data() {
        return {
            modalShow: this.show
        }        
    },

    setup(props, context) {
        const { show } = toRefs(props);

        console.log(show.value);
        return {
            show
        }
    },

    props: ['show'],

    methods: {
        closeModal() {
            this.modalShow = false;
            console.log(this.modalShow);
            console.log("show: " + this.show);
        }
    }
}
</script>