<template>
  <ModalLayout :title="'Editar Tarefa'" v-if="show">
    <div class="w-full">
      <input
        type="text"
        class="px-4 py-2 rounded-md bg-[#363636] border w-full"
        placeholder="Título da tarefa"
      />
    </div>

    <div class="w-full">
      <input
        type="text"
        class="px-4 py-2 rounded-md bg-[#363636] w-full"
        placeholder="Descrição"
      />
    </div>
  </ModalLayout>
</template>

<script setup>
import ModalLayout from "../../components/Layouts/Modal/ModalLayout.vue";
import { defineEmits, defineProps, computed } from 'vue';

const props = defineProps({
    showModal: Boolean
});

const emit = defineEmits([
    'update:showModal'
]);

const show = computed({
    get: () => props.showModal,
    set: (value) => emit('update:showModal', value)
});
</script>
