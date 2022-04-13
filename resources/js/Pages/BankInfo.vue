<template>
    <settings-layout>
        <p class="font-medium text-lg text-gray-500 work my-4">
            Bank Information
        </p>
        <div class="md:grid grid-cols-2">
            <div class=""></div>
            <div>
                <div v-if="banks.length">
                    <div
                        v-for="bank in banks"
                        :key="bank"
                        class="border work flex rounded p-4">
                        <div class="m-4">
                            <q-icon
                                name="account_balance"
                                style="color: #ccc; font-size: 2em" />
                        </div>
                        <div class="pl-2">
                            <p class="font-semibold text-base">
                                {{ bank.account_name }}
                            </p>
                            <p class="">{{ bank.account_number }}</p>
                            <p class="text-sm text-gray-700">
                                {{ bank.bank_name }}
                            </p>
                        </div>
                    </div>
                </div>
                <inertia-link
                    v-else
                    href="/user/bank-account"
                    class="border block font-medium text-primary work flex rounded p-4">
                    Add Bank Account
                </inertia-link>
                <div class="bg-gray-50 work my-2 p-3 rounded">
                    if you need to change your saved bank account, Kindly reach
                    out to
                    <a
                        class="text-primary text-xs"
                        href="mailto:support@cryptomaniaexchange.com"
                        >support@cryptomaniaexchange.com</a
                    >
                </div>
            </div>
        </div>
    </settings-layout>
</template>

<script setup>
import SettingsLayout from '@/Layouts/SettingsLayout.vue'
defineProps({
    banks: {
        type: Array,
        default: () => [],
    },
})
</script>

<style lang="scss" scoped></style>
