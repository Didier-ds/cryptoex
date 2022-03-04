<template>
    <main-layout>
        <div>
            <div class="flex flex-row justify-between items-center mx-4">
                <GoBack />
                <div class="">
                    <h2 class="text-lg work font-semibold capitalize p-ripple">
                        {{ name }} Card
                    </h2>
                </div>
            </div>
            <div class="upload_container md:grid grid-cols-2 grey">
                <!-- Card categories and amount section -->
                <div class="card_form_container flex flex-col">
                    <div class="w-11/12 sm:w-10/12 mx-auto">
                        <BigCard :img-type="imgType" :name="name" />
                        <div class="input_box my-2 flex flex-col">
                            <label
                                for="type"
                                class="text-base work font-medium pb-2">
                                Card Type
                            </label>
                            <div class="relative">
                                <div
                                    class="w-full border text-base work px-4 flex justify-between select-none py-3 capitalize rounded-md shadow outline-none outline-none">
                                    <p>select card type</p>
                                    <div>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
                                                fill="black" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="input_box my-2 flex flex-col">
                                <label
                                    for="amount"
                                    class="text-base work font-medium pb-2"
                                    >Amount</label
                                >
                                <input
                                    id="amount"
                                    v-model="amt"
                                    autocomplete="off"
                                    class="hover:ring-2 items-center w-full border-cyan-200 border text-base work px-4 py-3 rounded-md focus:border-cyan-500 focus:shadow-outline outline-none outline-none"
                                    type="text"
                                    placeholder="Enter Amount"
                                    @input="filter" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- //file upload section -->
                <div class="file_price_container flex flex-col">
                    <div class="w-11/12 sm:w-10/12 mx-auto">
                        <div class="my-4">
                            <span class="block work">You will receive</span>
                            <span class="font-bold text-green-800 ibm text-xl"
                                >&#8358;{{ 0.00 }}</span
                            >
                        </div>
                        <div class="input_box mx-auto my-2">
                            <label
                                for="comment"
                                class="text-base work font-medium"
                                >Comments</label
                            >
                            <input
                                id="comment"
                                autocomplete="off"
                                class="w-full border text-base work px-4 py-3 rounded-md focus:border-cyan-500 focus:shadow-outline outline-none outline-none"
                                type="text"
                                placeholder="Enter code if not clear"
                                @input="filter" />
                        </div>
                        <span class="block py-1 text-base work font-medium">
                            Upload Card or Receipt
                        </span>
                        <div>
                            <div
                                class="border-dashed my-4 px-4 py-6 rounded flex flex-col text-center justify-between items-center border-4">
                                <div class="items-center py-4">
                                    <img src="/img/proof.svg" class="mx-auto" />
                                    <p class="py-4 work">
                                        Kindly Upload a Picture of Your Giftcard
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout.vue'
import BigCard from '@/components/Big-Card.vue'
import { ref, computed, ExactCardImg } from '@/utils'
const name = window.location.pathname.split('/')[2]
const imgType = computed(() => {
    return ExactCardImg(name)
})
const amt = ref(null)
</script>

<style lang="scss" scoped></style>
