<template>
    <main-layout>
        <div>
            <div class="flex flex-row justify-between items-center mx-4">
                <GoBack />
                <div class="">
                    <h2 class="text-lg work font-semibold capitalize p-ripple">
                        {{ cardname.name }} Card
                    </h2>
                </div>
            </div>
            <form @submit.prevent="submit">
                <div
                    class="upload_container items-center md:grid grid-cols-2 grey">
                    <!-- Card categories and amount section -->
                    <div class="card_form_container flex flex-col">
                        <div class="w-11/12 sm:w-10/12 mx-auto">
                            <BigCard
                                :img-type="imgType"
                                :name="cardname.name"
                                :filename="cardname.filename" />
                            <div class="input_box my-2 flex flex-col">
                                <label
                                    for="type"
                                    class="text-base work font-medium pb-2">
                                    Card Type
                                </label>
                                <select
                                    id="category"
                                    v-model="form.type"
                                    required
                                    class="p-2 py-3 capitalize font-medium rounded-md shadow-sm border"
                                    name="category">
                                    <option disabled value="">
                                        Please select Category
                                    </option>
                                    <option
                                        v-for="category in categories"
                                        :key="category"
                                        :value="category.type">
                                        {{ category.type }}
                                    </option>
                                </select>
                                <div class="input_box my-2 flex flex-col">
                                    <label
                                        for="amount"
                                        class="text-base work font-medium pb-2"
                                        >Amount</label
                                    >
                                    <input
                                        id="amount"
                                        required
                                        v-model="form.amount"
                                        autocomplete="off"
                                        class="items-center w-full border-cyan-200 border text-base work px-4 py-3 rounded-md focus:border-cyan-500 focus:shadow-outline outline-none outline-none"
                                        type="number"
                                        placeholder="Enter Amount" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- //file upload section -->
                    <div class="file_price_container flex flex-col">
                        <div class="w-11/12 sm:w-10/12 mx-auto">
                            <div class="my-4 rounded">
                                <span
                                    class="block text-base work font-medium pb-1"
                                    >You will receive</span
                                >
                                <span
                                    class="font-bold text-green-800 ibm text-xl"
                                    >&#8358;{{ AMOUNT_TO_RECEIVE }}</span
                                >
                            </div>
                            <div class="input_box mx-auto my-2">
                                <label
                                    for="comment"
                                    class="text-base work font-medium"
                                    >Comments</label
                                >
                                <input
                                    id="comment"
                                    v-model="form.comment"
                                    autocomplete="off"
                                    class="w-full border text-base work px-4 py-3 rounded-md focus:border-cyan-500 focus:shadow-outline outline-none outline-none"
                                    type="text"
                                    placeholder="Enter code if not clear" />
                            </div>
                            <span class="block py-1 text-base work font-medium">
                                Upload Card or Receipt
                            </span>
                            <div>
                                <div
                                    class="border-dashed my-4 px-4 py-4 rounded flex flex-col text-center justify-between items-center border-4">
                                    <div
                                        v-if="allImages.length"
                                        id="preview"
                                        class="grid grid-cols-3">
                                        <div
                                            v-for="(img, index) in allImages"
                                            :key="index"
                                            class="box m-2 relative">
                                            <div
                                                class="flex justify-center top-0 right-0 absolute h-4 w-4 p-0.5 z-10 items-center cursor-pointer rounded-2xl bg-red-500 text-white"
                                                @click="deleteImg(index)">
                                                <q-icon
                                                    round
                                                    size=".8em"
                                                    color="white"
                                                    name="close" />
                                            </div>
                                            <img
                                                class="w-full border hover:shadow-lg shadow-md rounded border-cyan-500"
                                                :src="img"
                                                @click="cropImage(index)" />
                                        </div>
                                    </div>
                                    <div class="items-center py-2">
                                        <div v-show="!allImages.length">
                                            <img
                                                src="@/images/proof.svg"
                                                class="mx-auto w-14" />
                                            <p class="py-2 work">
                                                Click Button Below to Upload
                                                Picture of Your Giftcard
                                            </p>
                                        </div>
                                        <div>
                                            <label
                                                for="image"
                                                class="bg-cyan flex mx-auto justify-center h-8 w-8 items-center cursor-pointer rounded-2xl text-white work"
                                                ><q-icon
                                                    round
                                                    size="1.5em"
                                                    color="white"
                                                    name="add"
                                            /></label>
                                            <input
                                                id="image"
                                                ref="file"
                                                required
                                                name="image"
                                                type="file"
                                                accept="image/*"
                                                multiple=""
                                                hidden
                                                @change="handleChange" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex">
                                <q-btn
                                    label="Upload"
                                    color="secondary"
                                    type="submit"
                                    class="font-medium mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <SuccessModal v-if="isUploadedSuccessfully" />
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout.vue'
import BigCard from '@/components/Big-Card.vue'
import SuccessModal from '@/components/SuccessModal.vue'
import { ref, computed, ExactCardImg, useForm } from '@/utils'
import { useQuasar } from 'quasar'
const $q = useQuasar()
const file = ref(null)
const name = window.location.pathname.split('/')[2]
const allImages = ref([])
let SELECTED_CARD_UUID = null
const isUploadedSuccessfully = ref(false)
const props = defineProps({
    categories: {
        type: Array,
        default: () => [],
    },
    cardname: {
        type: Object,
        default: () => {},
    },
})

const imgType = computed(() => {
    return ExactCardImg(name)
})

const form = useForm({
    amount: null,
    type: '',
    comment: '',
    images: null,
})

const AMOUNT_TO_RECEIVE = computed(() => {
    const selectedCard = props.categories.find(
        (card) => card.type === form.type
    )
    SELECTED_CARD_UUID = selectedCard ? selectedCard.uuid : null
    return selectedCard ? selectedCard.rate * form.amount : 0
    // return selectedCard ? selectedCard.rate * form.amount : 0
})

const deleteImg = (index) => {
    allImages.value.splice(index, 1)
    file.value.files.splice(index, 1)
    handleChange()
}

const handleChange = () => {
    if (file.value.files) {
        const allFiles = file.value.files
        form.images = file.value.files
        for (let singleFile of allFiles) {
            const reader = new FileReader()
            reader.onload = () => {
                allImages.value.push(reader.result)
            }
            reader.readAsDataURL(singleFile)
        }
    }
}

const submit = () => {
    form.transform((data) => ({
        ...data,
    }))
        // eslint-disable-next-line no-undef
        .post(`/users/cardlets-make/${SELECTED_CARD_UUID}`, {
            onSuccess: () => {
                form.reset()
                allImages.value = []
                isUploadedSuccessfully.value = ref(true)
                $q.notify({
                    type: 'positive',
                    message: 'GiftCard Uploaded',
                    position: 'top-right',
                })
            },
        })
}
</script>

<style lang="scss" scoped>
select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: white;
}
</style>
