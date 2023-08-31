<template>
    <AppLayout title="Calendário">
        <div class="px-6">
            <section>
                <VDatePicker
                    v-model="date"
                    expanded
                    view="weekly"
                    :is-dark="true"
                    borderless
                    transparent
                    mode="date"
                    @dayclick="formatDate()"
                />
            </section>

            <section class="mt-8">
                <Tasks 
                    v-if="tasksSelect()"
                    select-is="notCompleted"
                />
            </section>
        </div>
    </AppLayout>
</template>

<script setup>
import { useStore } from "vuex";
import AppLayout from "../../components/Layouts/AppLayout.vue";
import justDate from "../../filters/justDate.js";
import Tasks from '../Home/Tasks.vue';
import { ref, computed } from "vue";

const date = ref(new Date());
const store = useStore();

const allTasks = computed(() => store.state.tasks.data);

function formatDate() {
    const dateFormated = justDate(date.value);
}

function tasksSelect() {
    const dateFormated = justDate(date.value);

    const tasksForDate = allTasks.value.filter(task => {
        let dateFormatedTask = justDate(task.date);
        const currentTask = dateFormatedTask == dateFormated ? task : false;
        return currentTask;
    });

    if (tasksForDate.length == 0) {
        return false;
    } else {
        return tasksForDate;
    }
}
</script>
