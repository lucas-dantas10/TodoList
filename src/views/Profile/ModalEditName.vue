<template>

    <ModalLayout v-if="show" title="Editar Nome da Conta" height="25%" >

        <template #content>
            <div class="flex flex-col justify-center gap-2">
                <label for="name" class="text-gray-400">Entrar com novo nome</label>
                <input v-model="account.name" id="name" type="text" class="w-full px-2 py-2 bg-[#363636] border border-white rounded-md">
            </div>
        </template>

        <template #button>
            <button @click.prevent="emit('close')">
                Cancelar
            </button>
            <button class="flex items-center gap-2 px-4 py-2 bg-[#8687E7] rounded-md" @click.prevent="editName()">
                <Spinner :loading="isLoading" :full-page="false"/>
                Editar
            </button>
        </template>
        
    </ModalLayout>

</template>


<script setup>
import ModalLayout from '../../components/Layouts/Modal/ModalLayout.vue';
import Spinner from '../../components/Spinner/Spinner.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const account = ref({
    name: '' 
});

const isLoading = computed(() => {
    return store.state.user.loading;
});

const props = defineProps({
    showModal: Boolean
});

const emit = defineEmits([
    'update:showModal',
    'close'
]);

const show = computed({
    get: () => props.showModal,
    set: (value) => emit('update:showModal', value)
}); 

function editName() {
    store.dispatch('editUser', {
        name: account.value.name
    });
}
</script>