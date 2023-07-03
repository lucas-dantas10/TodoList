<template>
    <LoginLayout :title="'Login'">
        <template v-slot:form>
            <form class="flex flex-col gap-6" autocomplete="on">
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

        <template v-slot:buttonForm>
            <div>
                <button type="submit" @click.prevent="login()" class="btn-main">Entrar</button>
            </div>
        </template>
    </LoginLayout>
</template>

<script>
import LoginLayout from '../../components/Layouts/Login/LoginLayout.vue';

export default {
    components: {
        LoginLayout
    },

    data() {
        return {
            form: {
                name: '',
                password: ''
            }
        }
    },

    methods: {
        login() {
            console.log('submit')
        }
    }
}
</script>