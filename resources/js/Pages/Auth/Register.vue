<template>
    <div class="py-4 pt-6">
        <max-width-container>
            <Logo />
            <div class="main_container">
                <div class="ads_container">
                    <p class="whitespace-pre">{{ adText }}</p>
                </div>
                <div id="form_container">
                    <div class="my-4">
                        <p class="font-bold text-gray-800 work text-lg">
                            Create Account
                        </p>
                    </div>
                    <jet-validation-errors class="mb-4" />
                    <form @submit.prevent="submit">
                        <!-- fullname Input Container -->
                        <div class="input_container">
                            <q-input
                                v-model="form.fullname"
                                :rules="[
                                    (val) => !!val || 'fullname is required',
                                    isValidFullName,
                                ]"
                                required
                                lazy-rules
                                type="text"
                                borderless
                                input-class="my_input"
                                placeholder="Fullname" />
                        </div>

                        <!-- Email Input Container -->
                        <div class="input_container">
                            <q-input
                                v-model="form.email"
                                :rules="[
                                    (val) => !!val || 'Email is missing',
                                    isValidEmail,
                                ]"
                                required
                                lazy-rules
                                type="email"
                                borderless
                                input-class="my_input"
                                placeholder="Email Address" />
                        </div>

                        <!-- Phone Input Container -->
                        <div class="input_container">
                            <q-input
                                v-model="form.phone"
                                required
                                lazy-rules
                                type="tel"
                                borderless
                                input-class="my_input"
                                :rules="[(val) => !!val || 'Phone is required']"
                                placeholder="Phone Number">
                                <template #prepend>
                                    <!-- <q-icon name="event" /> -->
                                    <p
                                        class="work font-semibold text-black text-sm">
                                        +234
                                    </p>
                                </template>
                            </q-input>
                        </div>

                        <!-- password Input Container -->
                        <div class="input_container">
                            <q-input
                                v-model="form.password"
                                required
                                lazy-rules
                                :type="isPwd ? 'password' : 'text'"
                                borderless
                                :rules="[isValidPWd]"
                                input-class="my_input "
                                placeholder="Password">
                                <template #append>
                                    <EyeIcon
                                        :show="!isPwd"
                                        @click="isPwd = !isPwd" />
                                </template>
                            </q-input>
                        </div>

                        <!-- passowrd confirmation Input Container -->
                        <div class="input_container">
                            <q-input
                                v-model="form.password_confirmation"
                                required
                                lazy-rules
                                :type="isPwd ? 'password' : 'text'"
                                :rules="confirmPassword(form.password)"
                                borderless
                                input-class="my_input "
                                placeholder="Confirm Password">
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
                                class="w-full primary_shadow py-3 work font-medium"
                                label="Create Account" />
                        </div>
                    </form>
                    <div class="other_link_section flex flex-col">
                        <!-- <inertia-link
              to="/forgotpassword"
              class="forgot-password self-end inline-block mb-4 font-semibold text-cyan"
              >Forgot Your Password</inertia-link
            > -->
                        <p class="font-semibold">
                            Already have an account ?
                            <inertia-link href="/login"
                                ><span class="text-cyan"
                                    >Log In</span
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
import { ref, useForm, confirmPassword, isValidEmail, isValidFullName } from '@/utils'
defineProps({
    canResetPassword: Boolean,
    status: {
        type: String,
        default: null,
    },
})
const isPwd = ref(true)
const form = useForm({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    terms: false,
})
const adText = ref(`You Deserve Good, \nRates`)

const submit = () => {
    // eslint-disable-next-line no-undef
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    })
}
</script>

<style lang="scss" scoped>
.input_container {
    margin-bottom: 2em;
}
.main_container {
    margin: 2em 0;
}
</style>
