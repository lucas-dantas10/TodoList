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
          <form class="w-full flex flex-row items-center gap-8 relative animate-fade-in-down" v-if="searchShow" @submit.prevent="searchTask()">
            <font-awesome-icon
              class="absolute text-2xl px-3"
              :icon="['fas', 'magnifying-glass']"
            />
            <input
              type="text"
              v-model.trim="taskSearch"
              class="w-full bg-primary border border-gray-400 px-11 py-2 rounded-md placeholder:text-gray-400 placeholder:text-lg focus:outline-indigo-600"
              placeholder="Procure pela sua tarefa..."
            />
          </form>

          <div class="w-[100%] h-[100%] flex flex-col gap-[2rem]">
            <div class="flex flex-col gap-[2rem]">
              <div class="w-[35%]">
                <div
                  class="w-full flex flex-row px-4 py-2 gap-2 border border-[#363636] bg-[#363636] rounded-lg"
                >
                  <select
                    class="w-full bg-[#363636] flex flex-row items-center gap-2"
                    v-model.trim="daysOptions"
                    @change.prevent="verifyDate()"
                  >
                    <option value="" selected>
                      Todas
                      <font-awesome-icon :icon="['fas', 'chevron-down']" />
                    </option>
                    <option :value="$filters.justDate(new Date())" selected>
                      Hoje
                    </option>
                    <option :value="subDate">Ontem</option>
                  </select>
                </div>
              </div>

              <TransitionGroup name="list">
                <div
                  class="w-full min-h-[20%] max-h-[60%] flex flex-row items-center py-2 px-4 bg-[#363636] rounded-md"
                  v-for="(t, index) in tasks" :key="index"
                >
                  <div class="w-[15%] h-full flex justify-center items-center">
                    <input
                      type="checkbox"
                      class="w-6 h-6"
                      v-model="t.status"
                      @click.prevent="changeStatus(t)"
                    />
                  </div>
                  <div class="w-full flex flex-col gap-2 items-center" @click.prevent="redirectTaskScreen(t.id)">
                    <div class="w-full">
                      <p class="text-xl">{{ t.title }}</p>
                    </div>
                    <div
                      class="w-full flex flex-row justify-between items-center"
                    >
                      <div class="text-gray-400">
                        {{ $filters.date(t.date) }}
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
            </div>

            <div class="flex flex-col gap-[2rem]">
              <div class="w-[40%]">
                <div
                  class="w-full flex flex-row px-4 py-2 gap-2 border border-[#363636] bg-[#363636] rounded-lg"
                >
                  <select
                    class="w-full bg-[#363636] flex flex-row items-center gap-2"
                  >
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
                  v-for="(t, index) in tasksCompleted" :key="index"
                >
                  <div class="w-[15%] h-full flex justify-center items-center">
                    <input
                      type="checkbox"
                      class="w-6 h-6"
                      v-model="t.status"
                      @click.prevent="changeStatus(t)"
                    />
                  </div>
                  <div class="w-full flex flex-col gap-2 items-center" @click.prevent="redirectTaskScreen(t.id)">
                    <div class="w-full">
                      <p class="text-xl">{{ t.title }}</p>
                    </div>
                    <div
                      class="w-full flex flex-row justify-between items-center"
                    >
                      <div class="text-gray-400">
                        {{ $filters.date(t.date) }}
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

export default {
  components: { AppLayout, ModalCalendar, Notification, Spinner },

  data() {
    return {
      searchShow: false,
      daysOptions: "",
      taskSearch: "",
      subDate: this.$filters.justDate(
        new Date().setDate(new Date().getDate() - 1)
      ),
    };
  },

  methods: {
    changeShow() {
      this.searchShow = !this.searchShow;
    },

    changeStatus(task) {
      task.status == true ? (task.status = false) : (task.status = true);
    },

    redirectTaskScreen(id) {
      this.$router.push(`/task/${id}`);
    },

    verifyDate() {
      if (this.daysOptions === "") {
        this.$store.dispatch("getTasks");
        return;
      }
      this.$store.dispatch("filterDateOfTasks", this.daysOptions);
    },

    searchTask() {
      this.$store.dispatch("searchTask", { taskSearch: this.taskSearch });
    },
  },

  computed: {
    tasks() {
      const taskNotComplete = this.$store.state.tasks.data.filter(task => task.status == false);
      return taskNotComplete;
    },

    tasksCompleted() {
      const taskComplete = this.$store.state.tasks.data.filter(task => task.status == true);
      return taskComplete;
    },

    isLoading() {
      return this.$store.state.tasks.loading;
    },
  },
};
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
