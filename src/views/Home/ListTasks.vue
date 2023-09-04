<template>
    <div class="flex flex-col gap-6" v-if="selectIs == 'tasksNotCompleted'">
        <div class="w-[35%]">
            <div class="w-full flex flex-row px-4 py-2 gap-2 border border-[#363636] bg-[#363636] rounded-lg">
                <select
                    class="w-full bg-[#363636] flex flex-row items-center gap-2"
                    v-model.trim="daysOptions"
                    @change.prevent="verifyDate()"
                >
                    <option value="" selected>
                        Todas
                        <font-awesome-icon :icon="['fas', 'chevron-down']" />
                    </option>

                    <option :value="justDate(new Date())" selected>Hoje</option>

                    <option :value="subDate">Ontem</option>
                </select>
            </div>
        </div>

        <Tasks :select-is="selectIs" />
    </div>

    <div class="flex flex-col gap-6" v-else>
        <div class="w-[40%]">
            <div class="w-full flex flex-row px-4 py-2 gap-2 border border-[#363636] bg-[#363636] rounded-lg">
                <select class="w-full bg-[#363636] flex flex-row items-center gap-2">
                    <option value="" selected disabled>
                        Completada
                        <font-awesome-icon :icon="['fas', 'chevron-down']" />
                    </option>
                </select>
            </div>
        </div>

        <Tasks :select-is="selectIs" />
    </div>
</template>

<script setup>
import Tasks from "./Tasks.vue";
import { computed } from "vue";
import justDate from "../../filters/justDate.js";
import date from "../../filters/date.js";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const daysOptions = ref("");
const subDate = ref(justDate(new Date().setDate(new Date().getDate() - 1)));

const props = defineProps({
    selectIs: String,
});

function changeStatus(task) {
    task.status == true ? (task.status = false) : (task.status = true);
    store.dispatch("changeStatusTask", task);
}

function redirectTaskScreen(id) {
    router.push(`/task/${id}`);
}

function verifyDate() {
    if (this.daysOptions === "") {
        store.dispatch("getTasks");
        return;
    }
    store.dispatch("filterDateOfTasks", this.daysOptions);
}

const tasks = computed(() => {
    const taskNotComplete = store.state.tasks.data.filter((task) => task.status == false);
    return taskNotComplete;
});

const tasksCompleted = computed(() => {
    const taskComplete = store.state.tasks.data.filter((task) => task.status == true);
    return taskComplete;
});

const isLoading = computed(() => store.state.tasks.loading);
</script>

