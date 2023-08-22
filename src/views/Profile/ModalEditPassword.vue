<template>
  <ModalLayout v-if="show" title="Editar Senha da Conta" height="25%">
    <template #content>
      <div class="flex flex-col justify-center gap-2">
        <label for="password" class="text-gray-400">Entrar com nova senha</label>
        <input
          v-model.trim="account.password"
          type="text"
          class="w-full px-2 py-2 bg-[#363636] border border-white rounded-md"
          id="password"
        />
      </div>
    </template>

    <template #button>
      <button @click.prevent="showModal = false">Cancelar</button>
      <button
        class="px-4 py-2 bg-[#8687E7] rounded-md"
        @click.prevent="editPassword()"
      >
        Editar
      </button>
    </template>
  </ModalLayout>
</template>

<script setup>
import ModalLayout from "../../components/Layouts/Modal/ModalLayout.vue";
import { computed, ref } from 'vue';

const account = ref({
    password: ''
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

function editPassword() {
    console.log('password');
}
</script>
