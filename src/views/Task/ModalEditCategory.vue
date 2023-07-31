<template>
    <ModalLayout v-if="show" :title="'Editar categoria'">
        <template #content>
            <div class="w-full h-full flex flex-row flex-wrap items-start gap-[.8rem] overflow-scroll">
                <div 
                    class="flex flex-col items-center gap-2" 
                    v-for="(category, index) in categories" 
                    :key="index"
                    @click.prevent="editCategory(category)"
                >
                    <div class="w-20 h-16 rounded-md flex items-center justify-center" :style="{backgroundColor: category.color}">
                        <font-awesome-icon class="text-2xl" :icon="['fas', category.icon]" />
                    </div>

                    <div>
                        <p>{{ category.name }}</p>
                    </div>
                </div>

                <router-link :to="{name: 'Category'}">
                    <div class="flex flex-col items-center gap-2">
                        <div class="w-20 h-16 rounded-md flex items-center justify-center bg-[#80FFD1]">
                            <font-awesome-icon class="text-2xl text-[#00A369]" :icon="['fas', 'plus']" />
                        </div>

                        <div>
                            <p>Criar Nova</p>
                        </div>
                    </div>
                </router-link>
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
import ModalLayout from '../../components/Layouts/Modal/ModalLayout.vue';
import { computed, defineProps, defineEmits } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
    showModal: Boolean,
    category: {
        type: Object,
        required: true
    },
    taskModel: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(
    ['update:showModal']
);

const show = computed({
    get: () => props.showModal,
    set: (value) => emit('update:showModal', value)
});

const categories = computed(() => {
    return store.state.categories.data;
});

function editCategory(category) {
    props.taskModel[0].name_category = category.name;
    props.taskModel[0].color_category = category.color;
    props.taskModel[0].icon_category = category.icon;
}
</script>