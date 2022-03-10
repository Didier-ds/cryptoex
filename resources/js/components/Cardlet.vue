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
            <div class="type ">{{ type }}</div>
            <div class="amount">${{ amount }} | <span class="rate text-cyan font-medium work">&#8358;{{ rate }}</span></div>
            <div class="total font-semibold text-green-800">&#8358;{{ +amount * +rate }}</div>
            <div class="status  flex items-center justify-center "><div class="border rounded-md p-1 px-2 flex items-center gap-2 justify-center bg-gray-50 rounded-lg"><ColorBall :status="status"/>{{ status }}</div></div>
            <div class="date">{{ createdAt.slice(0, 10) }}</div>
        </div>
        <div v-else id="cardlet" class="flex justify-between mb-2 border shadow-md rounded p-2  items-center">
            <div class="cardlet_property  flex items-center">
                <div class="cardlet_box image rounded-md"><img class="w-full" :src="'/images/cards/' + imgType + '.png'" alt=""></div>
                <div class="cardlet_details capitalize mx-4">
                    <p class="work font-medium capitalize">{{ name }} giftcard</p>
                    <p class="text-tiny work text-gray-600 font-medium">{{ createdAt.slice(0, 10) }}</p>
                </div>
            </div>
            <div class="cardlet_price text-right">
                <p class="font-medium work">${{ amount }}</p>
                <div class="status  flex items-center justify-center "><div class="border rounded-md p-0.5 px-1 flex items-center gap-2 text-xs font-medium work justify-center bg-gray-50 rounded-lg"><ColorBall :status="status" :size="'sm'"/>{{ status }}</div></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {tablet,ExactCardImg, computed} from '@/utils'
import ColorBall from '@/components/reusables_/ColorBall.vue'
const props = defineProps({
    status: {
        type: String,
        default: 'failed'
    }, 
    name: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    amount: {
        type: String,
        default: "0"
    },
    rate: {
        type: String,
        default: "0"
    },
    createdAt: {
        type: String,
        default: ''
    }
})
const imgType = computed(() => {return ExactCardImg(props.name)})
</script>
<style lang="scss" scoped>
.image {
    max-width: 2.5em;
}
</style>
