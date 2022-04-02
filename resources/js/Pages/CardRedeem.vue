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

const step=ref(0)
const form = useForm({
    country: '',
    category: ''
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
    form.category = filteredCategories.value[index].type;
}

watch(() => form.country, () => {
    
    const foundCategories = props.categories.filter(
     (card) => card.country === form.country
   );
//    console.log(foundCategories)
   filteredCategories.value = foundCategories
})

watch(() => form.category, () => {
    const foundPriceRanges = props.categories.filter(
     (card) => card.country === form.country && card.type === form.category
   );
   filteredPriceRanges.value = foundPriceRanges
})
// const allCountries = ref([])
// const allCategories = ref([])
// const selectedCountry = ref(null)
// const selectedCategory = ref(null)
// const allPricerange = ref([])
// const recreateColor = () => {
//     const setObj = {}
//     props.categories.map((category) => {
//         if (!Object.prototype.hasOwnProperty.call(setObj, category.currency.currency)){
//         const newObj = {
//             type: category.currency.currency,
//             icon_url: category.currency.icon_url,
//             symbol: category.currency.symbol,
//             // isSelected: false,
//         }
//         allCountries.value.push(newObj)
//         setObj[newObj.type] = true}
//     })
// }

// const RECREATE_DATA = async (oldVal, newVal, type) => {
//     // startLoader();
//   const newArr = [];
//   await new Promise((resolve) =>
//     setTimeout(() => {
//       resolve(
//         oldVal.map((product) => {
//            const newObj = new OPTION_OBJ(product[type]);
//           newArr.push(newObj);
//         }),
//         (newVal.value = newArr)
//       );
//     }, 1000)
//   );
// //   startLoader();
// }


// // triggers when user selects country
// const isSelectedCountry = (index) => {
// //   allCountries.value.forEach((c) => {
// //     c.isSelected = false;
// //   });
// //   allCountries.value[index].isSelected = true;
//   selectedCountry.value = allCountries.value[index];
//   selectedCategory.value = null
// };
// const isSelectedCategory = (index) => {
// //   allCategories.value.forEach((c) => {
// //     c.isSelected = false;
// //   });
// //   allCategories.value[index].isSelected = true;
//   selectedCategory.value = allCategories.value[index];
// };

// const filterCategory = (val) => {

// }
// watch(selectedCountry, () => {
//     const foundCategories = props.categories.filter(
//     (card) => card.country === selectedCountry.value.type
//   );
//   allCategories.value = foundCategories
//     // RECREATE_DATA(foundCategories, allCategories, "type");
// })
// watch(selectedCategory, () => {
//     const foundPricerange = props.categories.filter(
//     (card) => card.category === selectedCategory.value && card.country === selectedCountry.value
//   );
//   allPricerange.value = foundPricerange
//     // RECREATE_DATA(foundPricerange, allPricerange, "type");
// })
// onMounted(() => {
//     recreateColor()
// })

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
