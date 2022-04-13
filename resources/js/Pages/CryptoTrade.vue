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
                            &#8358;{{
                                new Intl.NumberFormat('en-US').format(
                                    TOTAL_AMOUNT
                                )
                            }}
                        </p>
                    </div>
                    <div class="my-4 w-full">
                        <button
                            v-ripple
                            class="px-4 w-full mx-auto md:w-8/12 work py-3 block relative shadow-lg bg-primary rounded text-white font-medium"
                            @click="currentStep++">
                            Confirm
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
                    <div v-if="preview" class="w-16 h-16 my-4 rounded overflow-hidden ">
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
                </template>
            </div>
        </div>
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout'
import { AssetsDropdown } from '../components/CryptoTradeComponents'
import { ref, computed, useForm } from '@/utils'
const props = defineProps({
    vendors: {
        type: Array,
        default: () => [],
    },
})
const image = ref(null)
const preview = computed(() => {
    if(form.image) {
        return URL.createObjectURL(form.image)
    } return false
})
const currentStep = ref(0)

const form = useForm({
    amount: 0,
    image: null,
})
const TOTAL_AMOUNT = computed(() => {
    return form.amount * (selectedVendor.value ? selectedVendor.value.rate : 0)
})
const selectedVendor = ref(null)
const isSelectedVendor = (val) => {
    selectedVendor.value = props.vendors[val - 1]
}
</script>

<style lang="scss" scoped></style>
