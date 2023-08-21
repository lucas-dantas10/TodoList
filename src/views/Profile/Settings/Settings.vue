<template>
    <section class="w-full h-full">
        <div class="w-full h-full p-6">
            <header class="w-8/12 flex items-center justify-between mb-8">
                <router-link :to="{name: 'Profile'}">
                    <font-awesome-icon class="text-xl" :icon="['fas', 'chevron-left']" />
                </router-link>

                <h1 class="text-2xl">Configuração</h1>
            </header>

            <div class="flex flex-col gap-6">
                <ListSettings 
                    title="Configurações"
                    :submenus-items="submenusSettings"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import ListSettings from '../ListSettings.vue';

const submenusSettings = [
    {
        subtitle: "Mudar Cor do App",
        icon: "pen"
    },
    {
        subtitle: "Mudar Tipografia do App",
        icon: "t"
    },
];
</script>