<template>
    <main-layout>
        <div id="Trade_Bitcoin_Page ">
            <div class="flex flex-row justify-between items-center px-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <div class="">
                    <h2 class="text-lg work font-semibold p-ripple">
                        Trade Bitcoin
                    </h2>
                </div>
            </div>
            <div class="max-w-lg mx-auto p-4">
                <div class="flex py-4 mb-2">
                    <div class="w-6 mr-1 h-2 bg-primary"></div>
                    <div class="w-6 mr-1 h-2 bg-cyan-200"></div>
                    <div class="w-6 mr-1 h-2 bg-cyan-200"></div>
                </div>
                <!-- {{selectedVendor}} -->
                <template v-if="currentStep === 0">
                    <div class="mb-4">
                        <label for="assets" class="work font-medium leading-8"
                            >Wallet type</label
                        >
                        <AssetsDropdown
                            @is-selected-vendor="isSelectedVendor" />
                    </div>
                    <div class="mb-4">
                        <label for="assets" class="work font-medium leading-8"
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
                            &#8358;{{ TOTAL_AMOUNT
                            }}
                        </p>
                    </div>
                    <div class="my-4 w-full">
                        <button
                            v-ripple
                            class="px-4 w-full mx-auto md:w-8/12 work py-3 block relative shadow-lg bg-primary rounded text-white font-medium"
                            @click="nextStep">
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
                    <div v-if="preview" class="w-16 h-16 m-4 rounded overflow-hidden ">
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
                            @click="nextStep">
                            Proceed
                        </button>
                    </div>
                </template>
                <template v-if="currentStep === 2">
                    <div class=" border-dashed work bg-white border shadow-lg rounded-lg p-4">
                        <p class="font-medium text-center my-2">Transaction Summary</p>
                        <div class="grid divide-y">
                            <div class="py-3 border-dashed">
                                <p class="uppercase work font-medium">Wallet Address</p>
                                <p class="text-gray-900 font-light text-sm work">{{selectedVendor.address}}</p>
                            </div>
                            <div class="py-3 border-dashed">
                                <p class="uppercase work font-medium">Amount to receive</p>
                                <p class="text-gray-900 font-light text-sm work">&#8358;{{TOTAL_AMOUNT}}</p>
                            </div>
                            <div class="py-3 border-dashed ">
                                <p class="uppercase work font-medium">Processing Time</p>
                                <p class="text-gray-900 font-light text-sm work ">
                                    Usually within 10 Mins and may vary
                                </p>
                            </div>
                            <div class="py-3 border-dashed">
                                <p class="uppercase work font-medium">Account to credit</p>
                                <!-- {{userBanks}} -->
                                <p class="text-gray-900 font-light text-sm work">{{userBanks[0].account_number}}</p>
                                <p class="text-gray-900 font-light text-sm work"><span class="uppercase work font-medium">{{ userBanks[0].account_name }}</span>, {{ userBanks[0].bank_name }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="my-4 w-full">
                        <button
                            v-ripple
                            class="px-4 w-full mx-auto md:w-8/12 work py-3 block relative shadow-lg bg-primary rounded text-white font-medium"
                            @click="nextStep">
                            Upload
                        </button>
                    </div>
                </template>
            </div>
        </div>
                <success-modal v-if="isUploadedSuccessfully">Payment Proof</success-modal>
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout'
import { AssetsDropdown } from '../components/CryptoTradeComponents'
import SuccessModal from '@/components/SuccessModal.vue'
import { ref, computed, useForm } from '@/utils'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const props = defineProps({
    vendors: {
        type: Array,
        default: () => [],
    },
    userBanks: {
        type: Array,
        default: () => []
    }
})
const isUploadedSuccessfully = ref(false)
const image = ref(null)
const preview = computed(() => {
    if(form.image) {
        return URL.createObjectURL(form.image)
    } return false
})
const currentStep = ref(0)
const nextStep = () => {
    if(currentStep.value === 2) {
        submit()
    } else currentStep.value++
}
const form = useForm({
    amount: null,
    image: null,
})
const TOTAL_AMOUNT = computed(() => {
    return new Intl.NumberFormat('en-US').format(form.amount * (selectedVendor.value ? selectedVendor.value.rate : 0))

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
            }
        })
}
</script>

<style lang="scss" scoped></style>
