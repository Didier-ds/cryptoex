<template>
    <main-layout>
        <div>
            <div class="flex flex-row justify-between items-center mx-4">
                <GoBack />
                <div class="">
                    <h2 class="text-lg work font-semibold capitalize p-ripple">
                        {{ name }} Card
                    </h2>
                </div>
            </div>
            <form @submit.prevent="submit">
                <div class="upload_container md:grid grid-cols-2 grey">
                    <!-- Card categories and amount section -->
                    <div class="card_form_container flex flex-col">
                        <div class="w-11/12 sm:w-10/12 mx-auto">
                            <BigCard :img-type="imgType" :name="name" />
                            <div class="input_box my-2 flex flex-col">
                                <label
                                    for="type"
                                    class="text-base work font-medium pb-2">
                                    Card Type
                                </label>
                                <select
                                    id="category"
                                    v-model="form.type"
                                    class="p-2 py-3 capitalize font-medium rounded shadow border bg-white"
                                    name="category">
                                    <option disabled value="">
                                        Please select Category
                                    </option>
                                    <option
                                        v-for="category in giftcards"
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
                                        v-model="form.amount"
                                        autocomplete="off"
                                        class="hover:ring-2 items-center w-full border-cyan-200 border text-base work px-4 py-3 rounded-md focus:border-cyan-500 focus:shadow-outline outline-none outline-none"
                                        type="number"
                                        placeholder="Enter Amount" />
                                </div>
                                <div class="my-4 p-3 rounded bg-green-100/50">
                                    <span class="block work"
                                        >You will receive</span
                                    >
                                    <span
                                        class="font-bold text-green-800 ibm text-xl"
                                        >&#8358;{{ AMOUNT_TO_RECEIVE }}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- //file upload section -->
                    <div class="file_price_container flex flex-col">
                        <div class="w-11/12 sm:w-10/12 mx-auto">
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
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6 18L18 6M6 6L18 18"
                                                        stroke="#fff"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <img
                                                class="w-full border hover:shadow-lg shadow-md rounded border-cyan-500"
                                                :src="img"
                                                @click="cropImage(index)" />
                                        </div>
                                    </div>
                                    <div v-else class="items-center py-4">
                                        <img
                                            src="@/images/proof.svg"
                                            class="mx-auto" />
                                        <p class="py-4 work">
                                            Kindly Upload a Picture of Your
                                            Giftcard
                                        </p>
                                        <div>
                                            <label for="image"
                                                bg-cyan
                                                flex
                                                justify-center
                                                h-8
                                                w-8
                                                items-center
                                                cursor-pointer
                                                rounded-2xl
                                                text-white
                                                work
                                                ><q-icon
                                                    round
                                                    color="primary"
                                                    name="add"
                                            /></label>
                                            <input
                                                id="image"
                                                ref="file"
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
                            <div>
                                <q-btn
                                    label="Upload"
                                    color="secondary"
                                    type="submit"
                                    class="font-medium" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout.vue'
import BigCard from '@/components/Big-Card.vue'
import { ref, computed, ExactCardImg, useForm } from '@/utils'

const file = ref(null)
const name = window.location.pathname.split('/')[2]
const allImages = ref([]);
let SELECTED_CARD_UUID = null

const props = defineProps({
    giftcards: {
        type: Array,
        default: () => [],
    },
})

const imgType = computed(() => {
    return ExactCardImg(name)
})

const form = useForm({
    amount: 0,
    type: '',
    comment: '',
})



const AMOUNT_TO_RECEIVE = computed(() => {
    const selectedCard = props.giftcards.find((card) => card.type === form.type)
    SELECTED_CARD_UUID = selectedCard ? selectedCard.uuid : null
    return selectedCard ? selectedCard.rate * form.amount : 0
    // return selectedCard ? selectedCard.rate * form.amount : 0
})

// const amt = ref(null)


const handleChange = () => {
      if (file.value.files) {
        const allFiles = file.value.files;
        for (let singleFile of allFiles) {
          const reader = new FileReader();
          reader.onload = () => {
            allImages.value.push(reader.result);
          };
          reader.readAsDataURL(singleFile);
        }
      }
    }

const submit = () => {
    form.transform((data) => ({
        ...data,
    }))
        // eslint-disable-next-line no-undef
        .post(`/users/cardlets-make/${SELECTED_CARD_UUID}`, {
            onFinish: () => {
                form.reset('rate')
                // $q.notify({
                //         type: 'positive',
                //         message: 'Card Rate Updated',
                //         position: 'top-right'
                //         });
            },
        })
}
</script>

<style lang="scss" scoped></style>
