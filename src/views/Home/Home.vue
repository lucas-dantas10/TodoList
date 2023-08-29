<template>
    <Notification />
    <Spinner :loading="isLoading" :full-page="true" />
    <div class="w-full h-full">
        <AppLayout @search-show="changeShow()" title="Home" :focus="true">
            <div class="w-full h-full flex items-center justify-center" v-if="!$store.state.tasks.length">
                <div class="flex flex-col items-center justify-cente">
                    <div>
                        <img src="../../assets/checklist.svg" alt="" />
                    </div>
                    <div class="flex flex-col text-center items-center">
                        <p class="text-2xl text-gray-300">O que você quer fazer hoje?</p>
                        <p class="text-gray-300">Clique no + para adicionar tarefas</p>
                    </div>
                </div>
            </div>

            <div class="w-full h-[90%] flex justify-center" v-else>
                <div class="flex flex-col gap-4 w-[85%] overflow-auto">
                    <form
                        class="w-full flex flex-row items-center gap-8 relative animate-fade-in-down"
                        v-if="searchShow"
                        @submit.prevent="searchTask()"
                    >
                        <font-awesome-icon class="absolute text-2xl px-3" :icon="['fas', 'magnifying-glass']" />

                        <input
                            type="text"
                            v-model.trim="taskSearch"
                            class="w-full bg-primary border border-gray-400 px-11 py-2 rounded-md placeholder:text-gray-400 placeholder:text-lg focus:outline-indigo-600"
                            placeholder="Procure pela sua tarefa..."
                        />
                    </form>

                    <div class="w-[100%] h-[100%] flex flex-col gap-[2rem]">
                        <div class="flex flex-col gap-[2rem]">
                            <ListTasks 
                                select-is="notCompleted"
                            />

                            <ListTasks 
                                select-is="completed"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    </div>
</template>

<script>
import AppLayout from "../../components/Layouts/AppLayout.vue";
import ModalCalendar from "../../components/Modal/ModalCalendar.vue";
import Notification from "../../components/Notification/Notification.vue";
import Spinner from "../../components/Spinner/Spinner.vue";
import ListTasks from "./ListTasks.vue";

export default {
    components: { AppLayout, ModalCalendar, Notification, Spinner, ListTasks },

    data() {
        return {
            searchShow: false,
            taskSearch: "",
        };
    },

    methods: {
        changeShow() {
            this.searchShow = !this.searchShow;
        },

        searchTask() {
            this.$store.dispatch("searchTask", { taskSearch: this.taskSearch });
        },
    },

    computed: {
        isLoading() {
            return this.$store.state.tasks.loading;
        },
    },
};
</script>
