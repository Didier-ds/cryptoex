<template>
    <admin-layout>
        <div>
            <div class="flex flex-row justify-between items-center mx-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <p class="font-medium work text-lg capitalize">
                    Create A New giftcard
                </p>
            </div>
            <form
                class="shadow-lg border max-w-xl mx-auto overflow-hidden work sm:rounded-lg m-4"
                @submit.prevent="submit">
                <p class="font-medium p-4 work text-lg capitalize">
                    Create A New giftcard
                </p>
                <JetValidationErrors class="px-2" />
                <div class="p-4">
                    <div class="grid sm:grid-cols-2">
                        <div class="mb-2">
                            <label
                                for="type"
                                class="block my-1 work font-medium pb-2">
                                Card Type
                            </label>
                            <select
                                id="category"
                                v-model="form.name"
                                required
                                class="p-2 py-3 capitalize font-medium rounded-md shadow-sm border"
                                name="category">
                                <option disabled value="">
                                    Please select giftcard
                                </option>
                                <option
                                    v-for="card in cardnames"
                                    :key="card"
                                    :value="card.name">
                                    {{ card.name }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label
                                for="type"
                                class="block my-1 work font-medium pb-2">
                                Card country
                            </label>
                            <select
                                id="category"
                                v-model="form.country"
                                required
                                class="p-2 py-3 uppercase font-medium rounded-md shadow-sm border"
                                name="category">
                                <option disabled value="">
                                    Please select country
                                </option>
                                <option
                                    v-for="currency in currencies"
                                    :key="currency"
                                    class="uppercase"
                                    :value="currency.currency">
                                    {{ currency.currency }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="grid sm:grid-cols-2">
                        <div class="mb-2">
                            <label
                                for="type"
                                class="block my-1 work font-medium pb-2">
                                Card Receipt
                            </label>
                            <select
                                id="category"
                                v-model="form.type"
                                required
                                class="p-2 py-3 capitalize font-medium rounded-md shadow-sm border"
                                name="category">
                                <option disabled value="">
                                    Please select type
                                </option>
                                <option
                                    v-for="receipt in receipt_types"
                                    :key="receipt"
                                    :value="receipt.name">
                                    {{ receipt.name }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label
                                for="type"
                                class="my-1 work font-medium pb-2">
                                Card Rate
                            </label>
                            <q-input
                                v-model="form.rate"
                                class="px-2 border rounded"
                                type="number"
                                dense
                                borderless
                                label="rate" />
                            <!-- <q-input @update:model-value="val => { form.image = val[0] }" class="m-2" standout type="file" @change="handleChange" outlined label="icon_url"/> -->
                        </div>
                    </div>
                    <div>
                        <p class="my-1 work font-medium">Card Price Range</p>
                        <div class="q-mt-xl">
                            <q-range
                                name="price_range"
                                v-model="range"
                                :min="0"
                                :max="1000"
                                label-always />
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <q-input
                            v-model="range.min"
                            class="m-2 px-2 border rounded"
                            type="number"
                            dense
                            borderless
                            label="min" />
                        <q-input
                            v-model="range.max"
                            class="m-2 px-2 border rounded"
                            type="number"
                            dense
                            borderless
                            label="max" />
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
import { useForm, ref } from '@/utils'
import { useQuasar } from 'quasar'
const $q = useQuasar()
const form = useForm({
    name: '',
    type: '',
    country: '',
    rate: '',
    min: 50,
    max: 100,
})
const range = ref({
    min: 50,
    max: 100,
})
defineProps({
    cardnames: {
        type: Array,
        default: () => [],
    },
    currencies: {
        type: Array,
        default: () => [],
    },
    receipt_types: {
        type: Array,
        default: () => [],
    },
})

const submit = () => {
    // form.filename = `https://drive.google.com/uc?id=${form.filename}`
    const { min, max } = range.value
    form.min = +min
    form.max = +max
    form.transform((data) => ({
        ...data,
    }))

        // eslint-disable-next-line no-undef
        .post(`/admin/giftcards/create`, {
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
