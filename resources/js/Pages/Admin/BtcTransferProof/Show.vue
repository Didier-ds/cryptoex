<template>
    <admin-layout>
        <!-- {{data}} -->
        <div class="mx-4 md:m-4 inline-block">
            <GoBack />
        </div>
        <div
            class="flex justify-between px-2 lg:px-8 max-w-4xl mx-auto work items-center p-4">
            <p class="font-medium work text-lg capitalize">Transfer Details</p>
            <!-- {{data.images}} -->
            <div class="py-2 flex gap-2">
                <button
                    class="flex-0 items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    @click="CHANGE_STATUS('paid')">
                    Update to Paid
                </button>

                <button
                    class="flex-0 items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    @click="CHANGE_STATUS('cancelled')">
                    Reject Proof
                </button>

                <!-- <inertia-link
                            :href="route('products.create')"
                            class="flex-0 w-full sm:max-w-xs items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                        Add New Product
                    </inertia-link> -->
            </div>
        </div>

        <section class="max-w-4xl mx-auto py-4 px-2 lg:px-8">
            <div
                class="bg-white border relative shadow overflow-hidden work sm:rounded-lg">
                <div class="absolute top-0 right-0 m-2">
                    <q-badge :color="STATUS_COLOR">
                        {{ data.status }}
                    </q-badge>
                </div>
                <div class="px-4 py-5 sm:px-6 grid grid-cols-3">
                    <!-- {{data.images}} -->
                    <q-img
                        :src="data.filename"
                        spinner-color="secondary"
                        class="border shadow rounded m-2"
                        style="height: 140px; max-width: 150px"
                        @click="SHOW_IMAGE_MODAL(data.filename)" />
                </div>
                <div class="px-4 py-5 sm:px-6 border-t border-gray-200">
                    <h3
                        class="text-lg leading-6 font-medium text-gray-900 capitalize">
                        Transfer Information
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        Information about the Transfer
                    </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
                        <!-- name -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                vendor name
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.vendor_name }}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Proof Id
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                #{{ data.uuid.slice(0, 8) }}
                            </dd>
                        </div>
                        <!-- phone -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Rate
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                &#8358;{{ data.rate }}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Price
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                ${{ data.amount }}
                            </dd>
                        </div>
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Amount
                            </dt>
                            <dd
                                class="mt-1 text-sm ibm font-semibold text-green-900">
                                &#8358;{{ data.amount * data.rate }}
                            </dd>
                        </div>
                        <!-- <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Comments
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.comment }}
                            </dd>
                        </div> -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Status
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                <q-badge :color="STATUS_COLOR">
                                    {{ data.status }}
                                </q-badge>
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
                        <!-- phone -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Phone
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.user.phone }}
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
                    </dl>
                </div>
                <div class="px-4 py-5 sm:px-6">
                    <h3
                        class="text-lg leading-6 font-medium text-gray-900 capitalize">
                        Bank Information
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        Information about the Bank
                    </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
                        <!-- name -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Account Name
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.user.bank_details[0].account_name }}
                            </dd>
                        </div>
                        <!-- email -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Account Number
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.user.bank_details[0].account_number }}
                            </dd>
                        </div>
                        <!-- bank name -->
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">
                                Bank Name
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                {{ data.user.bank_details[0].bank_name }}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <ImageModal
                :show="showModal"
                :img="modalImage"
                @close="CLOSE_MODAL" />
        </section>
    </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue'
import ColorBall from '@/components/reusables_/ColorBall.vue'
import ImageModal from '@/components/reusables_/ImageModal.vue'
import { Inertia, computed, statusColor } from '@/utils'
import { useQuasar } from 'quasar'
import { ref } from 'vue'
const $q = useQuasar()
const props = defineProps({
    data: {
        type: Object,
        default: () => {},
    },
})
const modalImage = ref(null)
const showModal = ref(false)
const SHOW_IMAGE_MODAL = (img) => {
    modalImage.value = img
    showModal.value = true
}
const CLOSE_MODAL = () => {
    showModal.value = false
}
const STATUS_COLOR = computed(() => statusColor(props.data.status))
const CHANGE_STATUS = (status) => {
    const data = { status }
    Inertia.visit(route('proof.update', props.data.uuid), {
        method: 'patch',
        data,
        onSuccess: () => {
            $q.notify({
                type: 'positive',
                message: 'Status Changed Successfully',
                position: 'top-right',
            })
        },
        onError: () => {
            $q.notify({
                type: 'negative',
                message: "Cardlet does'nt exist",
                position: 'top-right',
            })
        },
    })
}
</script>

<style lang="scss" scoped></style>
