<template>
    <admin-layout>
        <div class="flex flex-row justify-between items-center mx-4">
            <div class="my-1">
                <GoBack />
            </div>

            <div class="flex justify-between work gap-4 items-center">
                <p class="font-medium work text-lg capitalize">
                    {{ cardname.name }} giftcard
                </p>
                <!-- {{data.images}} -->
            </div>
        </div>
        <div class="flex justify-end gap-4 px-2">
            <div class="py-2 flex gap-2">
                <inertia-link
                    href="/admin/giftcards/create"
                    class="flex-0 items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Create Category
                </inertia-link>
            </div>
             <CountryDropdown
                class="w-56"
                :countries="myFilteredCountries"
                :selected-country="selectedCountry"
                @is-selected-country="
                    isSelectedCountry
                " />
        </div>
      
       <template v-if="tablet">
            <div
                class="shadow-lg overflow-x-scroll work border border-gray-200 border-dashed sm:rounded-lg m-4">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                            </th>
                            <!-- <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                            </th> -->
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Price range
                            </th>

                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Rate
                            </th>

                            <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr
                            v-for="category in filteredCategories"
                            :key="category.id"
                            class="py-2">
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                                {{ category.type }}
                            </td>
                            <!-- <td
                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                                {{ category.type }}
                            </td> -->
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm capitalize">
                               <q-badge color="secondary">
                                    ${{ category.min }} - {{ category.max }}
                                </q-badge>
                            </td>
                            <td
                                class="px-6 py-4 font-semibold whitespace-nowrap text-sm capitalize">
                                ${{ category.rate }}
                            </td>
                            <!-- <td
                                    class="
                                                    px-6
                                                    py-4
                                                    whitespace-nowrap
                                                    text-sm text-gray-500
                                                    capitalize
                                                "
                            >
                                {{ REPLACE_UNDERSCORE(giftcard.condition) }}
                            </td> -->

                            <td
                                class="px-6 py-4 whitespace-nowrap text-right text-sm flex gap-4 font-medium">
                                <inertia-link
                                    :href="route('cards.update', category.uuid)"
                                    class="flex-0 items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Upgrade
                                </inertia-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
       </template>
       <template v-else>
            <template v-if="filteredCategories.length">
                    <inertia-link
                        v-for="category in filteredCategories"
                        :key="category.id"
                        :href="route('cards.update', category.uuid)"
                        class="border block work m-4 bg-white shadow p-3 rounded">
                        <div></div>
                        <div>
                            <div class="flex items-center pb-1 justify-between">
                                <p class="font-medium text-base">
                                    {{ category.type }}
                                </p>
                                <p class="font-semibold">${{ category.rate }}</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <p class="text-gray-700 text-sm">
                                    {{ category.updated_at.slice(0, 10) }}
                                </p>
                                <q-badge color="secondary">
                                    ${{ category.min }} - {{ category.max }}
                                </q-badge>
                            </div>
                        </div>
                    </inertia-link>
            </template>
            <template v-else>
                <div
                    class="work text-lg w-full text-center font-medium py-10 p-2">
                    No Bitcoin Transfer Proofs found
                </div>
            </template>
       </template>
    </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue'
import  CountryDropdown  from '@/components/Admin/CategoryFilterCountry'
import { ref, computed, tablet } from '@/utils'
import useFilter from '@/components/CardUploadComponents/utils'
// import Modal from '@/Jetstream/Modal.vue'
// import CategoryCard from '@/components/Admin/CategoryCard.vue'
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

const {
    // selectedCategory,
    selectedCountry,
    // filteredPriceRanges,
    // filteredCategories,
    // selectedPriceRange,
    filteredCountries,
} = useFilter()

const filteredCategories = ref([])

const myFilteredCountries = computed(() => {
    return filteredCountries(props.categories)
})

const isSelectedCountry = (index) => {
    // form.country = myFilteredCountries.value[index].type
        filteredCategories.value = props.categories.filter(
            (category) => category.country === myFilteredCountries.value[index].type
        )
        selectedCountry.value = index
}


</script>

<style lang="scss" scoped></style>
