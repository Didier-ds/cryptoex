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
            <div class=" mx-auto md:grid gap-4 grid-cols-3">
                <StatusBox v-for="(status, index) in statuses" :key="index" :status = status.status :label = status.label :total = status.total />
            </div>
            <div class="my-10 sm:my-4  mx-4 ">
                <div id="giftcards">
                    <h2 class="font-bold work big mb-2">GIFTCARD TRANSACTIONS</h2>
                        <template v-if="!!cardlets.length">
                            <Cardlet v-for="(cardlet, index) in cardlets" :key="index" />
                        </template>
                        
                        <template v-else>
                            <Empty>You Have No Gift Card Transations</Empty>
                        </template>
                </div>
                <!-- <div id="bitcoins">
                    <h2 class="font-bold work big mb-2 ">BITCOIN TRANSACTIONS</h2>
                        <template v-if="proofs.length">
                            <ProofCard v-for="(proof, index) in proofs" :key="index" :proof="proof"/>
                        </template>
                        
                        <template v-else>
                            <Empty>You Have No Bitcoin Transations</Empty>
                        </template>
                        
                </div> -->
            </div>
        </div>
    </main-layout>
</template>
<script setup>
import MainLayout from '@/Layouts/MainLayout';
import StatusBox from '@/components/StatusBox.vue'
import ProofCard from '@/components/ProofCard.vue'
import Cardlet from '@/components/Cardlet.vue'
import Empty from '@/components/reusables_/Empty.vue'
import {ref, computed} from '@/utils'

const props = defineProps({
    cardlets: {
        type: Array,
        default: () => []
    }
})
const statuses = [{
    label: 'Successful',
    status: 'success',
    total: computed(() => {
        return props.cardlets.filter(a => a.status === 'successful').length
    })
}, {
    label: 'Failed',
    status: 'failed',
    total: computed(() => {
        return props.cardlets.filter(a => a.status === 'failed').length
    })
}, {
    label: 'Pending',
    status: 'pending',
    total: computed(() => {
        return props.cardlets.filter(a => a.status === 'pending').length
    })
}]
const proofs  = ref([])
// const cardlets = ref([])
const myProofs = () => {
            // axios.get('users/proofs').then(response => this.proofs = response.data.data).catch(err => console.log(err))
        }
   
</script>
