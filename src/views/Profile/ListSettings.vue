<template>
  <div class="flex flex-col gap-4">
    <h4 class="text-gray-500 text-lg">{{ title }}</h4>

    <div class="flex flex-col gap-4">
        <div 
            v-for="(submenu, index) in submenusItems" 
            :key="index" 
            class="flex items-center justify-between" 
            @click.prevent="emit('showModal', {status: true, icon: submenu.icon})"
        >
            <div class="flex items-center gap-2">
                <font-awesome-icon class="text-xl" :icon="['fas', submenu.icon]" />
                <p class="text-xl">{{ submenu.subtitle }}</p>
            </div>

            <RouterLink v-if="submenu.href" :to="submenu.href">
                <font-awesome-icon class="text-xl" :icon="['fas', 'chevron-right']" />
            </RouterLink>    
            
            <font-awesome-icon v-else class="text-xl" :icon="['fas', 'chevron-right']" />
        </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    submenusItems: Array
});

const emit = defineEmits([
    'showModal'
]);
</script>
