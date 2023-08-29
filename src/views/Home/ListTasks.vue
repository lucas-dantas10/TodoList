<template>
    <div class="w-[35%]" v-if="selectIs == 'notCompleted'">
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

    <div class="w-[40%]" v-else>
        <div class="w-full flex flex-row px-4 py-2 gap-2 border border-[#363636] bg-[#363636] rounded-lg">
            <select class="w-full bg-[#363636] flex flex-row items-center gap-2">
                <option value="" selected disabled>
                    Completada
                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                </option>
            </select>
        </div>
    </div>

    <TransitionGroup name="list">
        <div
            class="w-full min-h-[20%] max-h-[60%] flex flex-row items-center py-2 px-4 bg-[#363636] rounded-md"
            v-for="(t, index) in selectIs == 'notCompleted' ? tasks : tasksCompleted"
            :key="index"
        >
            <div class="w-[15%] h-full flex justify-center items-center">
                <input type="checkbox" class="w-6 h-6" v-model="t.status" @click.prevent="changeStatus(t)" />
            </div>

            <div class="w-full flex flex-col gap-2 items-center" @click.prevent="redirectTaskScreen(t.id)">
                <div class="w-full">
                    <p class="text-xl">{{ t.title }}</p>
                </div>

                <div class="w-full flex flex-row justify-between items-center">
                    <div class="text-gray-400">
                        {{ date(t.date) }}
                    </div>
                    <div class="flex flex-row gap-6">
                        <div
                            :class="`flex flex-row items-center justify-center gap-2 rounded-md px-2 py-2`"
                            :style="{
                                backgroundColor: t.color_category,
                                borderColor: t.color_category,
                            }"
                        >
                            <font-awesome-icon :icon="['fas', t.icon_category]" />
                            <p>{{ t.name_category }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </TransitionGroup>
</template>

<script setup>
import { computed } from 'vue';
import justDate from '../../filters/justDate.js';
import date from '../../filters/date.js';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const daysOptions = ref("");
const subDate = ref(justDate(new Date().setDate(new Date().getDate() - 1)));

const props = defineProps({
    selectIs: String
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

<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
