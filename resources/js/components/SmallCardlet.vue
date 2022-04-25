<template>
    <div id="cardlet" class="bg-white mb-4 border rounded p-3 items-center">
        <div class="cardlet_property flex items-center">
            <div class="cardlet_box image rounded-md">
                <img
                    class="w-full"
                    :src="'/images/cards/' + imgType + '.png'"
                    alt="" />
            </div>
            <div class="flex-1 ml-4">
                <div
                    class="cardlet_details flex justify-between mb-1 items-center capitalize">
                    <p class="work font-medium capitalize">
                        {{ name }} giftcard
                    </p>
                    <p class="font-bold work ibm">${{ amount }}</p>
                </div>
                <div class="status flex items-center justify-between">
                    <p class="text-tiny work text-gray-600 font-medium">
                        {{ createdAt.slice(0, 10) }}
                    </p>
                    <q-badge :color="statusColor(status)">
                        {{ status }}
                    </q-badge>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    status: {
        type: String,
        default: 'failed',
    },
    name: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: '',
    },
    amount: {
        type: String,
        default: '0',
    },
    rate: {
        type: String,
        default: '0',
    },
    createdAt: {
        type: String,
        default: '',
    },
})
</script>

<style lang="scss" scoped></style>
