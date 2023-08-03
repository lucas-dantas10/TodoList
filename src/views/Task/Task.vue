<template>
  <ModalEditTask :show-modal="appearModalTask" :task="task" :height="'300px'" />
  <ModalEditCategory :show-modal="appearModalCategory" :category="task" :task-model="task" />
  <ModalEditDate :show-modal="appearModalDate" :task-model="task" :height="'55%'" />
  <ModalDeleteTask :show-modal="appearModalDelete" :task-model="task" :height="'250px'" />

  <section class="w-full h-full">
    <form
      class="w-full h-full p-6"
      @submit.prevent="editTask()"
      v-for="(t, index) in task"
      :key="index"
    >
      <div class="flex justify-between items-center mb-8">
        <router-link :to="{ name: 'Home' }">
          <div
            class="bg-[#363636] w-10 h-10 flex items-center justify-center rounded-md"
          >
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
          <input type="checkbox" v-model="statusTask" class="w-6 h-6" />
        </div>
        <div>
          <p>{{ t.title }}</p>
          <p class="text-gray-500">{{ t.description }}</p>
        </div>
        <div>
          <font-awesome-icon
            :icon="['fas', 'pen']"
            class="text-2xl"
            @click.prevent="showModal('task')"
          />
        </div>
      </div>

      <div class="flex flex-col min-h-[60vh]">
        <div class="flex-1 flex flex-col gap-8">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <font-awesome-icon :icon="['fas', 'clock']" class="text-2xl" />
              <p class="font-semibold">Tempo da Tarefa:</p>
            </div>
            <div class="bg-[#363636] rounded-md px-4 py-2" @click.prevent="showModal('date')">
              <p>{{ t.date }}</p>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <font-awesome-icon :icon="['fas', 'tag']" class="text-2xl" />
              <p class="font-semibold">Categoria da Tarefa:</p>
            </div>

            <div
              class="flex items-center gap-2 rounded-md px-4 py-2"
              :style="{ backgroundColor: t.color_category }"
              @click.prevent="showModal('category')"
            >
              <font-awesome-icon
                :icon="['fas', t.icon_category]"
                class="text-2xl"
              />
              <p>{{ t.name_category }}</p>
            </div>
          </div>

          <div>
            <div class="text-red-600 font-semibold">
                <div class="flex items-center gap-2 w-[40%]" @click.prevent="showModal('delete')">
                    <font-awesome-icon :icon="['fas', 'trash']" class="text-2xl" />
                    <p>Deletar Tarefa</p>
                </div>              
            </div>
          </div>
        </div>

        <button class="w-full flex items-center justify-center bg-[#8687E7] px-4 py-2 rounded-sm">
          <div class="flex gap-4">
            <Spinner :full-page="false" :loading="isLoading"></Spinner>
            <p class="text-center">Editar Tarefa</p>
          </div>
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import ModalEditTask from "./ModalEditTask.vue";
import ModalEditCategory from "./ModalEditCategory.vue";
import ModalEditDate from "./ModalEditDate.vue";
import ModalDeleteTask from "./ModalDeleteTask.vue";
import Spinner from "../../components/Spinner/Spinner.vue";

const appearModalTask = ref(false);
const appearModalCategory = ref(false);
const appearModalDate = ref(false);
const appearModalDelete= ref(false);
const statusTask = ref(false);

const store = useStore();
const route = useRoute();
const idParam = route.params.id;

const isLoading = computed(() => store.state.tasks.loading);

const task = computed(() => {
  let taskSelected = store.state.tasks.data.filter(
    (task) => task.id == idParam
  );
  return taskSelected;
});

onMounted(() => {
  store.dispatch("getTasks");
  store.dispatch("getCategoriesUser");
});

function editTask() {
    console.log(task.value[0])
    // task.value[0].status = statusTask.value;
    // store.dispatch('editTask', task.value[0]);
}

function showModal(typeModal) {
  if (typeModal == "task") 
    appearModalTask.value == true 
        ? (appearModalTask.value = false) 
        : (appearModalTask.value = true);

  if (typeModal == "category") {
    appearModalCategory.value == true
        ? (appearModalCategory.value = false) 
        : (appearModalCategory.value = true);
  }

  if (typeModal == "date") {
    appearModalDate.value == true
        ? (appearModalDate.value = false) 
        : (appearModalDate.value = true);
  }
  if (typeModal == "delete") {
    appearModalDelete.value == true
        ? (appearModalDelete.value = false) 
        : (appearModalDelete.value = true);
  }
    
}
</script>
