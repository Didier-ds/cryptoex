<template>
    <inertia-link class="m-4" :href="role ? '/upload/' + name : 'giftcard/category/' + name">
        <div
            class="card hover:shadow-lg border border-gray-300 justify-center items-center 0 fade-in p-4 w-full lg:w-full bg-white rounded-md"
            :style="{ '--order': index }">
            <div class="card-logo w-8 my-3">
                <img
                    class="w-full"
                    :src="'/images/cards/' + imgType + '.png'"
                    alt="" />
            </div>
            <div class="card-details text-center mx-2 text-white">
                <p
                    class="relative tracking-wider capitalize work text-gray-800 font-medium">
                    {{ name }}
                </p>
            </div>
        </div>
    </inertia-link>
</template>
<script setup>
import { ExactCardImg } from '@/utils/cards'
import { computed, usePage } from '@/utils'

// const  toggleSide = (any) => {
//     console.log("me" + any);
//     this.$emit("toggleSide", any);
// }
const imgType = computed(() => {
    return ExactCardImg(props.name)
})
const role = computed(() => {
    return usePage().props.value.user.roles ? false : true
})
const props = defineProps({
    name: {
        type: String,
        default: '',
    },
    index: {
        type: Number,
        default: 0,
    }
    
})
</script>
<style lang="scss" scoped></style>
