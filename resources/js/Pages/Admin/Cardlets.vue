<template>
    <admin-layout>
         <p class="font-medium text-xl ">All Uploaded Giftcards</p> 
         <div class="shadow-lg overflow-hidden border-b border-gray-200 work border-dashed sm:rounded-lg m-4">
            <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                    scope="col"
                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                    tracking-wider
                                                "
                            >
                                Name
                            </th>
                            <th
                                    scope="col"
                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                    tracking-wider
                                                "
                            >
                                Type
                            </th>
                            <th
                                    scope="col"
                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                    tracking-wider
                                                "
                            >
                                Price | <span class="text-cyan font-medium">Rate</span>
                            </th>
                            
                            <th
                                    scope="col"
                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                    tracking-wider
                                                "
                            >
                                Rate
                            </th>
                            <th
                                    scope="col"
                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                    tracking-wider
                                                "
                            >
                                Status
                            </th>
                            <th
                                    scope="col"
                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                    tracking-wider
                                                "
                            >
                                Amount
                            </th>
                            <th
                                    scope="col"
                                    class="relative px-6 py-3"
                            >
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody
                            class="bg-white divide-y divide-gray-200"
                    >
                    <tr class="py-2" v-for="cardlet in cardlets" :key="cardlet.id">
                        <td
                                class="
                                                px-6
                                                py-4
                                                whitespace-nowrap
                                                text-sm
                                                font-medium
                                                text-gray-900
                                                capitalize
                                            "
                        >
                            {{ cardlet.name }}
                        </td>
                        <td
                                class="
                                                px-6
                                                py-4
                                                whitespace-nowrap
                                                text-sm text-gray-500
                                                capitalize
                                            "
                        >
                            {{ cardlet.type }}
                        </td>
                        <td
                                class="
                                                px-6
                                                py-4
                                                whitespace-nowrap
                                                text-sm text-gray-500
                                                capitalize
                                            "
                        >
                            ${{ cardlet.amount }}
                        </td>
                        <td
                                class="
                                                px-6
                                                py-4
                                                whitespace-nowrap
                                                text-sm text-gray-500
                                                capitalize
                                            "
                        >
                            {{ cardlet.rate }}
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
                            {{ REPLACE_UNDERSCORE(cardlet.condition) }}
                        </td> -->
                        <td
                                class="
                                                px-6
                                                py-4
                                                whitespace-nowrap
                                                text-sm text-gray-500
                                                capitalize
                                            "
                        >
                            {{ cardlet.status }}
                        </td>
                        <td
                                class="
                                                px-6
                                                py-4
                                                whitespace-nowrap
                                                text-sm text-gray-500
                                                capitalize
                                            "
                        >
                            &#8358;{{ 6000 }}
                        </td>
                        <td
                                class="
                                                px-6
                                                py-4
                                                whitespace-nowrap
                                                text-right text-sm
                                                flex
                                                gap-4
                                                font-medium
                                            "
                        >
                            <inertia-link
                            :href="route('cards.show', cardlet.id)"
                            class="flex-0  items-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                View Card
                            </inertia-link>
                           
                        </td>
                    </tr>
                    </tbody>
            </table>
         </div>
         </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue'
defineProps({
    cardlets: {
        type: Array,
        default: () => {}
    }
})
</script>

<style lang="scss" scoped></style>
