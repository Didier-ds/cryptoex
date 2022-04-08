<template>
    <main-layout>
        <div>
            <div class="flex flex-row justify-between items-center px-4">
                <!-- <GoBack /> -->
                <button @click="prevStep" class="back_btn cursor-default rounded bg-gray-100 sm:bg-transparent sm:hover:bg-gray-100 p-2 select-none flex items-center">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.4"
                            d="M15.7975 10.8097L19.4967 10.4825C20.3269 10.4825 21 11.1622 21 12.0004C21 12.8387 20.3269 13.5183 19.4967 13.5183L15.7975 13.1912C15.1463 13.1912 14.6183 12.6581 14.6183 12.0004C14.6183 11.3417 15.1463 10.8097 15.7975 10.8097Z"
                            fill="#130F26" />
                        <path
                            d="M3.37522 10.8698C3.43303 10.8115 3.64903 10.5647 3.85194 10.3598C5.03556 9.07656 8.12607 6.97815 9.74278 6.33596C9.98823 6.23352 10.6089 6.01542 10.9417 6C11.2591 6 11.5624 6.0738 11.8515 6.2192C12.2126 6.42299 12.5006 6.74463 12.6598 7.12355C12.7613 7.38572 12.9206 8.17331 12.9206 8.18763C13.0787 9.04792 13.1649 10.4469 13.1649 11.9934C13.1649 13.465 13.0787 14.8067 12.9489 15.6813C12.9347 15.6967 12.7755 16.6738 12.602 17.0086C12.2846 17.6211 11.6638 18 10.9995 18H10.9417C10.5086 17.9857 9.59878 17.6057 9.59878 17.5924C8.06825 16.9502 5.05083 14.9532 3.83776 13.6258C3.83776 13.6258 3.49522 13.2844 3.34685 13.0718C3.11558 12.7656 2.99995 12.3866 2.99995 12.0077C2.99995 11.5847 3.12977 11.1915 3.37522 10.8698Z"
                            fill="#130F26" />
                    </svg>

                    <span class="px-2 myHidden hidden font-medium work">Back</span>
                </button>
                <div class="">
                    <h2 class="text-lg work font-semibold capitalize p-ripple">
                        {{ cardname.name }} Card
                    </h2>
                </div>
            </div>
            <div class="">
                <section class="max-w-xl w-full mx-auto p-4">
                    <template v-if="isLoading">
                        <div class="h-[25rem] flex justify-center items-center">
                            <q-spinner-tail color="primary" size="3em" />
                        </div>
                    </template>
                    <template v-else>
                        <template v-if="currentStep === 0">
                            <div
                                class="flex flex-col items-center justify-center">
                                <BigCard
                                    :img-type="imgType"
                                    :name="cardname.name"
                                    :filename="cardname.filename" />
                                <inertia-link href="/giftcards"
                                    ><q-btn
                                        label="Change Card"
                                        flat
                                        color="secondary"
                                        class="mx-auto font-semibold work"
                                        no-caps
                                /></inertia-link>
                            </div>
                            <div class="options_container">
                                <div class="md:grid grid-cols-2 my-4 gap-2">
                                    <div class="mb-4 country_select_container">
                                        <p class="font-medium work mb-2">
                                            Country
                                        </p>
                                        <CountryDropdown
                                            :countries="myFilteredCountries"
                                            :selected-country="selectedCountry"
                                            @is-selected-country="
                                                isSelectedCountry
                                            " />
                                       <div v-if="v$.country.$error" class="text-red-600 work text-xs pt-1">Country field is required.</div>
                                    </div>
                                    <div class="mb-4 country_select_container">
                                        <p class="font-medium work mb-2">
                                            Category
                                        </p>
                                        <CategoryDropdown
                                            :categories="filteredCategories"
                                            :selected-category="selectedCategory"
                                            @is-selected-category="
                                                isSelectedCategory
                                            " />
                                       <div v-if="v$.category.$error" class="text-red-600 work text-xs pt-1">Category field is required.</div>
                                    </div>
                                </div>
                                <div class="md:grid grid-cols-2 my-4 gap-2">
                                    <div class="mb-4 country_select_container">
                                        <p class="font-medium work mb-2">
                                            Price Range
                                        </p>
                                        <PricerangeDropdown
                                            :price-ranges="filteredPriceRanges"
                                            :selected-price-range = "selectedPriceRange"
                                            @is-selected-price-range="
                                                isSelectedPriceRange
                                            " />
                                       <div v-if="v$.rate.$error" class="text-red-600 work text-xs pt-1">Please Select Price Range</div>

                                    </div>
                                    <div class="mb-4 country_select_container">
                                        <p class="font-medium work mb-2">
                                            Amount
                                        </p>
                                        <input
                                            v-model="form.amount"
                                            :min="priceRange.min"
                                            :max="priceRange.max"
                                            class="w-full py-3 pl-3 pr-10 text-left bg-white rounded border shadow font-medium cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm"
                                            type="number" />
                                       <div v-if="v$.amount.$error" class="text-red-600 work text-xs pt-1">Amount field is required.</div>

                                    </div>
                                </div>
                                <div class="text-center">
                                    <p class="font-medium work">
                                        We will Pay You
                                    </p>
                                    <p
                                        class="font-bold leading-loose text-green-800 ibm text-2xl">
                                        &#8358;{{
                                            new Intl.NumberFormat(
                                                'en-US'
                                            ).format(TOTAL_AMOUNT)
                                        }}
                                    </p>
                                </div>
                            </div>
                            <div class="my-4 w-full">
                                <button
                                    v-ripple
                                    class="px-4 w-full mx-auto md:w-8/12 py-3 block work relative shadow-lg bg-primary rounded text-white font-medium"
                                    @click="moveToTwo">
                                    Next
                                </button>
                            </div>
                        </template>
                        <template v-if="currentStep === 1">
                            <CardInfoConfirmation 
                            :card-name="cardname.name" 
                            :card-type="form.category"
                            :currency-image-url="myFilteredCountries[selectedCountry].icon_url" 
                            :currency-type="myFilteredCountries[selectedCountry].type" 
                            :acc-number="banks[0].account_number"
                            :acc-name="banks[0].account_name"
                            :bank-name="banks[0].bank_name"
                            :price="+form.amount"
                            :rate="+form.rate"
                            :total-amount="new Intl.NumberFormat('en-US').format(TOTAL_AMOUNT)"
                            />
                            <!-- <div
                                class="border-dashed work bg-white border shadow-lg rounded-lg p-4">
                                <p class="font-medium text-center my-2">
                                    Transaction Summary
                                </p>
                                <div class="grid divide-y border-dashed">
                                    <div
                                        class="flex justify-between py-3 items-center">
                                        <p class="text-gray-600">Giftcard</p>
                                        <p class="font-medium capitalize">
                                            {{ cardname.name }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex justify-between py-3 border-dashed items-center">
                                        <p class="text-gray-600">Currency</p>
                                        <p
                                            class="font-medium flex items-center uppercase">
                                            <img
                                                :src="myFilteredCountries[selectedCountry].icon_url"
                                                class="px-2" />{{
                                                myFilteredCountries[selectedCountry].type
                                            }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex justify-between py-3 border-dashed items-center">
                                        <p class="text-gray-600">Card type</p>
                                        <p class="font-medium flex uppercase">
                                            {{ form.category }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex justify-between py-3 border-dashed items-center">
                                        <p class="text-gray-600">
                                            Processing Time
                                        </p>
                                        <p class="font-medium flex uppercase">
                                            Usually within 10 Mins and may vary
                                        </p>
                                    </div>
                                    <div
                                        class="flex justify-between py-3 border-dashed items-center">
                                        <p class="text-gray-600">Card Price</p>
                                        <p class="font-medium flex uppercase">
                                            ${{ form.amount }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex justify-between py-3 border-dashed items-center">
                                        <p class="text-gray-600">Rate</p>
                                        <p class="font-medium flex uppercase">
                                            &#8358;{{ form.rate }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex justify-between py-3 border-dashed items-center">
                                        <p class="text-gray-600">Amount</p>
                                        <p
                                            class="font-bold text-base flex uppercase text-green-800 ibm">
                                            &#8358;{{
                                                new Intl.NumberFormat(
                                                    'en-US'
                                                ).format(TOTAL_AMOUNT)
                                            }}
                                        </p>
                                    </div>
                                    <div class="py-3 border-dashed">
                                        <p class="text-gray-600 mb-2">
                                            Bank Account
                                        </p>
                                        <div
                                            class="rounded work flex bg-gray-50 rounded p-2">
                                            <div class="m-4">
                                                <q-icon
                                                    name="account_balance"
                                                    style="
                                                        color: #ccc;
                                                        font-size: 2em;
                                                    " />
                                            </div>
                                            <div class="pl-2">
                                                <p class="font-medium">
                                                    {{ banks[0].account_name }}
                                                </p>
                                                <p class="">
                                                    {{
                                                        banks[0].account_number
                                                    }}
                                                </p>
                                                <p
                                                    class="text-sm text-gray-700">
                                                    {{ banks[0].bank_name }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div> -->
                            <div class="my-4 w-full">
                                <button
                                    v-ripple
                                    class="px-4 w-full mx-auto md:w-8/12 work py-3 block relative shadow-lg bg-primary rounded text-white font-medium"
                                    @click="nextStep">
                                    Confirm
                                </button>
                            </div>
                        </template>
                        <template v-if="currentStep === 2">
                            <div class="">
                                <p
                                    class="text-base text-center capitalize work py-4 text-center">
                                    Upload a Screenshot Containing your Giftcard
                                    of the
                                    <span class="text-primary uppercase"
                                        >{{ form.category }} {{ form.country }}
                                        {{ cardname.name }} ${{
                                            form.amount
                                        }}</span
                                    >
                                    for confirmation
                                </p>
                            </div>
                            <ul v-show="files.length" class="grid grid-cols-4">
                                <li
                                    v-for="file of files"
                                    class="p-2"
                                    :key="file.id">
                                    <div
                                        class="w-full h-full p-2 rounded border">
                                        <img
                                            :src="file.url"
                                            class="w-full my-auto" />
                                    </div>
                                </li>
                            </ul>
                            <div
                                :data-active="isDropzoneActive"
                                @drop.prevent="dropFiles"
                                @dragenter.prevent="setActive"
                                @dragover.prevent="setActive"
                                @dragleave.prevent="setInactive"
                                class="border-dashed my-4 px-4 py-4 rounded bg-white flex flex-col text-center justify-between items-center border-2">
                                <q-icon
                                    name="cloud_upload"
                                    style="color: #ccc; font-size: 5em" />
                                <p class="font-medium work leading-4 py-4">
                                    Drag and Drop or
                                    <label
                                        class="text-primary inline"
                                        for="image"
                                        >Browse</label
                                    >
                                </p>
                                <input
                                    id="image"
                                    ref="file"
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    hidden
                                    @change="inputFiles" />
                            </div>
                            <div class="my-4 w-full">
                                <button
                                    v-ripple
                                    class="px-4 w-full mx-auto md:w-8/12 py-3 block work relative shadow-lg bg-primary rounded text-white font-medium"
                                    @click="moveToTwo">
                                    Submit
                                </button>
                            </div>
                        </template>
                    </template>
                    <!-- <div class="my-4 w-full">
                        <button
                            v-ripple
                            class="px-4 w-full mx-auto md:w-8/12 py-3 block relative shadow-lg bg-primary rounded text-white font-medium"
                            @click="nextStep">
                            Next
                        </button>
                    </div> -->
                </section>
                <!-- <aside class="p-4 h-full">
                    <div class=" bg-white h-full w-full shadow-wide rounded"></div>
                </aside> -->
            </div>
        </div>
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout.vue'
// import GreenCheck from '@/components/reusables_/GreenCheck.vue'
import {CountryDropdown, CategoryDropdown, PricerangeDropdown, BigCard, CardInfoConfirmation } from '@/components/CardUploadComponents'
import useFilter from '@/components/CardUploadComponents/utils'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { ref, useForm, onMounted,  computed, watch, loader } from '@/utils'
// import { onBeforeUnmount } from 'vue'
import useDropzone from '@/utils/Dropzone.js'
// import useBack from '@/utils/BackSteps.js'
// import { isNull } from 'util';

const props = defineProps({
    categories: {
        type: Array,
        default: () => [],
    },
    cardname: {
        type: Object,
        default: () => {},
    },
    banks: {
        type: Array,
        default: () => [],
    },
})


const priceRange = ref({
    min: null,
    max: null,
})

const form = useForm({
    country: '',
    category: '',
    // priceRange: '',
    rate: null,
    amount: null,
})



//loader spinner toggler
const { isLoading, toggleLoader } = loader()

//
const currentStep = ref(0)

const isDropzoneActive = ref(false)

// dropzone import
const { files, inputFiles, dropFiles } = useDropzone()

// const { handleBackEvent, unhandleBackEvent } = useBack()

// select dropdonw filters
const {selectedCategory, selectedCountry, filteredPriceRanges, filteredCategories, selectedPriceRange, filteredCountries} = useFilter()

const myFilteredCountries = computed(() => {return filteredCountries(props.categories)})



const setActive = () => {
    isDropzoneActive.value = true
}

const setInactive = () => {
    isDropzoneActive.value
}

const moveToTwo = async () => {
    const isFormCorrect = await v$.value.$validate()
    if(isFormCorrect) {return nextStep() }
    return false
}
// function to increment currentStep value
const nextStep = async () => {
    if (currentStep.value >= 2) {
        return false
    }
    toggleLoader()
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(currentStep.value++)
            window.scrollTo(0, 0)
        }, 1000)
    })
    toggleLoader()
}

