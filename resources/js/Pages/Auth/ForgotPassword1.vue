<template>
    <max-width-container class="flex flex-col">
            <div class="my-8 md:my-10">
                <Logo />
            </div>
            <div class="form-container max-w-xl mx-auto my-10">
                <JetValidationErrors />
                    <h4 class="font-bold text-gray-800 work text-lg my-2">Forgot your password</h4>
                    <p class="font-regular work text-gray-600 text-xs md:text-sm">Enter the email associated with your account and we'll send an email to reset your password</p>
                    <form action="#" class="" @submit.prevent="submit">
                        
                        <div
                            class="input_container work font-medium border rounded focus-within:shadow-md focus-within:border-cyan my-8">
                            <q-input
                                v-model="form.email"
                                borderless
                                input-class="my_input"
                                placeholder="Email Address" />
                        </div>
                        
                        <div class="mb-4">
                            <q-btn
                                color="primary"
                                type="submit"
                                :disabled="form.processing"
                                unelevated
                                class="w-full primary_shadow py-3 work font-semibold"
                                label="Reset" />
                        </div>
                    </form>

                    <p class="font-medium float-left work">Remember Password?
                        <inertia-link href="/login" class=" text-primary ">Back to Sign-in</inertia-link>
                    </p>

            </div>
    </max-width-container>
</template>

<script setup>
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue'
import Logo from '@/components/reusables_/Logo.vue'
import { ref, useForm } from '@/utils'
const form = useForm({
    email: ''
})

const submit = () => {
    form.transform((data) => ({
        ...data
    }))
        // eslint-disable-next-line no-undef
        .post(route('password.email'), {
            onFinish: () => form.reset(),
        })
}
</script>

<style lang="scss" scoped>

</style>