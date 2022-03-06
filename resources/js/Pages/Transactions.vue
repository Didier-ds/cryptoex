<template>
    <main-layout>
        <div id="Transactions-page" class="flex-grow md:py-2 py-10 px-6 md:px-2">
            <div class="flex flex-row justify-between items-center mx-4">
                <div class=" my-1">
                    <a href="#" class="py-2 text-gray-600 text-tiny flex items-center font-medium uppercase "><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.707 18.707C11.5195 18.8946 11.2652 19 11 19C10.7349 19 10.4806 18.8946 10.293 18.707L4.29303 12.7016C4.10556 12.5139 4.00024 12.2594 4.00024 11.994C4.00024 11.7286 4.10556 11.474 4.29303 11.2863L10.293 5.28096C10.4816 5.09864 10.7342 4.99776 10.9964 5.00004C11.2586 5.00232 11.5094 5.10758 11.6948 5.29316C11.8803 5.47873 11.9854 5.72977 11.9877 5.9922C11.99 6.25463 11.8892 6.50746 11.707 6.69623L7.41403 10.9931H19C19.2652 10.9931 19.5196 11.0985 19.7071 11.2862C19.8947 11.4739 20 11.7285 20 11.994C20 12.2594 19.8947 12.514 19.7071 12.7017C19.5196 12.8894 19.2652 12.9949 19 12.9949H7.41403L11.707 17.2917C11.8945 17.4794 11.9998 17.7339 11.9998 17.9993C11.9998 18.2647 11.8945 18.5193 11.707 18.707Z" fill="#192434"/>
                    </svg>
                    </span> <span class="font-bold sm:hidden px-1">Back</span>  </a>
                </div>
                <div class="">
                    <h2 class="text-lg work font-semibold p-ripple" >Transactions</h2>
                </div>
                
            
            </div>
            <div class="my-10 sm:my-4 lg:block mx-4 grid gap-4 grid-cols-2">
                <div id="giftcards">
                    <h2 class="font-bold work big mb-2">GIFTCARD TRANSACTIONS</h2>
                
                        <Empty>You Have No Gift Card Transations</Empty>
                </div>
                <div id="bitcoins">
                    <h2 class="font-bold work big mb-2 ">BITCOIN TRANSACTIONS</h2>
                        <template v-if="proofs.length > 0">
                            <ProofCard :proof="proof" v-for="(proof, index) in proofs" :key="index"/>
                        </template>
                        
                        <template v-else>
                            <Empty>You Have No Bitcoin Transations</Empty>
                        </template>
                        
                        <!-- <div id="proof-card" class="flex mb-2 p-2 border rounded items-center">
                            <div  class="flex justify-center h-8 w-8 items-center cursor-pointer mr-2 rounded-2xl bg-green-400 text-white"><i class="pi pi-arrow-down"></i></div>
                            <div class="flex-grow">
                                <div class="flex justify-between">
                                <p class="text_status font-semibold">Successful</p>
                                <p class="amount_text text-green-400 font-bold">0.00056 BTC</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="data text-sm text-gray-400">oct 2, 2020</p>
                                <p class="amount_ngn text-sm font-semibold">25,000 NGN</p>
                            </div>
                            </div>
                        </div> -->
                </div>
            </div>
        </div>
    </main-layout>
</template>
<script setup>
import MainLayout from '@/Layouts/MainLayout';
import ProofCard from '@/components/ProofCard.vue'
import Empty from '@/components/reusables_/Empty.vue'
import {ref} from '@/utils'
const proofs  = ref([])
const cardlets = ref([])
 
const myProofs = () => {
            // axios.get('users/proofs').then(response => this.proofs = response.data.data).catch(err => console.log(err))
        }
   
</script>
