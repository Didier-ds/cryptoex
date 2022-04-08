<template>
    <div
                                class="border-dashed work bg-white border shadow-lg rounded-lg p-4">
                                <p class="font-medium text-center my-2">
                                    Transaction Summary
                                </p>
                                <div class="grid divide-y border-dashed">
                                    <div
                                        class="flex justify-between py-3 items-center">
                                        <p class="text-gray-600">Giftcard</p>
                                        <p class="font-medium capitalize">
                                            {{ cardName }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex justify-between py-3 border-dashed items-center">
                                        <p class="text-gray-600">Currency</p>
                                        <p
                                            class="font-medium flex items-center uppercase">
                                            <img
                                                :src="currencyImageUrl"
                                                class="px-2" />{{
                                                currencyType
                                            }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex justify-between py-3 border-dashed items-center">
                                        <p class="text-gray-600">Card type</p>
                                        <p class="font-medium flex uppercase">
                                            {{ cardType }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex justify-between py-3 border-dashed items-center">
                                        <p class="text-gray-600">
                                            Processing Time
                                        </p>
                                        <p class="font-medium flex uppercase">
                                            Usually within 10 Mins and may vary
                                        </p>
                                    </div>
                                    <div
                                        class="flex justify-between py-3 border-dashed items-center">
                                        <p class="text-gray-600">Card Price</p>
                                        <p class="font-medium flex uppercase">
                                            ${{ price }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex justify-between py-3 border-dashed items-center">
                                        <p class="text-gray-600">Rate</p>
                                        <p class="font-medium flex uppercase">
                                            &#8358;{{ rate }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex justify-between py-3 border-dashed items-center">
                                        <p class="text-gray-600">Amount</p>
                                        <p
                                            class="font-bold text-base flex uppercase text-green-800 ibm">
                                            &#8358;{{totalAmount}}
                                        </p>
                                    </div>
                                    <div class="py-3 border-dashed">
                                        <p class="text-gray-600 mb-2">
                                            Bank Account
                                        </p>
                                        <div
                                            class="rounded work flex bg-gray-50 rounded p-2">
                                            <div class="m-4">
                                                <q-icon
                                                    name="account_balance"
                                                    style="
                                                        color: #ccc;
                                                        font-size: 2em;
                                                    " />
                                            </div>
                                            <div class="pl-2">
                                                <p class="font-medium">
                                                    {{ accName }}
                                                </p>
                                                <p class="">
                                                    {{
                                                        accNumber
                                                    }}
                                                </p>
                                                <p
                                                    class="text-sm text-gray-700">
                                                    {{ bankName }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
</template>

<script setup>
defineProps({
    cardName: {
        type: String,
        default: 'cardname'
    },
    bankName: {
        type: String,
        default: 'bankname'
    },
    accName: {
        type: String,
        default: '-- -- --'
    },
    accNumber: {
        type: Number,
        default: 0
    },
    currencyImageUrl: {
        type: String,
        default: ''
    },
    currencyType: {
        type: String,
        default: ''
    },
    totalAmount: {
        type: Number,
        default: 0
    },
    rate: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    cardType: {
        type: String,
        default: 'card type'
    },
})
</script>

<style lang="scss" scoped>

</style>