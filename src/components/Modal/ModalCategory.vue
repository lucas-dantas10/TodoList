<template>
    <div class="w-[90%] h-[50%] bg-[#363636]" v-if="appearCategory">
        <input type="hidden" class="bg-categoryBlue">
        <input type="hidden" class="bg-categoryPinkLess">
        <input type="hidden" class="bg-categoryGreenWater">
        <div class="h-[100%] flex flex-col items-center justify-between gap-8">

            <div class="text-center p-6 border-b w-[90%]">
                <h1 class="text-center text-xl">Escolha a Categoria</h1>
            </div>

            <div class="w-[90%] h-[100%] mt-2 flex flex-row flex-wrap items-start justify-center gap-6">
                <div class="flex flex-col justify-center items-center gap-2" v-for="(category, index) in categories" :key="index" @click.prevent="addCategoryInTask(category)">
                    <div :class="`w-20 h-16 rounded-md flex items-center justify-center bg-${category.color}`">
                        <font-awesome-icon class="text-2xl" :icon="['fas', category.icon]" />
                    </div>

                    <div>
                        <p>{{ category.name }}</p>
                    </div>
                </div>
                
            </div>


        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['showCategory'],

    emits: ['update:showCategory', 'close', 'sendCategory'],

    setup(props, { emit }) {
        const appearCategory = computed({
            get: () => props.showCategory,
            set: (value) => emit('update:showCategory', value)
        });

        return {
            appearCategory
        }
    },

    methods: {
        addCategoryInTask(category) {
            this.$emit('sendCategory', category);
            this.$emit('close', false);
        }
    },

    computed: {
        categories() {
            return this.$store.state.categories.data;
        }
    }
}
</script>