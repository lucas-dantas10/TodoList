<template>
    <div class="w-full h-3/5 flex items-center justify-center">
        <div class="w-[14rem] h-[14rem] text-4xl flex items-center justify-center border-8 border-[#363636] rounded-full bg-primary">
            <span v-if="formatMinutes">0{{stopwatch.minutes}}</span>
            <span v-else>{{stopwatch.minutes}}</span>
            :
            <span v-if="formatSeconds">0{{stopwatch.seconds}}</span>
            <span v-else>{{stopwatch.seconds}}</span>
        </div>
    </div>
    <div>
        <div class="flex items-center justify-center">
            <button 
                v-if="stopwatch.seconds.value == 0" @click="stopwatch.start()"
                class="rounded-md bg-indigo-700 px-20 py-2 mt-8"
            >
                Começar
            </button>
        </div>
        <div class="flex items-center justify-center gap-4 mt-8" v-if="stopwatch.seconds.value > 0" >
            <button @click="stopwatch.start()" class="rounded-md bg-indigo-700 px-8 py-2">
                Começar
            </button>
            <button @click="stopwatch.pause()" class="rounded-md bg-indigo-700 px-8 py-2">
                Pausar
            </button>
            <button @click="stopwatch.reset()" class="rounded-md bg-indigo-700 px-8 py-2">
                Reset
            </button>
        </div>
    </div>
</template>


<script setup>
import { computed } from "vue";
import { useStopwatch } from 'vue-timer-hook';

const defaulValue = 0;
const autoStart = false;
const stopwatch = useStopwatch(defaulValue, autoStart);

const formatMinutes = computed(() => {
    return stopwatch.minutes.value < 10;
})

const formatSeconds = computed(() => {
    return stopwatch.seconds.value < 10;
});
</script>