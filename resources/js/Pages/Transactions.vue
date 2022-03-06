<template>
    <main-layout>
        <div id="Transactions-page" class="flex-grow md:py-2 py-10 px-6 md:px-2">
            <div class="flex flex-row justify-between items-center mx-4">
                <div class=" my-1">
                    <GoBack />    
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
