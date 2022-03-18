<template>
    <admin-layout>
        <div class="flex flex-row justify-between items-center mx-4">
            <div class="my-1">
                <GoBack />
            </div>
            
            <div class="flex justify-between work gap-4 items-center">
            <p class="font-medium work text-lg capitalize">
                {{ giftcards[0].name }} giftcard
            </p>
            <!-- {{data.images}} -->
            <div class="py-2 flex gap-2">
                <inertia-link
                    href=""
                    class="flex-0 items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Create Category
                </inertia-link>

            </div>
        </div>
        </div>
        <!-- <q-btn color="primary" label="Add Category" />
        <category-card
            v-for="card in giftcards"
            :name="card.name"
            :rate="card.rate"
            :type="card.type"
            :key="card"></category-card>
         <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="add" color="primary" />
          </q-page-sticky> -->
        <div
            class="shadow-lg overflow-hidden work border-b border-gray-200 border-dashed sm:rounded-lg m-4">
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
                            Price range
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
                    <tr
                        class="py-2"
                        v-for="giftcard in giftcards"
                        :key="giftcard.id">
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                            {{ giftcard.name }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                            {{ giftcard.type }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                            ${{ giftcard.min }}-${{ giftcard.max }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                            ${{ giftcard.rate }}
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
                            {{ REPLACE_UNDERSCORE(giftcard.condition) }}
                        </td> -->

                        <td
                            class="px-6 py-4 whitespace-nowrap text-right text-sm flex gap-4 font-medium">
                            <inertia-link
                                href="route('products.create')"
                                class="flex-0 items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Upgrade
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
// import Modal from '@/Jetstream/Modal.vue'
// import CategoryCard from '@/components/Admin/CategoryCard.vue'
defineProps({
    giftcards: {
        type: Array,
        default: () => [],
    },
})
</script>

<style lang="scss" scoped></style>
