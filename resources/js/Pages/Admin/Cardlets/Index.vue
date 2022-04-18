<template>
    <admin-layout>
        <div class="flex flex-row justify-between items-center mx-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <p class="font-medium text-xl p-2">All Uploaded Giftcards</p>
            </div>
        <div v-if="tablet"
            class="shadow-lg overflow-x-scroll border border-gray-200 work border-dashed rounded-lg m-4">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Type
                        </th>
                        <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price 
                        </th>

                        <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rate
                        </th>
                        <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                        </th>
                        <th scope="col" class="relative px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr
                        v-for="cardlet in cardlets"
                        :key="cardlet.id"
                        class="py-2">
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                            {{ cardlet.name }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                            {{ cardlet.type }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium capitalize">
                            ${{ cardlet.amount }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800  capitalize">
                            &#8358;{{ cardlet.rate }}
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
                            class="px-2 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                            <q-badge :color="statusColor(cardlet.status)">
                                {{ cardlet.status }}
                            </q-badge>
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium capitalize">
                            &#8358;{{ +cardlet.amount * +cardlet.rate }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-right text-sm flex gap-4 font-medium">
                            <inertia-link
                                :href="route('cardlet.show', cardlet.id)"
                                class="flex-0 items-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                View Card
                            </inertia-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <inertia-link :href="route('cardlet.show', cardlet.id)"
                v-for="cardlet in cardlets" :key="cardlet.id"
                        class="border block work m-4 bg-white shadow p-3 rounded ">
                <div></div>
                <div>
                    <div class="flex items-center pb-1 justify-between">
                        <p class="font-medium text-base">{{cardlet.name}}</p>
                        <p class="font-semibold">${{cardlet.amount}}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-gray-700 text-sm">{{cardlet.created_at.slice(0, 10)}}</p>
                        <q-badge :color="statusColor(cardlet.status)">
                            {{ cardlet.status }}
                        </q-badge>
                    </div>
                </div>
            </inertia-link>
        </div>
    </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue'
import { statusColor, tablet } from '@/utils'
defineProps({
    cardlets: {
        type: Array,
        default: () => {},
    },
})
// const STATUS_COLOR = computed(() => statusColor(props.cardlets.status))
</script>

<style lang="scss" scoped></style>
