<template>
    <Notification></Notification>
    <LoginLayout :title="'Login'">
        <template #form>
            <form class="flex flex-col gap-6" autocomplete="on">
                <Transition>
                    <div v-if="errorMsg" class="border border-red-600 bg-red-600 w-full rounded-md px-4 py-2">
                        <p>{{ errorMsg }}</p>
                    </div>
                </Transition>

                <div class="flex flex-col gap-4">
                    <label for="name" class="text-xl text-slate-200">Nome</label>
                    <input class="border border-[#979797] rounded-md bg-[#1D1D1D] px-4 py-2 focus:outline-indigo-500"
                        type="text" id="name" placeholder="Seu nome" v-model.trim="form.name" required>
                </div>
                <div class="flex flex-col gap-4">
                    <label for="password" class="text-xl text-slate-200">Senha</label>
                    <input class="border border-[#979797] rounded-md bg-[#1D1D1D] px-4 py-2 focus:outline-indigo-500"
                        id="password" placeholder="Sua senha" type="password" required autocomplete="off"
                        v-model.trim="form.password">
                </div>
            </form>
        </template>

        <template #buttonForm>
            <div>
                <button type="button" @click.prevent="login()"
                    class="btn-main flex flex-row items-center justify-center gap-2">
                    <Spinner :loading="isLoading" :full-page="false" />
                    Entrar
                </button>
            </div>
        </template>
    </LoginLayout>
</template>

<script>
import LoginLayout from '../../components/Layouts/Login/LoginLayout.vue';
import Spinner from '../../components/Spinner/Spinner.vue';
import Notification from '../../components/Notification/Notification.vue';

export default {
    components: {
        LoginLayout,
        Spinner,
        Notification
    },

    data() {
        return {
            form: {
                name: '',
                password: ''
            },
            errorMsg: '',
            isLoading: false
        }
    },

    methods: {
        login() {
            this.isLoading = true;
            this.$store.dispatch('login', this.form)
                .then(res => {
                    this.$router.push({ name: 'Home' });
                })
                .catch(({ response }) => {
                    // console.debug(response)
                    this.errorMsg = response.data.message;
                    setTimeout(() => {
                        this.errorMsg = '';
                    }, 4000);
                })
                .finally(() => this.isLoading = false);
        }
    }
}
</script>

<style scoped>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>