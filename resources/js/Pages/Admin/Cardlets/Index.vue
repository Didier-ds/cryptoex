<template>
    <admin-layout>
        <div class="min-h-[80vh]">
            <div class="flex flex-row justify-between items-center mx-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <p class="font-medium text-xl p-2">Uploaded Giftcards</p>
            </div>
            <div class="flex work justify-end mx-4">
                <Menu as="div" class="relative inline-block text-left">
                    <div>
                        <MenuButton
                            class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            Filter
                            <FilterIcon
                                class="w-5 h-5 ml-2 -mr-1 text-white"
                                aria-hidden="true" />
                        </MenuButton>
                    </div>

                    <transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0">
                        <MenuItems
                            class="absolute right-0 w-56 z-10 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="px-1 py-1">
                                <MenuItem  v-slot="{ active }">
                                    <inertia-link
                                        href="/admin/cardlets"
                                        :class="[
                                            active
                                                ? 'bg-violet-500 text-white'
                                                : 'text-gray-900',
                                            'group block rounded-md capitalize items-center w-full px-2 py-2 text-sm',
                                        ]">
                                        All giftcards
                                    </inertia-link>
                                </MenuItem>
                                 <MenuItem v-for="(status, index) in statuses" v-slot="{ active }" :key="index">
                                    <inertia-link
                                    :href="'?status='+status"
                                        :class="[
                                            active
                                                ? 'bg-violet-500 text-white'
                                                : 'text-gray-900',
                                            'group block rounded-md capitalize items-center w-full px-2 py-2 text-sm',
                                        ]">
                                        {{status}} giftcards
                                    </inertia-link>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
            <div
                v-if="tablet"
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
                        <template v-if="cardlets.length"> 
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
                                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 capitalize">
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
                                            :href="route('cardlet.show', cardlet.uuid)"
                                            class="flex-0 items-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            View Card
                                        </inertia-link>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                        <div v-else class="work text-lg w-full text-center font-medium py-10 p-2" style="display: table-caption; caption-side: bottom;">
                            No Giftcards found
                        </div>
                </table>
            </div>
            <div v-else class="">
                <template v-if="cardlets.length">
                    <inertia-link
                    v-for="cardlet in cardlets"
                    :key="cardlet.id"
                    :href="route('cardlet.show', cardlet.uuid)"
                    class="border block work m-4 bg-white shadow p-3 rounded">
                    <div></div>
                    <div>
                        <div class="flex items-center pb-1 justify-between">
                            <p class="font-medium text-base">{{ cardlet.name }}</p>
                            <p class="font-semibold">${{ cardlet.amount }}</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <p class="text-gray-700 text-sm">
                                {{ cardlet.created_at.slice(0, 10) }}
                            </p>
                            <q-badge :color="statusColor(cardlet.status)">
                                {{ cardlet.status }}
                            </q-badge>
                        </div>
                    </div>
                </inertia-link>
                </template>
                <template v-else>
                    <div class="work text-lg w-full text-center font-medium py-10 p-2" >
                            No Giftcards found
                        </div>
                </template>
                
            </div>
        </div>
    </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue'
import { statusColor, ref, tablet } from '@/utils'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { FilterIcon } from '@heroicons/vue/solid'

defineProps({
    cardlets: {
        type: Array,
        default: () => {},
    },
})


const statuses = [
    'Pending', 'paid','cancelled'
]
// const STATUS_COLOR = computed(() => statusColor(props.cardlets.status))
</script>

<style lang="scss" scoped>
.disabled,
.disabled *,
[disabled],
[disabled] * {
    outline: 0 !important;
    cursor: default !important;
    opacity: 1 !important;
}
</style>
