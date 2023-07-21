<template>
    <Transition name="bounce">
        <div class="w-screen h-screen z-10 flex flex-col items-center justify-center fixed background-modal" v-if="show">

            <ModalCalendar :model-value="calendarShow" @close="closeCalendar()" @send-date="receiveDate" />
            <ModalCategory :show-category="categoryShow" @close="closeCategory()" @send-category="receiveCategory" />
            <form class="w-[90%] bg-[#363636] flex flex-col justify-center shadow-md rounded px-8 pt-6 pb-8 mb-4" v-show="isFormVisible">
                <div class="mb-4">
                    <label class="block text-white text-xl font-bold mb-4" for="task">
                        Adicione uma Tarefa
                    </label>
                    <input
                        class="shadow appearance-none border border-white bg-[#363636] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="task" type="text" placeholder="Tarefa" v-model.trim="form.title">
                </div>
                <div class="mb-6">
                    <input
                        class="appearance-none border-0 border-[#363636] rounded w-full py-2 px-3 bg-[#363636] text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="description" type="text" placeholder="Descrição" v-model.trim="form.description">
                </div>

                <div class="mb-6">
                    <div class="flex flex-row gap-6 items-center">
                        <font-awesome-icon class="text-2xl" :icon="['far', 'clock-four']" @click.prevent="showCalendar()" />
                        <font-awesome-icon class="text-2xl" :icon="['fas', 'tag']" @click.prevent="showCategories()" />
                    </div>

                </div>

                <div class="mb-6 flex flex-col gap-2">
                    <div v-if="form.date != ''">
                        <p class="border-pink-300 rounded-md bg-pink-300 px-2 py-2">{{ form.date }}</p>
                    </div>
                    <div :class="`rounded-md px-2 py-2`" :style="{backgroundColor: form.category.color, borderColor: form.category.color}">
                        <p>{{ form.category.name }}</p>
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
import ModalCategory from './ModalCategory.vue';

export default
    {
        components: {
            ArrowRight,
            ModalCalendar,
            ModalCategory
        },

        data() {
            return {
                form: {
                    title: '',
                    description: '',
                    date: '',
                    category: ''
                },
                calendarShow: false,
                categoryShow: false,
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

            showCategories() {
                this.isFormVisible = false;
                this.categoryShow = true;
            },

            closeCategory() {
                this.isFormVisible = true;
                this.categoryShow = false;
            },

            receiveDate(date) {
                this.form.date = date;  
            },

            receiveCategory(category) {
                this.form.category = category;
            },

            submit() {
                this.$store.dispatch('registerTask', this.form)
                    .then(({data}) => {
                        this.$emit('close', false);
                    })
                    .catch(({response}) => {
                        // console.log(response);
                    });
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