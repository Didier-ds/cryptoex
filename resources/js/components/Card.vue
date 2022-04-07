<template>
    <inertia-link
        class="m-4"
        :href="role ? '/upload/' + uuid : 'giftcard/category/' + uuid">
        <div
            class="card bg-white flex-col shadow flex justify-center items-center 0 p-2 w-full lg:w-full rounded-md">
            <div class="card-logo w-8 my-2">
                <!-- <img class="w-full" :src="filename" alt="" /> -->
                <q-img :src="filename">
                    <template v-slot:loading>
                        <q-spinner-tail color="secondary" size="1rem" />
                    </template>
                </q-img>
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
    },
    filename: {
        type: String,
        default: '',
    },
    uuid: {
        type: String,
        default: '',
    },
})
</script>
<style lang="scss" scoped>
.card {
    min-height: 8em;
}
</style>
