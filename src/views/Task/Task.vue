<template>
    <ModalEditTask :show-modal="showAddNewModal" />
    <section class="w-full h-full">
        <form class="w-full h-full p-6" @submit.prevent="editTask()"  v-for="(t, index) in task" :key="index" >
            <div class="flex justify-between items-center mb-8">
            <router-link :to="{ name: 'Home' }">
                <div class="bg-[#363636] w-10 h-10 flex items-center justify-center rounded-md" >
                <font-awesome-icon :icon="['fas', 'xmark']" />
                </div>
            </router-link>

            <router-link :to="{ name: 'Home' }">
                <div
                class="bg-[#363636] w-10 h-10 flex justify-center items-center rounded-md"
                >
                <font-awesome-icon :icon="['fas', 'retweet']" />
                </div>
            </router-link>
            </div>

            <div class="flex justify-between mb-8">
            <div>
                <input type="checkbox" class="w-6 h-6" />
            </div>
            <div>
                <p>{{ t.title }}</p>
                <p>{{ t.description }}</p>
            </div>
            <div>
                <font-awesome-icon :icon="['fas', 'pen']" class="text-2xl" @click.prevent="showModal()" />
            </div>
            </div>

            <div class="flex flex-col min-h-[60vh]">
            <div class="flex-1 flex flex-col gap-8">
                <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <font-awesome-icon :icon="['fas', 'clock']" class="text-2xl" />
                    <p class="font-semibold">Tempo da Tarefa:</p>
                </div>
                <div class="bg-[#363636] rounded-md px-4 py-2">
                    <p>{{ t.date }}</p>
                </div>
                </div>

                <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <font-awesome-icon :icon="['fas', 'tag']" class="text-2xl" />
                    <p class="font-semibold">Categoria da Tarefa:</p>
                </div>

                <div class="rounded-md px-4 py-2" :style="{ backgroundColor: t.color_category }">
                    <p>{{ t.name_category }}</p>
                </div>
                </div>

                <div @click.prevent="deleteTask()">
                <div class="flex items-center gap-2 text-red-600 font-semibold">
                    <font-awesome-icon :icon="['fas', 'trash']" class="text-2xl" />
                    <p>Deletar Tarefa</p>
                </div>
                </div>
            </div>

            <div class="w-full flex items-center justify-center bg-[#8687E7] px-4 py-2 rounded-sm">
                <div>
                <button class="text-center">Editar Tarefa</button>
                </div>
            </div>
            </div>
        </form>
    </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import ModalEditTask from './ModalEditTask.vue';

onMounted(() => {
  store.dispatch("getTasks");
});

const store = useStore();
const route = useRoute();
const idParam = route.params.id;
let showAddNewModal = ref(false)

const task = computed(() => {
  let taskSelected = store.state.tasks.data.filter(
    (task) => task.id == idParam
  );
  return taskSelected;
});

function editTask() {
  console.log("editado");
}

function deleteTask() {
  console.log("deletada");
}

function showModal() {
    showAddNewModal.value == true ? showAddNewModal.value = false : showAddNewModal.value = true;
}
</script>
