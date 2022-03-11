<template>
    <admin-layout>
        <section class="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div class="bg-white shadow overflow-hidden work sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6">
                    <h3
                        class="text-lg leading-6 font-medium text-gray-900 capitalize">
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
                                Fullname
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.fullname }}
                            </dd>
                        </div>
                        <!-- email -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.email }}
                            </dd>
                        </div>
                        <!-- phone -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Phone
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.phone }}
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
                        class="text-lg leading-6 font-medium text-gray-900 capitalize">
                        Uploaded Cards
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        Information about the User Uploaded Cards
                    </p>
                </div>
                <div class="p-2">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Type
                                </th>
                                <th
                                    scope="col"
                                    class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price |
                                    <span class="text-cyan font-medium"
                                        >Rate</span
                                    >
                                </th>

                                <th
                                    scope="col"
                                    class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Rate
                                </th>
                                <th
                                    scope="col"
                                    class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th
                                    scope="col"
                                    class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Amount
                                </th>
                                <th scope="col" class="relative px-2 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr
                                class="py-2"
                                v-for="cardlet in data.cardlet"
                                :key="cardlet.id">
                                <td
                                    class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                                    {{ cardlet.name }}
                                </td>
                                <td
                                    class="px-2 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                                    {{ cardlet.type }}
                                </td>
                                <td
                                    class="px-2 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                                    ${{ cardlet.amount }}
                                </td>
                                <td
                                    class="px-2 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                                    {{ 270 }}
                                </td>
                                <!-- <td
                                class="
                                                px-2
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
                                    {{ cardlet.status }}
                                </td>
                                <td
                                    class="px-2 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                                    &#8358;{{ 6000 }}
                                </td>
                                <td
                                    class="py-4 whitespace-nowrap text-right text-sm flex gap-4 font-medium">
                                    <inertia-link
                                        href="route('products.create')"
                                        class="flex-0 items-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        View Card
                                    </inertia-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
        default: () => {},
    },
})
</script>

<style lang="scss" scoped></style>
