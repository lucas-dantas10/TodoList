<template>
    <div class="w-full h-full">
        <AppLayout>
            <div class="w-full h-full flex items-center justify-center">
                <div class="flex flex-col items-center justify-center">
                    <div>
                        <img src="../../assets/checklist.svg" alt="">
                    </div>
                    <div class="flex flex-col text-center items-center">
                        <p class="text-2xl text-gray-300">O que você quer fazer hoje?</p>
                        <p class="text-gray-300">Clique no + para adicionar tarefas</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    </div>
</template>

<script>
    import AppLayout from '../../components/Layouts/AppLayout.vue';

    export default {
        components: {
            AppLayout
        }
    }
</script>