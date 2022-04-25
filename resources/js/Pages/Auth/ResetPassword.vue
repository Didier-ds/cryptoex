<template>
    <max-width-container class="flex flex-col">
        <Head title="Reset Password" />
        <div class="my-8 md:my-10">
            <Logo />
        </div>
        <div class="form-container w-full max-w-xl mx-auto my-10">
            <JetValidationErrors />
            <!-- <div
                v-if="status"
                class="mb-4 work font-medium text-sm text-green-600">
                {{ status }}
            </div> -->
            <h4 class="font-bold text-gray-800 work text-lg my-2">
                Reset your password
            </h4>
            <!-- <p class="font-regular work text-gray-600 text-xs md:text-sm">
                Enter the email associated with your account and we'll send an
                email to reset your password
            </p> -->
            <form action="#" class="" @submit.prevent="submit">
                <div
                    class="input_container text-secondary work font-medium border rounded focus-within:shadow-md focus-within:border-cyan mb-8">
                    <q-input
                        v-model="form.email"
                        borderless
                        input-class="my_input"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        disable
                        autofocus />
                </div>
                <!-- password Input Container -->
                <div
                    class="input_container text-secondary work font-medium text-black border rounded focus-within:shadow-md focus-within:border-cyan mb-8">
                    <q-input
                        v-model="form.password"
                        required
                        lazy-rules
                        :type="isPwd ? 'password' : 'text'"
                        borderless
                        name="password"
                        autocomplete="new-password"
                        :rules="[isValidPWd]"
                        input-class="my_input text-secondary"
                        placeholder="Password">
                        <template #append>
                            <EyeIcon :show="!isPwd" @click="isPwd = !isPwd" />
                        </template>
                    </q-input>
                </div>

                <!-- passowrd confirmation Input Container -->
                <div
                    class="input_container text-secondary work font-medium text-black border rounded focus-within:shadow-md focus-within:border-cyan mb-8">
                    <q-input
                        v-model="form.password_confirmation"
                        required
                        lazy-rules
                        :type="isPwd ? 'password' : 'text'"
                        :rules="confirmPassword(form.password)"
                        borderless
                        name="new password"
                        input-class="my_input text-secondary"
                        autocomplete="new-password"
                        placeholder="Confirm Password">
                        <template #append>
                            <EyeIcon :show="!isPwd" @click="isPwd = !isPwd" />
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
                        label="Reset Password" />
                       
                </div>
            </form>
<!-- 
            <p class="font-medium float-left work">
                Remember Password?
                <inertia-link href="/login" class="text-primary"
                    >Back to Sign-in</inertia-link
                >
            </p> -->
        </div>
    </max-width-container>
    <!-- <jet-authentication-card>
        <template #logo>
            <jet-authentication-card-logo />
        </template>

        <jet-validation-errors class="mb-4" />

        <form @submit.prevent="submit">
            <div>
                <jet-label for="email" value="Email" />
                <jet-input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autofocus />
            </div>

            <div class="mt-4">
                <jet-label for="password" value="Password" />
                <jet-input
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password" />
            </div>

            <div class="mt-4">
                <jet-label
                    for="password_confirmation"
                    value="Confirm Password" />
                <jet-input
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <jet-button
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing">
                    Reset Password
                </jet-button>
            </div>
        </form>
    </jet-authentication-card> -->
</template>

<script setup>
import Logo from '@/components/reusables_/Logo.vue'
// import { defineComponent } from 'vue'
import EyeIcon from '@/components/reusables_/EyeIcon.vue'
import { Head, ref, useForm, confirmPassword, isValidPWd } from '@/utils'
// import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue'
// import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue'
// import JetButton from '@/Jetstream/Button.vue'
// import JetInput from '@/Jetstream/Input.vue'
// import JetLabel from '@/Jetstream/Label.vue'
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue'

const props = defineProps({
    email: String,
    token: String,
})

const isPwd = ref(true)

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
})

const submit = () => {
    form.post(route('password.update'), {
                onFinish: () =>
                    form.reset('password', 'password_confirmation'),
            })
}
// export default defineComponent({
//     components: {
//         Head,
//         JetAuthenticationCard,
//         JetAuthenticationCardLogo,
//         JetButton,
//         JetInput,
//         JetLabel,
//         JetValidationErrors,
//     },

//     props: {
//         email: String,
//         token: String,
//     },

//     data() {
//         return {
//             form: this.$inertia.form({
//                 token: this.token,
//                 email: this.email,
//                 password: '',
//                 password_confirmation: '',
//             }),
//         }
//     },

//     methods: {
//         submit() {
//             this.form.post(this.route('password.update'), {
//                 onFinish: () =>
//                     this.form.reset('password', 'password_confirmation'),
//             })
//         },
//     },
// })
</script>
