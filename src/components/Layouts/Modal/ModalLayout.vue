<template>
    <Teleport to="body">

        <Transition name="bounce">

            <div class="modal bg-[#363636] rounded-md w-full p-4" :style="{ height: height }">

                <div class="border-b pb-4 mb-4">
                    <h1 class="text-center">{{ title }}</h1>
                </div>

                <div class="w-full flex flex-col min-h-[80%]">
                    <div class="flex-1 flex flex-col gap-4">
                        <slot name="content"></slot>
                    
                    </div>

                    <div class="flex items-center justify-between p-4">
                        <slot name="button"></slot>
                        
                    </div>
                    
                </div>
            </div>

        </Transition>

    </Teleport>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    height: String
});

</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  height: 55%;
  margin-left: -150px;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>