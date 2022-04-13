<template>
    <main-layout>
        <div id="Transactions-page" class="">
            <div class="flex flex-row justify-between items-center px-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <div class="">
                    <h2 class="text-lg work font-semibold p-ripple">
                        Transactions
                    </h2>
                </div>
            </div>
            <div class="mx-4 md:grid gap-4 grid-cols-3 px-4">
                <StatusBox
                    v-for="(status, index) in statuses"
                    :key="index"
                    :status="status.status"
                    :label="status.label"
                    :total="status.total" />
            </div>
            <div class="py-10 p-4">
                <div id="giftcards">
                    <h2 class="font-bold work big mb-2">
                        GIFTCARD TRANSACTIONS
                    </h2>
                    <div
                        class="max-w-4xl mx-auto"
                        :class="{
                            'border p-2 shadow-lg bg-white rounded': tablet,
                        }">
                        <div
                            v-if="tablet"
                            class="grid_section border-b py-4 p-2">
                            <div></div>
                            <div>Giftcard</div>
                            <div>Type</div>
                            <div>Amount | <span>rate</span></div>
                            <div>NGN</div>
                            <div>Status</div>
                            <div>Date</div>
                        </div>
                        <template v-if="!!cardlets.length">
                            <Cardlet
                                v-for="(cardlet, index) in cardlets"
                                :key="index"
                                :status="cardlet.status"
                                :name="cardlet.name"
                                :amount="cardlet.amount"
                                :rate="cardlet.rate"
                                :created-at="cardlet.created_at"
                                :type="cardlet.type" />
                        </template>

                        <template v-else>
                            <Empty>You Have No Gift Card Transations</Empty>
                        </template>
                    </div>
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
import MainLayout from '@/Layouts/MainLayout'
import StatusBox from '@/components/StatusBox.vue'
// import ProofCard from '@/components/ProofCard.vue'
import Cardlet from '@/components/Cardlet.vue'
import Empty from '@/components/reusables_/Empty.vue'
import { tablet, computed } from '@/utils'

const props = defineProps({
    cardlets: {
        type: Array,
        default: () => [],
    },
})
const statuses = [
    {
        label: 'Successful',
        status: 'success',
        total: computed(() => {
            return props.cardlets.filter((a) => a.status === 'success').length
        }),
    },
    {
        label: 'Failed',
        status: 'failed',
        total: computed(() => {
            return props.cardlets.filter((a) => a.status === 'failed').length
        }),
    },
    {
        label: 'Pending',
        status: 'pending',
        total: computed(() => {
            return props.cardlets.filter((a) => a.status === 'pending').length
        }),
    },
]
</script>

<style lang="scss">
.grid_section {
    display: grid;
    grid-template-columns: 0.3fr 1fr 1fr 1fr 0.5fr 1fr 0.5fr;
    text-align: center;

    div {
        font-weight: 500;
        text-transform: capitalize;
        font-family: 'Work Sans', sans-serif;
    }
}
</style>
