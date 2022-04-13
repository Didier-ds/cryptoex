<template>
    <admin-layout>
        <div class="flex flex-row justify-between items-center mx-4">
            <div class="my-1">
                <GoBack />
            </div>
            <inertia-link
                :href="route('btc-vendors.create')"
                class="flex-0 items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Create Vendor
            </inertia-link>
        </div>
        <p class="font-medium text-xl">All Bitcoin Vendor</p>
        <div
            class="shadow-lg overflow-hidden border-b border-gray-200 work border-dashed sm:rounded-lg m-4">
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
                            Rate
                        </th>

                        <th scope="col" class="relative px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="vendor in vendors" :key="vendor.id" class="py-2">
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                            {{ vendor.name }}
                        </td>

                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                            &#8358;{{ vendor.rate }}
                        </td>

                        <td
                            class="px-6 py-4 whitespace-nowrap text-right text-sm flex gap-4 font-medium">
                            <inertia-link
                                :href="route('cardlet.show', vendor.id)"
                                class="flex-0 items-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                View Vendor
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
// import { statusColor } from '@/utils'
defineProps({
    vendors: {
        type: Array,
        default: () => {},
    },
})
// const STATUS_COLOR = computed(() => statusColor(props.vendors.status))
</script>

<style lang="scss" scoped></style>
