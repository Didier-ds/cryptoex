<template>
    <main-layout>
        <div id="Giftcard-page" class="flex-grow px-2">
            <div class="flex flex-row justify-between items-center mx-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <div class="">
                    <h2 class="text-lg work font-semibold p-ripple">
                        Giftcard
                    </h2>
                </div>
            </div>

            <div
                v-if="skeleton"
                class="card-container lg:grid grid-cols-3 gap-4 sm:grid-cols-2 flex flex-wrap"></div>
            <div
                class="card-container grid sm:grid-cols-4 grid-cols-2 grid flex-wrap">
                <Card
                    v-for="(card, index) in giftcards"
                    :key="index"
                    :name="card.name"
                    :filename="card.filename"
                    :uuid="card.uuid"
                    :index="index" />
            </div>
        </div>
        <!-- {{ newGiftcards }} -->
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout.vue'
import Card from '@/components/Card.vue'
// import { computed } from '@/utils'
defineProps({
    giftcards: {
        type: Array,
        default: () => [],
    },
})
// const newGiftcards = computed(() => {
//     let i
//     const giftcards = props.giftcards.map((any) => any.name)
//     const newArr = []
//     const setObj = {}
//     for (i = 0; i < giftcards.length; i += 1) {
//         if (!Object.prototype.hasOwnProperty.call(setObj, giftcards[i])) {
//             newArr.push(giftcards[i])
//             setObj[giftcards[i]] = true
//         }
//     }
//     return newArr
// })
</script>

<style lang="scss" scoped></style>
