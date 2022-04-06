<template>
    <main-layout>
        <div>
            <div class="flex flex-row justify-between items-center px-4">
                <GoBack />
                <div class="">
                    <h2 class="text-lg work font-semibold capitalize p-ripple">
                        {{ cardname.name }} Card
                    </h2>
                </div>
            </div>
            <div class="">
                <section class="max-w-xl w-full mx-auto p-4">
                    <template v-if="step === 0">
                        <div class="flex flex-col items-center justify-center">
                            <BigCard
                                :img-type="imgType"
                                :name="cardname.name"
                                :filename="cardname.filename" />
                                <inertia-link href="/giftcards"><q-btn label="Change Card" flat color="secondary" class="mx-auto font-semibold work" no-caps/></inertia-link>
                        </div>
                        <div class="options_container">
                            <div class="md:grid grid-cols-2 my-4 gap-2">
                                <div class="mb-4 country_select_container">
                                    <p class="font-medium work mb-2">Select Country</p>
                                    <CountrySelect :countries="filteredCountries" :selected-country="selectedCountry" @is-selected-country="isSelectedCountry"/>
                                </div>
                                <div class="mb-4 country_select_container">
                                    <p class="font-medium work mb-2">Select Category</p>
                                    <CategorySelect :categories="filteredCategories" @is-selected-category="isSelectedCategory"/>                                    
                                </div>
                            </div>
                            <div class="md:grid grid-cols-2 my-4 gap-2">
                                <div class="mb-4 country_select_container">
                                    <p class="font-medium work mb-2">Select Price Range</p>
                                    <PriceRangeSelect :price-ranges="filteredPriceRanges" @is-selected-price-range="isSelectedPriceRange"/>
                                </div>
                                <div class="mb-4 country_select_container">
                                    <p class="font-medium work mb-2">Amount</p>
                                    <input v-model="form.amount" :min="priceRange.min" :max="priceRange.max" class="w-full py-3 pl-3 pr-10 text-left bg-white rounded border shadow font-medium cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75  focus-visible:ring-offset-2  sm:text-sm" type="number"/>
                                </div>
                            </div>
                            <div class="text-center">
                                <p class="font-medium work">We will Pay You</p>
                                <p class="font-bold leading-loose text-green-800 ibm text-2xl">&#8358;{{new Intl.NumberFormat('en-US').format(TOTAL_AMOUNT)}}</p>
                            </div>
                        </div>
                    </template>
                    <template v-if="step === 1">
                        <div class="border-dashed work bg-white border shadow-lg rounded-lg p-4">
                            <p class="font-medium text-center my-2">Transaction Summary</p>
                            <div class="grid divide-y border-dashed">
                                <div class="flex justify-between  py-3   items-center">
                                    <p class="text-gray-600 ">Giftcard</p>
                                    <p class="font-medium capitalize">{{cardname.name}}</p>
                                </div>
                                <div class="flex justify-between  py-3 border-dashed  items-center">
                                    <p class="text-gray-600 ">Currency</p>
                                    <p class="font-medium flex items-center uppercase"><img :src="selectedCountry.icon_url" class="px-2"/>{{selectedCountry.type}}</p>
                                </div>
                                <div class="flex justify-between  py-3 border-dashed  items-center">
                                    <p class="text-gray-600 ">Card type</p>
                                    <p class="font-medium flex uppercase">{{form.category}}</p>
                                </div>
                                <div class="flex justify-between  py-3 border-dashed  items-center">
                                    <p class="text-gray-600 ">Processing Time</p>
                                    <p class="font-medium flex uppercase">Usually within 10 Mins and may vary</p>
                                </div>
                                <div class="flex justify-between  py-3 border-dashed  items-center">
                                    <p class="text-gray-600 ">Card Price</p>
                                    <p class="font-medium flex uppercase">${{form.amount}}</p>
                                </div>
                                <div class="flex justify-between  py-3 border-dashed  items-center">
                                    <p class="text-gray-600 ">Rate</p>
                                    <p class="font-medium flex uppercase">&#8358;{{form.rate}}</p>
                                </div>
                                <div class="flex justify-between  py-3 border-dashed  items-center">
                                    <p class="text-gray-600 ">Amount</p>
                                    <p class="font-bold text-base flex uppercase text-green-800 ibm ">&#8358;{{new Intl.NumberFormat('en-US').format(TOTAL_AMOUNT)}}</p>
                                </div>
                                <div class="py-3 border-dashed">
                                    <p class="text-gray-600 mb-2">Bank Account</p>
                                    <div class="rounded work flex bg-gray-50 rounded p-2">
                                        <div class="m-4">
                                            <q-icon name="account_balance" style="color: #ccc; font-size: 2em;"/>
                                        </div>
                                        <div class="pl-2">
                                            <p class="font-medium ">{{banks[0].account_name}}</p>
                                            <p class="">{{banks[0].account_number}}</p>
                                            <p class="text-sm text-gray-700">{{banks[0].bank_name}}</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div></div>
                        </div>
                    </template>
                    <template v-if="step === 2">
                        <div class="">
                            <p class="text-base text-center capitalize work py-4 text-center">Upload a Screenshot Containing your Giftcard of the <span class="text-primary uppercase">{{form.category}} {{form.country}} {{cardname.name}} ${{form.amount}}</span> for confirmation</p>
                        </div>
                        <ul v-show="files.length" class="grid grid-cols-4">
                            <li v-for="file of files" class="p-2" :key="file.id">
                                <div class="w-full h-full p-2 rounded border">
                                    <img :src="file.url" class="w-full my-auto"/>
                                </div>
                                
                                </li>
                        </ul>
                        <div :data-active="isDropzoneActive" @drop.prevent="addFiles" @dragenter.prevent="setActive" @dragover.prevent="setActive" @dragleave.prevent="setInactive"  class="border-dashed my-4 px-4 py-4 rounded bg-white flex flex-col text-center justify-between items-center border-2">
                            <q-icon name="cloud_upload" style="color: #ccc; font-size: 5em;"/>
                            <p class="font-medium work leading-4 py-4">Drag and Drop or <label class="text-primary inline" for="image">Browse</label></p>
                                <input
                                    id="image"
                                    ref="file"
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    @change="preview"
                                    />
                        </div>
                    </template>
                    
                    <div class="my-4 w-full">
                                <button
                                    v-ripple
                                    class="px-4 w-full mx-auto md:w-8/12 py-3 block relative shadow-lg bg-primary rounded text-white font-medium"
                                    @click="step++">
                                    Next
                                </button>
                            </div>
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
import BigCard from '@/components/Big-Card.vue'
import CountrySelect from '@/components/CountrySelectDropdown.vue'
import CategorySelect from '@/components/CategorySelectDropdown.vue'
import PriceRangeSelect from '@/components/PriceRangeSelectDropdown.vue'
import { ref, useForm, onMounted, computed, watch } from '@/utils'
import useDropzone from '@/utils/Dropzone.js'
// import { isNull } from 'util';

