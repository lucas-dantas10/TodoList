<template>
    <AppLayout title="Perfil">
        <section class="w-full h-full">
            <div class="w-full flex flex-col gap-8 p-6">
                <div class="flex flex-col justify-center gap-6">
                    <h1 class="text-center text-2xl">{{ user.name }}</h1>

                    <div class="flex items-center justify-center gap-6">
                        <div class="rounded-md py-4 px-4 bg-[#363636]">
                            <p>10 tarefas restantes</p>
                        </div>

                        <div class="rounded-md py-4 px-4 bg-[#363636]">
                            <p>2 tarefas feitas</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-6">
                    <ListSettings 
                        title="Configurações"
                        :submenus-items="submenusSettings"
                    />

                    <ListSettings 
                        title="Conta"
                        :submenus-items="submenusAccount"
                    />
                </div>

                <div>
                    <div class="flex items-center gap-2 text-red-600" @click.prevent="logout()">
                        <font-awesome-icon class="text-xl" :icon="['fas', 'right-from-bracket']" />
                        <p class="text-xl">Log Out</p>
                    </div>
                </div>
            </div>            
        </section>
    </AppLayout>
</template>

<script setup>
import AppLayout from '../../components/Layouts/AppLayout.vue';
import ListSettings from './ListSettings.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

function logout() {
    console.log('saindo da conta')
}

const user = computed(() => {
    return store.state.user.data;
});

const submenusSettings = [
    {
        subtitle: "Configurações do App",
        icon: "gear"
    }
];

const submenusAccount = [
    {
        subtitle: "Mudar Nome da Conta",
        icon: "gear"
    },
    {
        subtitle: "Mudar Senha da Conta",
        icon: "key"
    },
];
</script>