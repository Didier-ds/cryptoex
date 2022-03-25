<template>
    <main-layout>
        <div>
            <div class="flex flex-row justify-between items-center mx-4">
                <GoBack />
                <div class="">
                    <h2 class="text-lg work font-semibold capitalize p-ripple">
                        {{ cardname.name }} Card
                    </h2>
                </div>
            </div>
            <section class="max-w-xl mx-auto p-4">
                <div>
                    <BigCard
                        :img-type="imgType"
                        :name="cardname.name"
                        :filename="cardname.filename" />
                </div>
                <div class="options_container">
                    <div class="country_select_container">
                        <p class="font-medium work mb-2">Select Country</p>
                        <div class="country_options grid grid-cols-2">
                            <button
v-for="country in allCountries" :key="country" class="flex rounded-sm p-2 white-space-1 sm:p-4 select-none relative" :class="{
                            'shadow-wide': country.selected,
                            'border ': !country.selected,
                            'bg-white': country.selected,
                          }">
                          <span class="capitalize text-md font-medium">{{country.type}}</span></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout.vue'
import GreenCheck from '@/components/reusables_/GreenCheck.vue'
import BigCard from '@/components/Big-Card.vue'
import {ref, onMounted}from '@/utils'
const props = defineProps({
    categories: {
        type: Array,
        default: () => [],
    },
    cardname: {
        type: Object,
        default: () => {},
    },
})
const allCountries = ref([])
const recreateData = () => {
    props.categories.map((category) => {
        const newObj = {
            type: category.country,
            selected: false
        }
        allCountries.value.push(newObj)
    })
}

onMounted(() => {
    recreateData()
}) 
</script>

<style lang="scss" scoped>

</style>