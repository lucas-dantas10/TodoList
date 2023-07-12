<template>
    <div v-if="calendarShow" class="w-full">
        <VDatePicker borderless expanded :isDark="true" class="bg-blue" v-model="date" mode="dateTime" is24h />
        <div class="bg-[#0f172a] p-6 flex flex-row items-center justify-between w-full">
            <button class="text-[#8687E7]" @click.prevent="$emit('close', false)">
                Voltar
            </button>
            <button class="border rounded-md py-2 px-4 bg-blue-700" @click="saveDate()">
                Salvar
            </button>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    data() {
        return {
            date: ''
        }
    },

    props: ['modelValue'],

    emits: ['update:modelValue', 'close', 'sendDate'],

    setup(props, { emit }) {
        const calendarShow = computed({
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value)
        });

        return {
            calendarShow,
        }
    },

    methods: {
        saveDate() {
            this.date = this.$filters.dateBR(this.date);
            this.$emit('sendDate', this.date);
            this.$emit('close', false);
        }
    }
}
</script>