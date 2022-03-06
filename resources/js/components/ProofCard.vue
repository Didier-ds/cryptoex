<template>
    <div id="proof-card" class="flex mb-2 p-ripple grey  p-4 border rounded items-center" >
        <div :class="proof.payment_proof.status === 'pending' ? 'text-yellow-500 border-yellow-500' : 'text-green-500 border-green-500'" class="flex justify-center h-10 w-10 items-center cursor-pointer mr-4 mr-2 border rounded-3xl "><i class="pi pi-arrow-down"></i></div>
        <div class="flex-grow">
            <div class="flex justify-between">
            <p class="text_status work capitalize font-semibold" >{{ proof.payment_proof.status }}</p>
            <p class="amount_text font-semibold" :class="proof.payment_proof.status === 'pending' ? 'text-yellow-500' : 'text-green-500'">{{ proof.payment_proof.amount }} BTC</p>
        </div>
        <div class="flex justify-between">
            <p class="data text-base capitalize text-gray-400">oct 2, 2020</p>
            <p class="amount_ngn text-base font-semibold">25,000 NGN</p>
        </div>
        </div>
    </div>
</template>
<script setup>
// export default {
//     name: "Proof Card",
//     props: ['proof']
// }

defineProps({
    proof : {
        type: Array,
        default: () => []
    }
})
</script>
<style lang="scss">
.p-ripple.grey .p-ink {
    background: #0d0d0d14;
}
</style>
