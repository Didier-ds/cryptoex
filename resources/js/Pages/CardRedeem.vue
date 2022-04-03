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
            <div class="md:grid main_container">
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
                                    <input :min="priceRange.min" :max="priceRange.max" v-model="form.amount" class="w-full py-3 pl-3 pr-10 text-left bg-white rounded border shadow font-medium cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75  focus-visible:ring-offset-2  sm:text-sm" type="number"/>
                                </div>
                            </div>
                            <div class="text-center">
                                <p class="font-medium work">We will Pay You</p>
                                <p class="font-bold leading-loose text-green-800 ibm text-2xl">&#8358;{{new Intl.NumberFormat('en-US').format(TOTAL_AMOUNT)}}</p>
                            </div>
                            <div class="my-4 w-full">
                                <button
                                    v-ripple
                                    class="px-4 w-full mx-auto md:w-8/12 py-3 relative shadow-lg bg-cyan rounded text-white font-medium">
                                    Next
                                </button>
                            </div>
                        </div>
                    </template>
                    <template v-if="step === 1">
                        <div>
                            <!-- <span class="block text-base text-center work font-medium pb-1">You will receive</span> -->
                            <div class="rounded bg-white p-2 ">
                                <div class="">
                                    <span class="work font-medium">$</span>
                                    <input type="number" name="amount" v-model="AMOUNT" class="work outline-none text-lg font-medium"/>
                                </div>
                                <hr class="my-4"/>
                                <div class="grid grid-cols-2 md:grid-cols-4">
                                    <div v-for="i in 4" :key="i" class="p-2">
                                        <button  class="bg-gray-50 work font-medium w-full rounded text-center  p-1">${{i++}}0</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </section>
                <aside class="p-4 h-full">
                    <div class=" bg-white h-full w-full shadow-wide rounded"></div>
                </aside>
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
import { isNull } from 'util';

const step=ref(0)
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
    grid-template-columns: 1fr 25em;
}
.option_btn:nth-child(odd) {
  margin-right: 1em;
}
.option_btn {
    margin_bottom: 1em;
}
</style>
