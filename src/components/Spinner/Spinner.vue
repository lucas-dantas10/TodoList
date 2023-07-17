<template>
    <div v-if="show && fullPage == false">
        <div class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
        </div>
    </div>

    <div v-if="show && fullPage == true" class="w-screen h-screen flex justify-center items-center">
        <div class="inline-block h-[4.5rem] w-[4.5rem] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
export default {
    setup(props, { emit }) {
        const show = computed({
            get: () => props.loading,
            set: (value) => emit('update:loading', value)
        })

        return {
            show
        }
    },

    props: ['loading', 'fullPage'],

    emits: ['update:loading']
}

</script>