<template>
    <div>
        <div v-if="tablet" class="grid_section items-center p-2 my-2">
            <p class="work capitalize">{{ vendorName }}</p>
            <!-- <p class="type text-gray-600 work ">{{ type }}</p> -->
            <p class="amount ibm font-semibold">${{ amount }}</p>
            <!-- <div class="total font-semibold text-green-800">
                &#8358;{{ +amount * +rate }}
            </div> -->
            <div class="status">
                <q-badge :color="statusColor(status)">
                    {{ status }}
                </q-badge>
            </div>
            <p class="date work text-gray-600">{{ createdAt.slice(0, 10) }}</p>
        </div>
        <div
            v-else
            id="cardlet"
            class="bg-white mb-4 border rounded p-3 items-center">
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
                            {{ vendorName }}
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
    </div>
</template>
<script setup>
import { tablet, statusColor } from '@/utils'
defineProps({
    status: {
        type: String,
        default: 'failed',
    },
    vendorName: {
        type: String,
        default: '',
    },
    amount: {
        type: String,
        default: '0',
    },
    createdAt: {
        type: String,
        default: '',
    },
})
</script>
<style lang="scss" scoped>
.image {
    max-width: 2.5em;
}
</style>
