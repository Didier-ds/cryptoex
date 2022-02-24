<template>
    <div class="py-4">
        <max-width-container>
            <Logo />
            <div class="main_container">
                <div class="ads_container">
                    <p class="whitespace-pre">{{adText}}</p>
                </div>
                <div id="form_container">
                    <div class="my-4">
                        <p class="font-bold text-gray-800 work text-lg">Welcome Back</p>
                    </div>
                    <form>
                        <div class="input_container mb-8">
                            <q-input v-model="text" borderless input-class="my_input" placeholder="Email Address" />
                        </div>
                        <div class="input_container mb-8">
                            <q-input v-model="text" borderless input-class="my_input" placeholder="Password" />
                        </div>
                        <div class="mb-4">
                            <q-btn color="primary" unelevated  class="w-full primary_shadow py-3 work font-medium" label="Login"/>
                        </div>
                    </form>
                    <div class="other_link_section flex flex-col">
                        <inertia-link to="/forgotpassword" class="forgot-password self-end inline-block mb-4 font-semibold text-cyan">Forgot Your Password</inertia-link>
                        <p class="font-semibold ">
                        Don't have an account ?
                        <inertia-link to="/createaccount"
                            ><span class="text-cyan">Sign Up</span></inertia-link
                        >
                        </p>
                    </div>
                </div>
            </div>
        </max-width-container>
    </div>
</template>

<script setup>
import Logo from '@/components/reusables_/Logo.vue'
import {ref} from '@/utils'
const text = ref('')
const adText = ref(`Nice To See You, \nAgain`)
</script>

<style lang="scss" scoped>
// .input_container {
//     ma
// }
.main_container {
    margin: 6em 0;
}
</style>