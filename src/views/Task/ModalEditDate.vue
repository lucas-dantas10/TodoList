<template>
  <ModalLayout v-if="show" :title="'Editar Data'">
    <template #content>
      <div class="w-full h-[15vh]">
        <VDatePicker
          borderless
          expanded
          :isDark="true"
          class="bg-blue"
          mode="dateTime"
          v-model="currentDate"
          is24h
        />
        <div
          class="bg-[#0f172a] p-6 flex flex-row items-center justify-between w-full"
        >
          <button class="text-[#8687E7]">
            Voltar
          </button>
          <button
            class="border rounded-md py-2 px-4 bg-blue-700"
          >
            Salvar
          </button>
        </div>
      </div>
    </template>

    <template #button> </template>
  </ModalLayout>
</template>

<script setup>
import ModalLayout from "../../components/Layouts/Modal/ModalLayout.vue";
import { defineProps, defineEmits, computed, ref } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  showModal: Boolean,
  taskModel: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:showModal"]);

const currentDate = ref(props.taskModel[0]);


const show = computed({
  get: () => props.showModal,
  set: (value) => emit("update:showModal", value),
});
</script>
