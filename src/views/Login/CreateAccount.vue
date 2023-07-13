<template>
    <section>
        <CreateAccountLayout :title="'Cadastro'">
            <template v-slot:form>
                <form class="flex flex-col gap-6" autocomplete="on">
                    <div v-if="errorMsg" class="border border-red-600 bg-red-600 w-full rounded-md px-4 py-2">
                        <p>{{ errorMsg }}</p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <label for="name" class="text-xl text-slate-200">Nome</label>
                        <input class="border border-[#979797] rounded-md bg-[#1D1D1D] px-4 py-2 focus:outline-indigo-500"
                            type="text" id="name" placeholder="Seu nome" v-model.trim="form.name" required>
                    </div>
                    <div class="flex flex-col gap-4">
                        <label for="email" class="text-xl text-slate-200">Email</label>
                        <input class="border border-[#979797] rounded-md bg-[#1D1D1D] px-4 py-2 focus:outline-indigo-500"
                            type="text" id="email" placeholder="Seu email" v-model.trim="form.email" required>
                    </div>
                    <div class="flex flex-col gap-4">
                        <label for="password" class="text-xl text-slate-200">Senha</label>
                        <input class="border border-[#979797] rounded-md bg-[#1D1D1D] px-4 py-2 focus:outline-indigo-500"
                            id="password" placeholder="Sua senha" type="password" required autocomplete="off"
                            v-model.trim="form.password">
                    </div>
                    <div class="flex flex-col gap-4">
                        <label for="confirmPassword" class="text-xl text-slate-200">Confirmar Senha</label>
                        <input class="border border-[#979797] rounded-md bg-[#1D1D1D] px-4 py-2 focus:outline-indigo-500"
                            id="confirmPassword" placeholder="Sua senha" type="password" required autocomplete="off"
                            v-model.trim="form.confirmPassword">
                    </div>
                </form>
            </template>

            <template v-slot:buttonForm>
                <div class="flex flex-row items-center justify-center gap-2">
                    <Spinner :loading="isLoading" :full-page="false" />
                    <button type="submit" @click.prevent="register()" class="btn-main">Cadastrar</button>
                </div>
            </template>
        </CreateAccountLayout>
    </section>
</template>

<script>
import CreateAccountLayout from '../../components/Layouts/CreateAccount/CreateAccountLayout.vue';
import notify from '../../hooks/notify.js'

export default {
    components: {
        CreateAccountLayout
    },

    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            errorMsg: '',
            isLoading: false
        }
    },

    methods: {
        register() {
            this.isLoading = true;
            this.$store.dispatch('registerUser', this.form)
                .then(({data}) => {
                    notify("success", "Sucesso", "Usuário Cadastrado");
                    this.$router.push({name: 'Login'});
                })
                .catch(({response}) => {
                    console.log(response);
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