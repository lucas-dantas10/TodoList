<template>
    <Transition name="bounce">
        <div class="w-screen h-screen z-10 flex flex-col items-center justify-center fixed" v-if="show">

            <ModalCalendar :model-value="calendarShow" @close="closeCalendar()" @send-date="receiveDate" />
            <form class="w-[90%] bg-[#363636] flex flex-col justify-center shadow-md rounded px-8 pt-6 pb-8 mb-4" v-show="isFormVisible">
                <div class="mb-4">
                    <label class="block text-white text-xl font-bold mb-4" for="task">
                        Adicione uma Tarefa
                    </label>
                    <input
                        class="shadow appearance-none border border-white bg-[#363636] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="task" type="text" placeholder="Tarefa" v-model.trim="form.task">
                </div>
                <div class="mb-6">
                    <input
                        class="appearance-none border-0 border-[#363636] rounded w-full py-2 px-3 bg-[#363636] text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="description" type="text" placeholder="Descrição" v-model.trim="form.description">
                </div>

                <div class="mb-6">
                    <div class="flex flex-row gap-6 items-center">
                        <font-awesome-icon class="text-2xl" :icon="['far', 'clock-four']" @click.prevent="showCalendar()" />
                        <font-awesome-icon class="text-2xl" :icon="['fas', 'tag']" />
                    </div>

                </div>

                <div class="flex items-center justify-between">

                    <a class="inline-block align-baseline font-bold text-sm text-[#8687E7] hover:text-blue-800" href="#"
                        @click="$emit('close', false)">
                        Fechar
                    </a>

                    <button
                        class="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button" @click.prevent="submit()">
                        <ArrowRight />
                    </button>
                </div>
            </form>
        </div>
    </Transition>
</template>

<script>
import { computed } from 'vue';
import ArrowRight from './ArrowRight.vue';
import ModalCalendar from './ModalCalendar.vue';

export default
    {
        components: {
            ArrowRight,
            ModalCalendar
        },

        data() {
            return {
                form: {
                    task: '',
                    description: '',
                    date: new Date()
                },
                calendarShow: false,
                isFormVisible: true,
            }
        },

        props: ['modelValue'],

        emits: ['close', 'update:modelValue'],

        setup(props, { emit }) {
            const show = computed({
                get: () => props.modelValue,
                set: (value) => emit('update:modelValue', value)
            });

            return {
                show
            }
        },

        methods: {
            showCalendar() {
                this.isFormVisible = false;
                this.calendarShow = true;
            },

            closeCalendar() {
                this.isFormVisible = true;
                this.calendarShow = false;
            },

            receiveDate(date) {
                console.log(date);
                this.form.date = date;  
            },

            submit() {
                console.log(this.form);
            }
        }
    }
</script>

<style scoped>
.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}</style>