<template>
    <section>
        <div class="py-8 px-[2.8rem] ">
            <router-link to="/welcome">
                <font-awesome-icon class="text-2xl" :icon="['fas', 'chevron-left']" />
            </router-link>
        </div>

        <div class="flex flex-col items-center justify-center w-full">
            <div class="w-9/12 flex flex-col gap-10 lg:w-[30%]">
                <h1 class="text-3xl font-semibold">{{ title }}</h1>

                <slot name="form"></slot>

                <slot name="buttonForm"></slot>

                <div class="flex flex-row items-center justify-between">
                    <div class="border border-[#979797] w-[45%]"></div>
                    <p>ou</p>
                    <div class="border border-[#979797] w-[45%]"></div>
                </div>

                <div>
                    <button class="bg-primary border-2 border-indigo-500 rounded-md px-4 py-2 w-full">
                        <font-awesome-icon :icon="['fab', 'google']" class="px-2" />
                        Login com Google
                    </button>
                </div>

                <div class="p-4">
                    <p class="text-center">Já possui uma conta? 
                        <router-link class="text-slate-400" to="/login">Login</router-link>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        props: {
            title: String
        }
    }
</script>