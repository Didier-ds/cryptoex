<template>
    <admin-layout>
        <!-- {{proofs}} -->
        <div class="work">
            <div class="flex flex-row justify-between items-center mx-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <p class="font-medium text-xl p-2">Bitcoin Proofs</p>
            </div>
            <template v-if="tablet">
                    <div class="shadow-lg overflow-x-scroll border border-gray-200 work border-dashed rounded-lg m-4">
                        <table class="w-full">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Vendor name
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <template v-if="proofs.length">
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <tr
                                            v-for="proof in proofs"
                                            :key="proof.id"
                                            class="py-2">
                                            <td
                                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                                                {{ proof.vendor_name }}
                                            </td>
                                            <td
                                                class="px-6 py-4 whitespace-nowrap text-sm font-medium capitalize">
                                                ${{ proof.amount }}
                                            </td>
                                            <td
                                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 capitalize">
                                                {{ proof.created_at.slice(0, 10) }}
                                            </td>
                                            <td
                                                class="px-2 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                                                <q-badge :color="statusColor(proof.status)">
                                                    {{ proof.status }}
                                                </q-badge>
                                            </td>
                                            <td
                                                class="px-6 py-4 whitespace-nowrap text-right text-sm flex gap-4 font-medium">
                                                <inertia-link
                                                    :href="route('cardlet.show', proof.id)"
                                                    class="flex-0 items-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                    View Proof
                                                </inertia-link>
                                            </td>
                                        </tr>
                                    </tbody>
                            </template>
                            <template v-else>
                                <div class="work text-lg w-full text-center font-medium py-10 p-2" style="display: table-caption; caption-side: bottom;">
                                    No Giftcards found
                                </div>
                            </template>
                        </table>
                    </div>
            </template>
            <template v-else>
                <template v-if="proofs.length">
                    <inertia-link
                        v-for="proof in proofs"
                        :key="proof.id"
                        :href="route('cardlet.show', proof.id)"
                        class="border block work m-4 bg-white shadow p-3 rounded">
                        <div></div>
                        <div>
                            <div class="flex items-center pb-1 justify-between">
                                <p class="font-medium text-base">{{ proof.vendor_name }}</p>
                                <p class="font-semibold">${{ proof.amount }}</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <p class="text-gray-700 text-sm">
                                    {{ proof.created_at.slice(0, 10) }}
                                </p>
                                <q-badge :color="statusColor(proof.status)">
                                    {{ proof.status }}
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
            </template>
            
        </div>
    </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue'
import { statusColor, ref, tablet } from '@/utils'

defineProps({
    proofs: {
        type:Array,
        default: () => []
    }
})
</script>

<style lang="scss" scoped></style>
