<template>
    <ModalEditName :show-modal="showModalEditName" />
    <ModalEditPassword :show-modal="showModalEditPassword" />
    <AppLayout title="Perfil">
        <section class="w-full h-full">
            <div class="w-full flex flex-col gap-8 p-6">
                <div class="flex flex-col justify-center gap-6">
                    <h1 class="text-center text-2xl">{{ user.name }}</h1>

                    <div class="flex items-center justify-center gap-6">
                        <div class="rounded-md py-4 px-4 bg-[#363636]">
                            <p>
                                {{ tasksLeft == 1 ? `${tasksLeft} tarefa restante` : `${tasksLeft} tarefas restantes` }}
                            </p>
                        </div>

                        <div class="rounded-md py-4 px-4 bg-[#363636]">
                            <p>
                                {{ tasksDone == 1 ? `${tasksDone} tarefa feita` : `${tasksDone} tarefas feitas` }} 
                            </p>
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
                        @show-modal="showAddNewModal"
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
import ModalEditName from './ModalEditName.vue';
import ModalEditPassword from './ModalEditPassword.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';

const store = useStore();
const router = useRouter();
const showModalEditName = ref(false);
const showModalEditPassword = ref(false);

function showAddNewModal(menu) {

    if (menu.icon == 'gear') {
        showModalEditName.value = menu.status;
        return;
    }

    showModalEditPassword.value = menu.status;
    // showModalEditName.value = value;
}

function logout() {
    store.dispatch('logout')
        .then(() => {
            router.push({ name: 'Login' });
        })
        .catch(({response}) => console.log(response.data));
}

const user = computed(() => {
    return store.state.user.data;
});

const tasksDone = computed(() => {
    let tasksDone = store.state.tasks.data.filter(task => task.status == true);
    
    return tasksDone.length;
})

const tasksLeft = computed(() => {
    let tasksLeft = store.state.tasks.data.filter(task => task.status == false);

    return tasksLeft.length;
});

const submenusSettings = [
    {
        subtitle: "Configurações do App",
        icon: "gear",
        href: "/profile/settings"
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