<template>
    <main-layout>
        <div id="Transactions-page" class="">
            <div class="flex flex-row justify-between items-center px-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <div class="">
                    <h2 class="text-lg work font-semibold p-ripple">
                        Transactions
                    </h2>
                </div>
            </div>
            <!-- <div class="mx-4 md:grid gap-4 grid-cols-3 px-4">
                <StatusBox
                    v-for="(status, index) in statuses"
                    :key="index"
                    :status="status.status"
                    :label="status.label"
                    :total="status.total" />
            </div> -->
            <div class="p-4 max-w-4xl mx-auto">
                <div id="giftcards">
                    <div class="flex justify-between items-center">
                        <h2 class="font-bold work big mb-2">
                            <!-- GIFTCARD TRANSACTIONS -->
                        </h2>
                        <div class="border p-0.5 rounded-full flex border-cyan">
                            <inertia-link href="/user/transactions/giftcards" :class="{ 'bg-primary text-white': $page.url === '/user/transactions/giftcards' }" class=" work mr-1 p-1 px-4 rounded-full">Giftcard</inertia-link>
                            <inertia-link href="/user/transactions/bitcoins" :class="{ 'bg-primary text-white' : $page.url === '/user/transactions/bitcoins' }" class="work p-1 px-4 rounded-full">Bitcoin</inertia-link>
                        </div>
                    </div>
                   <slot></slot>
                </div>
            </div>
        </div>
    </main-layout>
</template>
<script setup>
import MainLayout from '@/Layouts/MainLayout'

</script>

<style lang="scss">

</style>
