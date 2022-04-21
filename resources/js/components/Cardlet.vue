<template>
    <div>
        <div v-if="tablet" class="grid_section items-center p-2 my-2">
            <div class="image mx-auto">
                <img
                    class="w-full"
                    :src="'/images/cards/' + imgType + '.png'"
                    alt="" />
            </div>
            <div class="giftcard_name capitalize">{{ name }} giftcard</div>
            <div class="type">{{ type }}</div>
            <div class="amount">
                ${{ amount }} |
                <span class="rate text-cyan font-medium work"
                    >&#8358;{{ rate }}</span
                >
            </div>
            <div class="total font-semibold text-green-800">
                &#8358;{{ +amount * +rate }}
            </div>
            <div class="status flex items-center justify-center">
                <div
                    class="border rounded-md p-1 px-2 flex items-center gap-2 justify-center bg-gray-50 rounded-lg">
                    <ColorBall :status="status" />{{ status }}
                </div>
            </div>
            <div class="date">{{ createdAt.slice(0, 10) }}</div>
        </div>
        <div
            v-else
            id="cardlet"
            class=" bg-white mb-4 border shadow-md rounded p-3 items-center">
            <div class="cardlet_property flex items-center">
                <div class="cardlet_box image rounded-md">
                    <img
                        class="w-full"
                        :src="'/images/cards/' + imgType + '.png'"
                        alt="" />
                </div>
                <div class="flex-1 ml-4">
                    <div class="cardlet_details flex justify-between mb-1 items-center capitalize ">
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
    </div>
</template>
<script setup>
import { tablet, ExactCardImg, computed, statusColor } from '@/utils'
import ColorBall from '@/components/reusables_/ColorBall.vue'
const props = defineProps({
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
const imgType = computed(() => {
    return ExactCardImg(props.name)
})
</script>
<style lang="scss" scoped>
.image {
    max-width: 2.5em;
}
</style>
