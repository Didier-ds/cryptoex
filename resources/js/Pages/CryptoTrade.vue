<template>
    <main-layout>
        <div id="Trade_Bitcoin_Page ">
            <div class="flex flex-row justify-between items-center px-4">
                <div class="my-1">
                    <button
                    class="back_btn cursor-default rounded bg-gray-100 sm:bg-transparent sm:hover:bg-gray-100 p-2 select-none flex items-center"
                    @click="prevStep(currentStep)">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.4"
                            d="M15.7975 10.8097L19.4967 10.4825C20.3269 10.4825 21 11.1622 21 12.0004C21 12.8387 20.3269 13.5183 19.4967 13.5183L15.7975 13.1912C15.1463 13.1912 14.6183 12.6581 14.6183 12.0004C14.6183 11.3417 15.1463 10.8097 15.7975 10.8097Z"
                            fill="#130F26" />
                        <path
                            d="M3.37522 10.8698C3.43303 10.8115 3.64903 10.5647 3.85194 10.3598C5.03556 9.07656 8.12607 6.97815 9.74278 6.33596C9.98823 6.23352 10.6089 6.01542 10.9417 6C11.2591 6 11.5624 6.0738 11.8515 6.2192C12.2126 6.42299 12.5006 6.74463 12.6598 7.12355C12.7613 7.38572 12.9206 8.17331 12.9206 8.18763C13.0787 9.04792 13.1649 10.4469 13.1649 11.9934C13.1649 13.465 13.0787 14.8067 12.9489 15.6813C12.9347 15.6967 12.7755 16.6738 12.602 17.0086C12.2846 17.6211 11.6638 18 10.9995 18H10.9417C10.5086 17.9857 9.59878 17.6057 9.59878 17.5924C8.06825 16.9502 5.05083 14.9532 3.83776 13.6258C3.83776 13.6258 3.49522 13.2844 3.34685 13.0718C3.11558 12.7656 2.99995 12.3866 2.99995 12.0077C2.99995 11.5847 3.12977 11.1915 3.37522 10.8698Z"
                            fill="#130F26" />
                    </svg>

                    <span class="px-2 myHidden hidden font-medium work"
                        >Back</span
                    >
                </button>
                </div>
                <div class="">
                    <h2 class="text-lg work font-semibold p-ripple">
                        Trade Bitcoin
                    </h2>
                </div>
            </div>

            <JetValidationErrors />

            <div class="max-w-lg mx-auto p-4">
                <div class="flex py-4 mb-2">
                    <div class="w-6 mr-1 h-2 bg-primary"></div>
                    <div class="w-6 mr-1 h-2 bg-cyan-200"></div>
                    <div class="w-6 mr-1 h-2 bg-cyan-200"></div>
                </div>
                <template v-if="isLoading">
                    <div class="h-[25rem] flex justify-center items-center">
                        <q-spinner-tail color="primary" size="3em" />
                    </div>
                </template>
                <template v-else>
                    <!-- {{selectedVendor}} -->
                    <template v-if="currentStep === 0">
                        <div class="mb-4">
                            <label
                                for="assets"
                                class="work font-medium leading-8"
                                >Wallet type</label
                            >
                            <AssetsDropdown
                                @is-selected-vendor="isSelectedVendor" />
                        </div>
                        <div class="mb-4">
                            <label
                                for="assets"
                                class="work font-medium leading-8"
                                >Amount (in USD)</label
                            >
                            <q-input
                                v-model="form.amount"
                                type="number"
                                dense
                                borderless
                                class="border shadow cursor-default focus:outline-none rounded overflow-hidden focus-visible:ring-1 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-300 focus-visible:ring-offset-2 focus-visible:border-cyan sm:text-sm"
                                input-class="my_input w-full pl-3 pr-10 text-left bg-white border py-0" />
                        </div>
                        <div class="text-center">
                            <p class="font-medium work">We will Pay You</p>
                            <p
                                class="font-bold leading-loose text-green-800 ibm text-2xl">
                                &#8358;{{ TOTAL_AMOUNT }}
                            </p>
                        </div>
                        <div class="my-4 w-full">
                            <button
                                v-ripple
                                :disabled="TOTAL_AMOUNT <= 0"
                                class="px-4 w-full mx-auto md:w-8/12 work py-3 block relative shadow-lg bg-primary rounded text-white font-medium"
                                @click="nextStep(toggleLoader)">
                                Proceed
                            </button>
                        </div>
                    </template>
                    <template v-if="currentStep === 1">
                        <div class="mx-auto my-2" style="max-width: 15em">
                            <q-img
                                :src="selectedVendor.filename"
                                :alt="selectedVendor.name + ' barcode'" />
                        </div>
                        <div class="flex p-2 border shadow rounded bg-white">
                            <input
                                type="text"
                                class="flex-1 p-2 overflow-hidden"
                                disabled
                                :value="selectedVendor.address" />
                            <q-btn
                                label="Copy"
                                class="work shadow text-white bg-primary rounded"
                                flat
                                no-caps />
                        </div>
                        <div
                            v-if="preview"
                            class="w-16 h-16 m-4 rounded overflow-hidden">
                            <q-img :src="preview" />
                        </div>
                        <q-file
                            label="Upload Proof of Payment"
                            flat
                            borderless
                            accept="image/*"
                            dense
                            v-model="image"
                            class="p-2 px-3 my-4 border work font-medium shadow rounded bg-white"
                            @update:model-value="
                                (val) => {
                                    form.image = val
                                }
                            ">
                            <template #prepend>
                                <q-icon name="cloud_upload" />
                            </template>
                        </q-file>
                        <div class="my-4 w-full">
                            <button
                                v-ripple
                                :disabled="!image"
                                class="px-4 w-full mx-auto md:w-8/12 work py-3 block relative shadow-lg bg-primary rounded text-white font-medium"
                                @click="nextStep(toggleLoader)">
                                Proceed
                            </button>
                        </div>
                    </template>
                    <template v-if="currentStep === 2">
                        <div
                            class="border-dashed work bg-white border shadow-lg rounded-lg p-4">
                            <p class="font-medium text-center my-2">
                                Transaction Summary
                            </p>
                            <div class="grid divide-y">
                                <div class="py-3 border-dashed">
                                    <p class="uppercase work font-medium">
                                        Wallet Address
                                    </p>
                                    <p
                                        class="text-gray-900 font-light text-sm work">
                                        {{ selectedVendor.address }}
                                    </p>
                                </div>
                                <div class="py-3 border-dashed">
                                    <p class="uppercase work font-medium">
                                        Amount to receive
                                    </p>
                                    <p
                                        class="text-gray-900 font-light text-sm work">
                                        &#8358;{{ TOTAL_AMOUNT }}
                                    </p>
                                </div>
                                <div class="py-3 border-dashed">
                                    <p class="uppercase work font-medium">
                                        Processing Time
                                    </p>
                                    <p
                                        class="text-gray-900 font-light text-sm work">
                                        Usually within 10 Mins and may vary
                                    </p>
                                </div>
                                <div class="py-3 border-dashed">
                                    <p class="uppercase work font-medium">
                                        Account to credit
                                    </p>
                                    <!-- {{userBanks}} -->
                                    <p
                                        class="text-gray-900 font-light text-sm work">
                                        {{ userBanks[0].account_number }}
                                    </p>
                                    <p
                                        class="text-gray-900 font-light text-sm work">
                                        <span
                                            class="uppercase work font-medium"
                                            >{{
                                                userBanks[0].account_name
                                            }}</span
                                        >, {{ userBanks[0].bank_name }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="my-4 w-full">
                            <button
                                v-ripple
                                :disabled="form.processing"
                                class="px-4 w-full mx-auto md:w-8/12 work py-3 block relative shadow-lg bg-primary rounded text-white font-medium"
                                @click="nextStep(toggleLoader)">
                                Upload
                            </button>
                        </div>
                    </template>
                </template>
            </div>
        </div>
        <success-modal v-if="isUploadedSuccessfully"
            >Payment Proof</success-modal
        >
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout'
import { AssetsDropdown } from '../components/CryptoTradeComponents'
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue'
import SuccessModal from '@/components/SuccessModal.vue'
import { ref, computed, useForm, loader, stepsCrementer, watch } from '@/utils'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const props = defineProps({
    vendors: {
        type: Array,
        default: () => [],
    },
    userBanks: {
        type: Array,
        default: () => [],
    },
})

const { isLoading, toggleLoader } = loader()
const {nextStep, prevStep, currentStep} = stepsCrementer()

watch(currentStep, () => {
    if (currentStep.value === 2) {
        return submit()
    } return false
})
const isUploadedSuccessfully = ref(false)
const image = ref(null)
const preview = computed(() => {
    if (form.image) {
        return URL.createObjectURL(form.image)
    }
    return false
})

const form = useForm({
    amount: null,
    image: null,
})
const TOTAL_AMOUNT = computed(() => {
    return new Intl.NumberFormat('en-US').format(
        form.amount * (selectedVendor.value ? selectedVendor.value.rate : 0)
    )
})
const selectedVendor = ref(null)
const isSelectedVendor = (val) => {
    selectedVendor.value = props.vendors[val - 1]
}

const submit = () => {
    form.transform((data) => ({
        ...data,
    }))
        // eslint-disable-next-line no-undef
        .post(`/user/btc-transfer-proof-make/${selectedVendor.value.uuid}`, {
            onSuccess: () => {
                form.reset()
                // allImages.value = []
                isUploadedSuccessfully.value = ref(true)
                $q.notify({
                    type: 'positive',
                    message: 'GiftCard Uploaded',
                    position: 'top-right',
                })
            },
        })
}
</script>

<style lang="scss" scoped></style>
