<template>
    <admin-layout> 
        <div class="px-2">
            <p class="text-lg work font-semibold">Dashboard</p>
            <div class="grid work my-4">
                <div class="border p-3 rounded flex justify-between items-center bg-white mb-2 shadow">
                    <p class="text-base font-medium">Pending Giftcards</p>
                    <p class="text-lg font-medium text-yellow-600">{{$page.props['pending-cardlets']}}</p>
                </div>
                <div class="border p-3 rounded flex justify-between items-center bg-white mb-2 shadow">
                    <p class="text-base font-medium">Pending Btc Trade</p>
                    <p class="text-lg font-medium text-yellow-600">{{$page.props['pending-proofs']}}</p>
                </div>
            </div>
            <div>
                <div class="box">
                    <p class="text-lg font-semibold">Recently Uploaded Giftcards</p>
                    <div>
                        <inertia-link
                        v-for="cardlet in recentCardlets.data"
                        :key="cardlet.id"
                        :href="route('cardlet.show', cardlet.uuid)"
                        class="border block work m-4 bg-white shadow p-3 rounded">
                        <div></div>
                        <div>
                            <div class="flex items-center pb-1 justify-between">
                                <p class="font-medium text-base">
                                    {{ cardlet.name }}
                                </p>
                                <p class="font-semibold">
                                    ${{ cardlet.amount }}
                                </p>
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
                    </div>
                </div>
                <div class="box">
                    <p class="text-lg font-semibold">Recently Uploaded Btc Proofs</p>  
                    <div>
                    <inertia-link
                        v-for="proof in recentProofs.data"
                        :key="proof.id"
                        :href="route('proof.admin_show', proof.uuid)"
                        class="border block work m-4 bg-white shadow p-3 rounded">
                        <div></div>
                        <div>
                            <div class="flex items-center pb-1 justify-between">
                                <p class="font-medium text-base">
                                    {{ proof.vendor_name }}
                                </p>
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
                    </div>
                </div>
            </div>
        </div>
    </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue'
import { statusColor } from '@/utils'

defineProps({
    recentCardlets : {
        type: Object,
        default: () => {}
    },
    recentProofs : {
        type: Object,
        default: () => {}
    }
})

</script>

<style lang="scss" scoped></style>
