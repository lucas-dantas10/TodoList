<template>
    <Notification />
    <Spinner :loading="isLoading" :full-page="true" />
    <div class="w-full h-full">
        <AppLayout @search-show="changeShow()">
            <div class="w-full h-full flex items-center justify-center" v-if="!tasks.length">
                <div class="flex flex-col items-center justify-center">
                    <div>
                        <img src="../../assets/checklist.svg" alt="">
                    </div>
                    <div class="flex flex-col text-center items-center">
                        <p class="text-2xl text-gray-300">O que você quer fazer hoje?</p>
                        <p class="text-gray-300">Clique no + para adicionar tarefas</p>
                    </div>
                </div>
            </div>

            <div class="w-full h-[90%] flex justify-center overflow-auto" v-else>
                <div class="flex flex-col gap-4 w-[85%]">
                    <div class="w-full flex flex-row items-center gap-8 relative animate-fade-in-down" v-if="searchShow">
                        <font-awesome-icon class="absolute text-2xl px-3" :icon="['fas', 'magnifying-glass']" />
                        <input type="text"
                            class="w-full bg-primary border border-gray-400 px-11 py-2 rounded-md placeholder:text-gray-400 placeholder:text-lg focus:outline-indigo-600"
                            placeholder="Procure pela sua tarefa...">
                    </div>

                    <div class="w-[100%] h-[100%] flex flex-col gap-[1rem]">
                        <div class="w-[30%]">
                            <div
                                class="w-full flex flex-row px-4 py-2 gap-2 border border-[#363636] bg-[#363636] rounded-lg">
                                <select class="w-full bg-[#363636] flex flex-row items-center gap-2"
                                    v-model.trim="daysOptions" @change.prevent="verifyDate()">
                                    <option value="" selected>
                                        Todas
                                        <font-awesome-icon :icon="['fas', 'chevron-down']" />
                                    </option>
                                    <option :value="$filters.justDate(new Date())" selected>
                                        Hoje
                                    </option>
                                    <option :value="subDate">
                                        Ontem
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="w-full h-[20%] flex flex-row items-center py-2 px-4 bg-[#363636] rounded-md"
                            v-for="t in tasks.data">
                            <div class="w-[15%] h-full flex justify-center items-center">
                                <input type="checkbox" class="w-6 h-6">
                            </div>
                            <div class="w-full flex flex-col gap-2 items-center">
                                <div class="w-full">
                                    <p class="text-xl">{{ t.title }}</p>
                                </div>
                                <div class="w-full flex flex-row justify-between items-center">
                                    <div class="text-gray-400">{{ $filters.date(t.date) }}</div>
                                    <div class="flex flex-row gap-6">
                                        <div :class="`flex flex-row items-center justify-center gap-2 rounded-md px-2 py-2`"
                                            :style="{ backgroundColor: t.color_category, borderColor: t.color_category }">
                                            <font-awesome-icon :icon="['fas', 'graduation-cap']" />
                                            <p>{{ t.name_category }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </AppLayout>


    </div>
</template>

<script>
import AppLayout from '../../components/Layouts/AppLayout.vue';
import ModalCalendar from '../../components/Modal/ModalCalendar.vue';
import Notification from '../../components/Notification/Notification.vue';
import Spinner from '../../components/Spinner/Spinner.vue';

export default {
    components: {
        AppLayout,
        ModalCalendar,
        Notification,
        Spinner
    },

    data() {
        return {
            searchShow: false,
            daysOptions: '',
            subDate: this.$filters.justDate(new Date().setDate(new Date().getDate() - 1))
        }
    },

    methods: {
        changeShow() {
            this.searchShow = !this.searchShow;
        },

        verifyDate() {
            if (this.daysOptions === '') {
                this.$store.dispatch('getTasks');
                return;
            }
            this.$store.dispatch('filterDateOfTasks', this.daysOptions);
        }
    },

    computed: {
        tasks() {
            return this.$store.state.tasks;
        },

        isLoading() {
            return this.$store.state.tasks.loading;
        },
    }
}
</script>