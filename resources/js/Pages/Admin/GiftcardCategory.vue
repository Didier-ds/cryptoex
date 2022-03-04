<template>
    <admin-layout>
        <div class="flex flex-row justify-between items-center mx-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <div class="">
                    <h2 class="text-lg work font-semibold p-ripple">
                        {{ giftcards[0].name }} Card
                    </h2>
                </div>
            </div>
        <category-card v-for="card in giftcards" :name="card.name" :rate="card.rate" :type="card.type" :key="card"></category-card>
    </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue'
import CategoryCard from '@/components/Admin/CategoryCard.vue'
defineProps({
    giftcards: {
        type: Array,
        default: () => [],
    },
})
</script>

<style lang="scss" scoped>

</style>