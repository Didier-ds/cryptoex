<template>
    <main-layout>
        <div class="px-2">
            <div class="flex flex-row justify-between items-center mx-4">
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
                                    v-model="credentials.bankCode"
                                    type="text"
                                    class="p-2 w-full md:w-10/12 focus:outline-none rounded border bg-white my-2 focus:border-cyan focus:shadow-md" >
                                    <option
                                        v-for="bank in banks"
                                        :key="bank"
                                        :value="bank.bankCode">
                                        {{ bank.bankName }}
                                    </option>   
                                </select>
                                <p v-if="isLoading" class="text-xs text-right -mt-1 work">Hold On, Getting Banks...</p>
                            </div>
                            <div class="input_box">
                                <label class="font-medium"
                                    >Account Number</label
                                >
                                <input
                                    v-model="credentials.accountNumber"
                                    type="tel"
                                    class="p-2 w-full md:w-10/12 focus:outline-none rounded border bg-white my-2 focus:border-cyan focus:shadow-md" />
                                    <div
                                        v-if="v$.accountNumber.$error"
                                        class="text-red-600 work text-xs pt-1">
                                        Account Number field is required.
                                    </div>
                            </div>
                            <div class="input_box">
                                <label class="font-medium">Account Name</label>
                                <input
                                    v-model="form.account_name"
                                    type="text"
                                    disabled
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
                                type="submit"
                                class="px-4 py-2 relative shadow-lg bg-cyan rounded text-white font-medium">
                                Submit
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
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'

import axios from 'axios'
import {watchEffect} from 'vue'
import { useForm, ref, reactive, watch, onMounted, loader } from '@/utils'
const credentials = reactive({
        bankCode: '',
        accountNumber: '',
        secretKey:process.env.MIX_WALLETS_AFRICA_SECRET_KEY
})

const rules = {
    bankCode: { required }, // Matches state.firstName
    accountNumber: { required, minLength:minLength(10), maxLength:maxLength(10) },
}
const v$ = useVuelidate(rules, credentials)
const form = useForm({
    account_name: null,
    bank_name: null,
    account_number: null
})

// watch when user selects banks option
watch(() => credentials.bankCode, () => {
    // finds the bank name of the selected bank from the banks 
    form.bank_name = banks.value.find(bank => credentials.bankCode === bank.bankCode).bankName
})
// watch when user selects banks option
watch([() => credentials.bankCode, () => credentials.accountNumber], () => {
    verifyDetails()
})
const banks = ref([])
const {isLoading, toggleLoader} = loader()
const getBanks = async () => {
    toggleLoader()
        const storedBanks = JSON.parse(localStorage.getItem('banks'))
        if(!storedBanks){
           await axios.get('/api/v1/banks').then((res) => {
                banks.value = res.data
                localStorage.setItem('banks', JSON.stringify(res.data));
            })
        } else banks.value = storedBanks;
    toggleLoader()
}

const verifyDetails = async () => {
    const isFormCorrect = await v$.value.$validate()
    if (isFormCorrect)  {
            axios.post('/api/v1/verify/bank', credentials).then(
                res => {
                    console.log(res)
                    const { accountName, accountNumber } = res.data
                    form.account_number = accountNumber
                    form.account_name = accountName
                }
            ).catch()
        }
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

// watchEffect(() => {
//   verifyDetails()
// });
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
