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
                                Country
                            </th>
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
                                <div class="flex w-20 uppercase items-center">
                                    <img :src="category.currency.icon_url" class="mx-auto" />
                                    <p>{{ category.currency.currency }}</p>
                                </div>
                                
                            </td>
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
                                <button
                                    @click="showUpdateModal(category.uuid)"
                                    class="flex-0 items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Upgrade
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
       </template>
       <template v-else>
            <template v-if="filteredCategories.length">
                <div class="grid">
                    <button
                        v-for="category in filteredCategories"
                        :key="category.id"
                        class="border work m-4 bg-white shadow p-3 rounded"
                        @click="showUpdateModal(category.uuid)">
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
                    </button>
                </div>
                    
            </template>
            <template v-else>
                <div
                    class="work text-lg w-full text-center font-medium py-10 p-2">
                    No Bitcoin Transfer Proofs found
                </div>
            </template>
       </template>
        <CardUpdateModal v-if="isShowModal" :selected-category="selectedCategory" @toggle-modal="closeModal"/>
    </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue'
import  CountryDropdown  from '@/components/Admin/CategoryFilterCountry'
import CardUpdateModal from './components/CardUpdateModal.vue'
import { ref, computed, tablet, watch } from '@/utils'
import useFilter from '@/components/CardUploadComponents/utils'
import { useQuasar } from 'quasar'
const $q = useQuasar()

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
const selectedCategory = ref(null)
const isShowModal = ref(false)
const showUpdateModal = (categoryId) => {
    selectedCategory.value = props.categories.find(category => category.uuid === categoryId)
    isShowModal.value = true;
}
const closeModal = () => {
    isShowModal.value = false
    isSelectedCountry(selectedCountryIndex.value)
}
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
const selectedCountryIndex = ref(null)
const isSelectedCountry = (index) => {
    // form.country = myFilteredCountries.value[index].type
        filteredCategories.value = props.categories.filter(
            (category) => category.country === myFilteredCountries.value[index].type
        )
        selectedCountryIndex.value = index
        selectedCountry.value = index
}


</script>

<style lang="scss" scoped>
</style>
