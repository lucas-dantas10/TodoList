<template>
    <ModalLayout v-if="show" :title="'Deletar Tarefa'">
        <template #content>
            <div class="w-ful">
                <p class="text-center">Tem certeza que deseja excluir esta tarefa?</p>
            </div>
        </template>

        <template #button>
            <button @click.prevent="showModal = false">
                Cancelar
            </button>
            <button class="px-4 py-2 bg-[#8687E7] rounded-md flex gap-2" @click.prevent="deleteTask()">
                <Spinner :full-page="false" :loading="isLoading"></Spinner>
                Deletar
            </button>
        </template>
    </ModalLayout>
</template>

<script setup>
import { computed } from 'vue';
import ModalLayout from '../../components/Layouts/Modal/ModalLayout.vue';
import store from '../../store';
import Spinner from '../../components/Spinner/Spinner.vue';

const props = defineProps({
    showModal: Boolean,
    taskModel: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['update:showModal']);

const show = computed({
    get: () => props.showModal,
    set: (value) => emit('update:showModal', value)
});

function deleteTask() {
    // store.dispatch('deleteTask', taskModel);
}

const isLoading = computed(() => store.state.tasks.loading);
</script>