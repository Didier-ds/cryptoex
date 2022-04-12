<template>
    <admin-layout>
        <div>
            <div class="flex flex-row justify-between items-center mx-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <p class="font-medium work text-lg capitalize">
                    Create A New Bitcoin vendor offer
                </p>
            </div>
            <form
                class="shadow-lg border max-w-xl mx-auto overflow-hidden work sm:rounded-lg m-4"
                @submit.prevent="submit">
                <p class="font-medium p-4 work text-lg capitalize">
                    Create A New Bitcoin vendor offer
                </p>
                <JetValidationErrors class="px-2" />
                <div class="p-4">
                    <div class="grid sm:grid-cols-2">
                        <q-input
                            v-model="form.name"
                            class="m-2"
                            standout
                            type="text"
                            outlined
                            label="name" />

                        <q-input
                            v-model="form.address"
                            class="m-2"
                            standout
                            type="text"
                            outlined
                            label="address" />

                        <q-input
                            v-model="form.rate"
                            class="m-2"
                            standout
                            type="number"
                            outlined
                            label="asset" />
                        
                        <q-input
                            class="m-2"
                            standout
                            type="file"
                            outlined
                            label="icon_url"
                            @update:model-value="
                                (val) => {
                                    form.image = val[0]
                                }
                            "
                            @change="handleChange" />
                    </div>
                </div>
                <div class="flex p-4">
                    <q-btn
                        color="primary"
                        label="Submit"
                        type="submit"
                        :disabled="form.processing"
                        class="mx-auto"
                        no-cap />
                </div>
            </form>
        </div>
    </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout'
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue'
import { useForm } from '@/utils'
import { useQuasar } from 'quasar'
const $q = useQuasar()
const form = useForm({
    name: '',
    rate: '',
    address: '',
    image: '',
})

defineProps({
    cardnames: {
        type: Array,
        default: () => [],
    },
    
})

const submit = () => {
    // form.filename = `https://drive.google.com/uc?id=${form.filename}`
    form.transform((data) => ({
        ...data,
    }))

        // eslint-disable-next-line no-undef
        .post(`/admin/currency/create`, {
            onSuccess: () => {
                form.reset()
                $q.notify({
                    type: 'positive',
                    message: 'Receipt Created',
                    position: 'top-right',
                })
            },
            onError: (errors) => {
                console.log(errors)
            },
        })
}

// const handleChange = () => {
//     console.log(form.image)
//     // form.image = e.target.files[0]
// }
</script>

<style lang="scss" scoped></style>
