<template>
  <AppLayout title="Foco" :focus="false">
    <section class="w-full h-full">
      <div class="w-full h-full p-6">
        <stop-watch />
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../../components/Layouts/AppLayout.vue";
import StopWatch from "../../components/StopWatch/StopWatch.vue";
</script>
