<template>
  <ModalLayout :title="'Editar Tarefa'" v-if="show">
    <template #content>
        <div class="w-full">
            <input
                type="text"
                class="px-4 py-2 rounded-md bg-[#363636] border w-full"
                placeholder="Título da tarefa"
                v-model.trim="task[0].title"
            />
        </div>

        <div class="w-full">
            <input
                type="text"
                class="px-4 py-2 rounded-md bg-[#363636] w-full"
                placeholder="Descrição"
                v-model.trim="task[0].description"
            />
        </div>
    </template>

    <template #button>
        <button @click.prevent="showModal = false">
            Cancelar
        </button>
        <button class="px-4 py-2 bg-[#8687E7] rounded-md" @click.prevent="showModal = false">
            Editar
        </button>
    </template>
    
  </ModalLayout>
</template>

<script setup>
import ModalLayout from "../../components/Layouts/Modal/ModalLayout.vue";
import { defineEmits, defineProps, computed, ref } from 'vue';

const props = defineProps({
    showModal: Boolean,
    task: {
        type: Object,
        required: true
    }
});

const emit = defineEmits([
    'update:showModal'
]);

const show = computed({
    get: () => props.showModal,
    set: (value) => emit('update:showModal', value)
});
</script>
