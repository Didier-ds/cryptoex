<template>
    <main-layout>
        <div class="px-2">
            <div class="flex flex-row justify-between items-center mx-4">
                <!-- <div class="my-1">
                    <GoBack />
                </div> -->
                <div class="">
                    <h2 class="text-lg work font-semibold p-ripple">
                        Bank Details
                    </h2>
                </div>
            </div>
            <div class="flex items-center justify-center my-10">
                <form
                    class="my-4 box_container bg-white max-w-xl mx-auto p-6 shadow-lg rounded border"
                    @submit.prevent="submit">
                    <h2 class="work font-bold text-lg">
                        Add Account Information
                    </h2>
                    <div>
                        <div class="flex py-4 mb-2">
                            <div class="w-6 mr-1 h-2 bg-cyan"></div>
                            <div class="w-6 mr-1 h-2 bg-cyan-200"></div>
                            <div class="w-6 mr-1 h-2 bg-cyan-200"></div>
                        </div>
                        <jet-validation-errors class="mb-4" />
                        <div class="input_card_container">
                            <div class="input_box">
                                <label class="font-medium">Bank Name</label>
                                <select
                                    v-model="form.bank_name"
                                    type="text"
                                    class="p-2 w-full md:w-10/12 focus:outline-none rounded border bg-white my-2 focus:border-cyan focus:shadow-md" >
                                    <option
                                        v-for="bank in banks"
                                        :key="bank"
                                        :value="bank.bankCode">
                                        {{ bank.bankName }}
                                    </option>   
                                </select>
                            </div>
                            <div class="input_box">
                                <label class="font-medium"
                                    >Account Number</label
                                >
                                <input
                                    v-model="form.account_number"
                                    type="tel"
                                    class="p-2 w-full md:w-10/12 focus:outline-none rounded border bg-white my-2 focus:border-cyan focus:shadow-md" />
                            </div>
                            <div class="input_box">
                                <label class="font-medium">Account Name</label>
                                <input
                                    v-model="form.account_name"
                                    type="text"
                                    class="p-2 w-full md:w-10/12 focus:outline-none rounded border bg-white my-2 focus:border-cyan focus:shadow-md" />
                            </div>
                            <!-- <div class="input_box">
                                <label class="font-medium">Phone</label>
                                <input type="text" v-model=""/>
                            </div> -->
                        </div>
                        <div class="float-right">
                            <button
                                v-ripple
                                class="px-4 py-2 relative shadow-lg bg-cyan rounded text-white font-medium">
                                Verify Details
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout.vue'
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue'
import axios from 'axios'
import { useForm, ref, onMounted } from '@/utils'
const form = useForm({
    bank_name: '',
    account_number: '',
    account_name: 'Didier Dodji Senou',
})
const banks = ref([])
var array = [1, 2, 3];
// Store after JSON stringifying (is this a verb?) it
localStorage.setItem('myArray', JSON.stringify(array));

// Get an array from local storage

// Retrieve the array from local storage
var array = localStorage.getItem('myArray');
// Parse it to something usable in js
array = JSON.parse(array);
const getBanks = () => {
    const storedBanks = JSON.parse(localStorage.getItem('banks'))
    if(!storedBanks){
        axios.get('/api/v1/banks').then((res) => {
            banks.value = res.data
            localStorage.setItem('banks', JSON.stringify(res.data));
        })
    } else banks.value = storedBanks;
}
onMounted(() => {
    getBanks()
})
const prev_url = new URLSearchParams(window.location.search).get('prev_url')

const submit = () => {
    form.transform((data) => ({
        ...data,
    }))
        // eslint-disable-next-line no-undef
        .post(`/user/bank-account?prev_url=${prev_url}`, {
            onSuccess: () => {
                form.reset()
            },
        })
}
</script>

<style lang="scss" scoped>
.box_container {
    width: 100%;
    font-family: 'Work Sans', sans-serif;
}
.input_card_container {
    margin: 1em 0;
    .input_box {
        margin-bottom: 1em;
        label {
            display: block;
            margin: 0.4em 0;
            font-medium: 500;
        }
        p {
            width: 100%;
            // text-transform: capitalize;
            // border: .5px solid grey;
        }
    }
}
</style>
