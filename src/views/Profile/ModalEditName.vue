<template>

    <ModalLayout v-if="show" title="Editar Nome da Conta" height="25%" >

        <template #content>
            <div>
                <input v-model="account.name" type="text" class="w-full px-2 py-2 bg-[#363636] border border-white rounded-md">
            </div>
        </template>

        <template #button>
            <button @click.prevent="showModal = false">
                Cancelar
            </button>
            <button class="px-4 py-2 bg-[#8687E7] rounded-md" @click.prevent="editName()">
                Editar
            </button>
        </template>
        
    </ModalLayout>

</template>


<script setup>
import ModalLayout from '../../components/Layouts/Modal/ModalLayout.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const account = ref({
    name: '' 
});

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

function editName() {
    store.dispatch('editNameAccount', account);
}
</script>