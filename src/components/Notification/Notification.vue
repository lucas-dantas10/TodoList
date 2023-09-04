<template>
    <TransitionGroup name="list" tag="ul">
        <article role="alert" class="notificacoes w-[60%] lg:w-[30%]" v-for="(notification, index) in notifications" :key="index">
            <div class="text-black font-bold rounded-t px-4 py-2" :class="notification.type === 'success' ? 'bg-green-500' : 'bg-yellow-500'">
                {{ notification.title }}
            </div>
            <div class="border border-t-0 rounded-b px-4 py-3 text-black" :class="notification.type === 'success' ? 'bg-teal-100' : 'bg-yellow-100'">
                <p>{{ notification.text }}</p>
            </div>
        </article>
    </TransitionGroup>
</template>

<script>

export default {
    computed: {
        notifications() {
            return this.$store.state.notifications;
        }
    }
}
</script>

<style scoped>
.notificacoes {
    position: absolute;
    right: 0;
    padding: 8px;
    z-index: 105;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>