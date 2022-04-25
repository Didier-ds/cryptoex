<template>
    <transactions-layout>
        <div
            class="my-2 proofs"
            :class="{
                'border p-2 shadow-lg bg-white rounded': tablet,
            }">
            <div v-if="tablet" class="grid_section border-b py-4 p-2">
                <div>Vendor Name</div>
                <div>Amount</div>
                <div>NGN</div>
                <div>Status</div>
                <div>Date</div>
            </div>
            <template v-if="!!proofs.length">
                <Proof
                    v-for="(proof, index) in proofs"
                    :key="index"
                    :status="proof.status"
                    :vendor-name="proof.vendor_name"
                    :amount="proof.amount"
                    :created-at="proof.created_at" />
            </template>

            <template v-else>
                <Empty>You Have No Bitcoin Transations</Empty>
            </template>
        </div>
    </transactions-layout>
</template>
<script setup>
import TransactionsLayout from '@/Layouts/TransactionsLayout'
import Proof from '@/components/Transactions/Proof.vue'
import Empty from '@/components/reusables_/Empty.vue'
import { tablet } from '@/utils'

defineProps({
    proofs: {
        type: Array,
        default: () => [],
    },
})
</script>

<style lang="scss" scoped>
.proofs .grid_section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
    text-align: center;

    div {
        font-weight: 500;
        text-transform: capitalize;
        font-family: 'Work Sans', sans-serif;
    }
}
</style>