const isDropzoneActive = ref(false)

const { files, addFiles } = useDropzone()

const setActive = () => {
    isDropzoneActive.value = true
}

const setInactive = () => {
    isDropzoneActive.value
}


const step=ref(0)
// const isDropZoneActive = ref(false)
const selectedCountry = ref(null)
const priceRange = ref({
    min: null,
    max: null
})
const form = useForm({
    country: '',
    category: '',
    priceRange: '',
    rate: null,
    amount: null
})
const AMOUNT = ref(0) 
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
        default: () => []
    }
})
const filteredCategories = ref([])
const filteredPriceRanges = ref([])
const filteredCountries = computed(() => {
    const filteredResult = []
    const setObj = {}
     props.categories.map((category) => {
         if (!Object.prototype.hasOwnProperty.call(setObj, category.currency.currency)){
         const newObj = {
             type: category.currency.currency,
             icon_url: category.currency.icon_url,
             symbol: category.currency.symbol,
             // isSelected: false,
         }
         filteredResult.push(newObj)
         setObj[newObj.type] = true}
     })
     return filteredResult;
})

const isSelectedCountry = (index) => {
    form.country = filteredCountries.value[index].type;
    selectedCountry.value = filteredCountries.value[index]
}
const isSelectedCategory = (index) => {
     form.category = index != null ? filteredCategories.value[index].type : null
}

const isSelectedPriceRange = (index) => {
    const {min, max, rate} = index != null ? filteredCategories.value[index] : {min:null, max: null, rate: null}
    form.rate = rate;
    priceRange.value = {min, max}
}

const TOTAL_AMOUNT = computed(() => {
    return form.rate * form.amount
})
watch(() => form.country, () => {
    const foundCategories = props.categories.filter(
     (card) => card.country === form.country
   );
   filteredCategories.value = foundCategories
})

watch(() => form.category, () => {
    const foundPriceRanges = props.categories.filter(
     (card) => card.country === form.country && card.type === form.category
   );
   filteredPriceRanges.value = foundPriceRanges
})

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
</style>
