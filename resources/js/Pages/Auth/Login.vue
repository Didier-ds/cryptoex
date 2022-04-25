<template>
    <div class="py-4">
        <max-width-container>
            <div class="my-8 md:my-10">
                <Logo />
            </div>
            <div class="main_container">
                <div class="ads_container">
                    <p class="whitespace-pre">{{ adText }}</p>
                </div>
                <div id="form_container">
                    <div class="my-4">
                        <p class="font-bold text-gray-800 work text-lg">
                            Log In to Your Account
                        </p>
                    </div>
                    <jet-validation-errors class="mb-4" />
                    <form @submit.prevent="submit">
                        <div
                            class="input_container text-secondary work font-medium border rounded focus-within:shadow-md focus-within:border-cyan mb-8">
                            <q-input
                                v-model="form.email"
                                borderless
                                name="email"
                                type="email"
                                required
                                input-class="my_input text-secondary"
                                placeholder="Email Address" />
                        </div>
                        <div
                            class="input_container text-secondary work font-medium border rounded focus-within:shadow-md focus-within:border-cyan mb-8">
                            <q-input
                                v-model="form.password"
                                :type="isPwd ? 'password' : 'text'"
                                borderless
                                name="password"
                                input-class="my_input text-secondary relative"
                                required
                                placeholder="Password">
                                <template #append>
                                    <EyeIcon
                                        :show="!isPwd"
                                        @click="isPwd = !isPwd" />
                                </template>
                            </q-input>
                        </div>
                        <div class="mb-4">
                            <q-btn
                                color="primary"
                                type="submit"
                                :disabled="form.processing"
                                unelevated
                                class="w-full primary_shadow py-3 work font-semibold"
                                label="Login" />
                        </div>
                    </form>
                    <div class="other_link_section work flex flex-col">
                        <inertia-link
                            href="/forgot-password"
                            class="forgot-password self-end inline-block mb-8 font-semibold text-primary"
                            >Forgot Your Password</inertia-link
                        >
                        <p class="font-semibold">
                            Don't have an account ?
                            <inertia-link href="/register"
                                ><span class="text-primary"
                                    >Sign Up</span
                                ></inertia-link
                            >
                        </p>
                    </div>
                </div>
            </div>
        </max-width-container>
    </div>
</template>

<script setup>
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue'
import EyeIcon from '@/components/reusables_/EyeIcon.vue'
import Logo from '@/components/reusables_/Logo.vue'
import { ref, useForm } from '@/utils'
defineProps({
    canResetPassword: Boolean,
    status: {
        type: String,
        default: null,
    },
})
const isPwd = ref(true)
const form = useForm({
    email: '',
    password: '',
    remember: false,
})
const adText = ref(`Nice To See You, \nAgain`)

const submit = () => {
    form.transform((data) => ({
        ...data,
        remember: form.remember ? 'on' : '',
    }))
        // eslint-disable-next-line no-undef
        .post(route('login'), {
            onFinish: () => form.reset('password'),
        })
}
</script>

<style lang="scss" scoped>
// .input_container {
//     ma
// }
.main_container {
    margin: 4em 0;
}
@media (max-width: 769px) {
    .main_container {
        margin: 8em 0;
    }
}
</style>