const prevStep = () => {
    if(currentStep.value <= 0) {
        return false
    } 
    currentStep.value--
}



// triggers when user selects country
const isSelectedCountry = (index) => {
    form.country = myFilteredCountries.value[index].type
    selectedCountry.value = index
}

// triggers when user selects category
const isSelectedCategory = (index) => {
    form.category = index != null ? filteredCategories.value[index].type : null
    selectedCategory.value = index
}

// triggers when user selects pricerange
const isSelectedPriceRange = (index) => {
    const { min, max, rate } =
        index != null
            ? filteredCategories.value[index]
            : { min: null, max: null, rate: null }
    form.rate = rate
    selectedPriceRange.value = index
    priceRange.value = { min, max }
}

const TOTAL_AMOUNT = computed(() => {
    return form.rate * form.amount
})

watch(
    () => form.country,
    () => {
        const foundCategories = props.categories.filter(
            (card) => card.country === form.country
        )
        filteredCategories.value = foundCategories
    }
)

watch(
    () => form.category,
    () => {
        const foundPriceRanges = props.categories.filter(
            (card) =>
                card.country === form.country && card.type === form.category
        )
        filteredPriceRanges.value = foundPriceRanges
    }
)


// form validation

const rules = {
      country: { required }, // Matches state.firstName
      category: { required },
    //   priceRange: { required },
      amount: { required },
      rate: { required }
    }

const v$ = useVuelidate(rules, form)

// onMounted(() => {
//     handleBackEvent(prevStep)
// })

// onBeforeUnmount(() => {
//     alert('me')
//     unhandleBackEvent(prevStep)
// })
</script>

<style lang="scss" scoped>
.main_container {
    // grid-template-columns: 1fr 25em;
}
.option_btn:nth-child(odd) {
    margin-right: 1em;
}
.option_btn {
    margin_bottom: 1em;
}
@media (min-width: 769px) {
    .myHidden {
        display: block !important;
    }
}
</style>
