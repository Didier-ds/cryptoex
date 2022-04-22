<template>
    <transactions-layout>
        <div
                        class="my-2 giftcards"
                        :class="{
                            'border p-2 shadow-lg bg-white rounded': tablet,
                        }">
                        <div
                            v-if="tablet"
                            class=" grid_section border-b py-4 p-2">
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
                                :tablet="tablet"
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
    </transactions-layout>
</template>
<script setup>
import TransactionsLayout from '@/Layouts/TransactionsLayout'
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

</script>

<style lang="scss">
.giftcards .grid_section {
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
