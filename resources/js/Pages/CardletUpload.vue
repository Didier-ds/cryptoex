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
                            <select id="category" v-model="form.type" class="p-2 rounded shadow border bg-white" name="category">
                                <option disabled value="">Please select Category</option>
                               <option v-for="category in giftcards" :key="category" :value="category.type">{{category.type}}</option> 
                            </select>
                            <div class="input_box my-2 flex flex-col">
                                <label
                                    for="amount"
                                    class="text-base work font-medium pb-2"
                                    >Amount</label
                                >
                                <input
                                    id="amount"
                                    v-model="form.amount"
                                    autocomplete="off"
                                    class="hover:ring-2 items-center w-full border-cyan-200 border text-base work px-4 py-3 rounded-md focus:border-cyan-500 focus:shadow-outline outline-none outline-none"
                                    type="number"
                                    placeholder="Enter Amount"
                                     />
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
                                >&#8358;{{ AMOUNT_TO_RECEIVE }}</span
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
                                v-model="form.comment"
                                autocomplete="off"
                                class="w-full border text-base work px-4 py-3 rounded-md focus:border-cyan-500 focus:shadow-outline outline-none outline-none"
                                type="text"
                                placeholder="Enter code if not clear" />
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
import { computed, ExactCardImg, useForm } from '@/utils'
const name = window.location.pathname.split('/')[2]
const imgType = computed(() => {
    return ExactCardImg(name)
})
const form = useForm({
    amount: 0,
    type: '',
    comment: ''
})

const AMOUNT_TO_RECEIVE = computed(() => {
    const selectedCard = props.giftcards.find(card => card.type === form.type)
    return selectedCard ? selectedCard.rate * form.amount : 0
    // return selectedCard ? selectedCard.rate * form.amount : 0 
})
// const amt = ref(null)
const props = defineProps({
    giftcards: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="scss" scoped></style>
