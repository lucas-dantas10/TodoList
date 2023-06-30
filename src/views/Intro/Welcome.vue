<template>
    <section>
        <div class="py-8 px-[2.8rem] mb-8">
            <router-link to="/">
                <font-awesome-icon class="text-2xl" :icon="['fas', 'chevron-left']" />
            </router-link>
        </div>

        <div class="w-full flex items-center justify-center">
            <div class="flex flex-col items-center justify-center w-[80%] h-[60vh]">
                <div class="flex flex-1 flex-col items-center gap-8">
                    <h1 class="text-center text-3xl">Bem Vindo ao ToDo List</h1>
                    <h4 class="text-center text-md">Por favor logar com a sua conta ou criar uma nova conta para continuar
                    </h4>
                </div>

                <div class="flex flex-col items-center gap-6 w-full">
                    <button class="uppercase border border-indigo-500 rounded-md py-2 px-4 bg-indigo-500 w-full">
                        <router-link to="/login">
                            Login
                        </router-link>
                    </button>
                    <button class="uppercase bg-primary border-2 border-indigo-500 rounded-md px-4 py-2 w-full">
                        Criar Conta
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>