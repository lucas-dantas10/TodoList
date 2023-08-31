<template>
    <TransitionGroup name="list">
        <div
            class="w-full min-h-[20%] max-h-[60%] flex flex-row items-center py-2 px-4 bg-[#363636] rounded-md"
            v-for="(t, index) in selectIs == 'notCompleted' ? tasks : tasksCompleted"
            :key="t.id"
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
import { computed } from "vue";
import date from "../../filters/date.js";
import justDate from "../../filters/justDate.js";
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

const tasks = computed(() => {
    const taskNotComplete = store.state.tasks.data.filter((task) => task.status == false);
    return taskNotComplete;
});

const tasksCompleted = computed(() => {
    const taskComplete = store.state.tasks.data.filter((task) => task.status == true);
    return taskComplete;
});
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
