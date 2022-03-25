<template>
    <admin-layout>
        <div id="Giftcard-page" class="flex-grow px-2">
            <div class="flex flex-row justify-between items-center mx-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <inertia-link
                    :href="route('cards.create')"
                    class="flex-0 items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Create Giftcard
                </inertia-link>
            </div>
            <div class="">
                <!-- <input
                    id="input1"
                    autocomplete="off"
                    @input="filter"
                    class="w-full m-4 border-gray-300 border px-4 py-3 work rounded-md focus:shadow outline-none"
                    type="text"
                    placeholder="Enter your giftcard" /> -->
            </div>
            <div
                v-if="skeleton"
                class="card-container lg:grid grid-cols-3 gap-4 sm:grid-cols-2 flex flex-wrap">
                <!-- <Skeleton
        :style="{ maxWidth: '12em' }"
        width="100%"
        height="12em"
        v-for="i in 12"
        :key="i"
      ></Skeleton> -->
            </div>
            <div
                class="card-container grid sm:grid-cols-4 grid-cols-2 grid flex-wrap">
                <Card
                    v-for="(card, index) in cardnames"
                    :key="index"
                    :filename="card.filename"
                    :name="card.name"
                    :uuid="card.uuid"
                    :index="index" />
            </div>
        </div>
        <!-- {{ cardnames }} -->
    </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Card from '@/components/Card.vue'
defineProps({
    cardnames: {
        type: Array,
        default: () => [],
    },
    cardname: {
        type: Object,
        default: () => {},
    },
})
</script>

<style lang="scss" scoped></style>
