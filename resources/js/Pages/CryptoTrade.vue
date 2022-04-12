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
            <div class="max-w-lg mx-auto p-4 ">
                <div class="flex py-4 mb-2">
                    <div class="w-6 mr-1 h-2 bg-primary"></div>
                    <div class="w-6 mr-1 h-2 bg-cyan-200"></div>
                    <div class="w-6 mr-1 h-2 bg-cyan-200"></div>
                </div>
                {{selectedVendor}}
                <div class="mb-4">
                    <label for="assets" class="work font-medium leading-8">Wallet type</label>
                    <AssetsDropdown @is-selected-vendor="isSelectedVendor" />
                </div>
                 <div class="mb-4">
                    <label for="assets" class="work font-medium leading-8">Amount (in USD)</label>
                    <input type="number" class="w-full py-3 pl-3 pr-10 text-left bg-white rounded border shadow cursor-default focus:outline-none focus-visible:ring-1 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-300 focus-visible:ring-offset-2 focus-visible:border-cyan sm:text-sm"/>
                </div>
                <div class="text-center">
                    <p class="font-medium work">
                        We will Pay You
                    </p>
                    <p
                        class="font-bold leading-loose text-green-800 ibm text-2xl">
                        &#8358;{{
                            new Intl.NumberFormat(
                                'en-US'
                            ).format(0)
                        }}
                    </p>
                </div>
                <div class="my-4 w-full">
                    <button
                        v-ripple
                        class="px-4 w-full mx-auto md:w-8/12 work py-3 block relative shadow-lg bg-primary rounded text-white font-medium"
                        @click="nextStep">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout'
import { AssetsDropdown } from "../components/CryptoTradeComponents";
import {ref} from '@/utils';
const props = defineProps({
    vendors : {
        type: Array,
        default: () => []
    }
})
const selectedVendor = ref(null);
const isSelectedVendor = (val) => {
    selectedVendor.value = props.vendors[val - 1]
}
</script>

<style lang="scss" scoped>

</style>