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
                            <div class="mb-4 country_select_container">
                                <p class="font-medium work mb-2">
                                    Select Country
                                </p>
                                <button
                                    class="border shadow p-2 rounded bg-white">
                                    --
                                </button>
                                <!-- <div class="country_options grid grid-cols-2">
                                    <button
                                        v-for="(country, index) in allCountries"
                                        :key="country"
                                        v-ripple:primary
                                        @click="isSelectedCountry(index)"
                                        class="flex relative border text-md work option_btn bg-white uppercase  justify-between items-center rounded-sm p-2 white-space-1 sm:p-4 select-none relative"
                                        :class="{
                                            'text-gray-600 font-medium' : !country.isSelected,
                                            'bg-white font-semibold text-black border-cyan shadow-md': country.isSelected,
                                        }">
                                        <div class="w-">
                                            <img
                                                :src="country.icon_url"
                                                class="w-full"
                                                :alt="country.type" />
                                        </div>
                                        <p class=" ">{{ country.type }}</p>
                                        <p>{{ country.symbol }}</p>
                                    </button>
                                </div> -->
                            </div>
                            <div class="mb-4 category_select_container">
                                <p class="font-medium work mb-2">
                                    Select Category
                                </p>
                                <div class="country_options grid grid-cols-2">
                                    <button
                                        v-for="(
                                            category, index
                                        ) in allCategories"
                                        :key="category"
                                        v-ripple:primary
                                        @click="isSelectedCategory(index)"
                                        class="relative border text-center text-md work option_btn bg-white uppercase rounded-sm p-2 white-space-1 sm:p-4 select-none relative"
                                        :class="{
                                            'text-gray-600 font-medium':
                                                !category.isSelected,
                                            'bg-white font-semibold text-black border-cyan  shadow-md':
                                                category.isSelected,
                                        }">
                                        <p class=" ">{{ category.type }}</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-if="step === 1">
                        <div>
                            <!-- <span class="block text-base text-center work font-medium pb-1">You will receive</span> -->
                            <div class="rounded bg-white p-2">
                                <div class="">
                                    <span class="work font-medium">$</span>
                                    <input
                                        type="number"
                                        name="amount"
                                        v-model="AMOUNT"
                                        class="work outline-none text-lg font-medium" />
                                </div>
                                <hr class="my-4" />
                                <div class="grid grid-cols-2 md:grid-cols-4">
                                    <div v-for="i in 4" :key="i" class="p-2">
                                        <button
                                            class="bg-gray-50 work font-medium w-full rounded text-center p-1">
                                            ${{ i++ }}0
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </section>
                <aside class="p-4 h-full">
                    <div
                        class="bg-white h-full w-full shadow-wide rounded"></div>
                </aside>
            </div>
        </div>
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout.vue'
import GreenCheck from '@/components/reusables_/GreenCheck.vue'
import BigCard from '@/components/Big-Card.vue'
import { ref, onMounted, watch } from '@/utils'
const step = ref(0)
function OPTION_OBJ(type) {
    this.type = type
    this.isSelected = false
}

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
const allCountries = ref([])
const selectedCountry = ref(null)
const allCategories = ref([])
const recreateColor = () => {
    const setObj = {}
    props.categories.map((category) => {
        if (
            !Object.prototype.hasOwnProperty.call(
                setObj,
                category.currency.currency
            )
        ) {
            const newObj = {
                type: category.currency.currency,
                icon_url: category.currency.icon_url,
                symbol: category.currency.symbol,
                isSelected: false,
            }
            allCountries.value.push(newObj)
            setObj[newObj.type] = true
        }
    })
}

const RECREATE_DATA = async (oldVal, newVal, type) => {
    // startLoader();
    const newArr = []
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve(
                oldVal.map((product) => {
                    const newObj = new OPTION_OBJ(product[type])
                    newArr.push(newObj)
                }),
                (newVal.value = newArr)
            )
        }, 1000)
    )
    //   startLoader();
}
// const newGiftcards = computed(() => {
//     let i
//     const giftcards = props.giftcards.map((any) => any.name)
//     const newArr = []
//     const setObj = {}
//     for (i = 0; i < giftcards.length; i += 1) {
//         if (!Object.prototype.hasOwnProperty.call(setObj, giftcards[i])) {
//             newArr.push(giftcards[i])
//             setObj[giftcards[i]] = true
//         }
//     }
//     return newArr
// })

// triggers when user selects country
const isSelectedCountry = (index) => {
    allCountries.value.forEach((c) => {
        c.isSelected = false
    })
    allCountries.value[index].isSelected = true
    selectedCountry.value = allCountries.value[index].type
}

const filterCategory = (val) => {}
watch(selectedCountry, () => {
    const foundCategories = props.categories.filter(
        (card) => card.country === selectedCountry.value
    )
    RECREATE_DATA(foundCategories, allCategories, 'type')
})
onMounted(() => {
    recreateColor()
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
