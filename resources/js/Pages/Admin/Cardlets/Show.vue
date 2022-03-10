<template>
    <admin-layout>
        <!-- {{data}} -->
        <section class="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div class="bg-white shadow overflow-hidden work sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6">
                    <h3
                        class="
                            text-lg
                            leading-6
                            font-medium
                            text-gray-900
                            capitalize
                        "
                    >
                        Card Information
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        Information about the Card
                    </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
                        <!-- name -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                name
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.name }}
                            </dd>
                        </div>
                        <!-- email -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Type
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.type }}
                            </dd>
                        </div>
                        <!-- phone -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Rate
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.rate }}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Amount
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.amount }}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Comments
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.comment }}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Status
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.status }}
                            </dd>
                        </div>
                        <!-- date -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Date
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.created_at.slice(0, 10) }}
                            </dd>
                        </div>
                       
                    </dl>
                </div>
               <div class="px-4 py-5 sm:px-6">
                    <h3
                        class="
                            text-lg
                            leading-6
                            font-medium
                            text-gray-900
                            capitalize
                        "
                    >
                        User Information
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        Information about the User
                    </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
                        <!-- name -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                name
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.user.fullname }}
                            </dd>
                        </div>
                        <!-- email -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.user.email }}
                            </dd>
                        </div>
                        <!-- phone -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Phone
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.user.phone }}
                            </dd>
                        </div>
                       
                       
                    </dl>
                </div>
            </div>
        </section>
    </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue'
defineProps({
    data: {
        type: Object,
        default: () => {}
    }
})
</script>

<style lang="scss" scoped>

</style>