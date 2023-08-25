<template>
    <AppLayout title="Calendário">
        <div class="px-6">
            <section>
                <VDatePicker
                    v-model="date"
                    expanded
                    view="weekly"
                    :is-dark="true"
                    borderless
                    transparent
                    mode="date"
                    @dayclick="formatDate()"
                />
            </section>

            <section class="mt-8">
                <h2>Sessão 3</h2>
            </section>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from "../../components/Layouts/AppLayout.vue";
import justDate from "../../filters/justDate.js";
import { ref } from "vue";

const date = ref(new Date());

function formatDate() {
    const dateFormated = justDate(date.value);
    console.log(dateFormated);
}
</script>
