import { ref } from 'vue'

export default function() {

    const selectedCountry = ref(null)
    const selectedCategory = ref(null)
    const selectedPriceRange = ref(null)
    const filteredCategories = ref([])

    const filteredPriceRanges = ref([])

    const filteredCountries = (categories) => {
        const filteredResult = []
        const setObj = {}
        categories.map((category) => {
            if (!Object.prototype.hasOwnProperty.call(
                    setObj,
                    category.currency.currency
                )) {
                const newObj = {
                    type: category.currency.currency,
                    icon_url: category.currency.icon_url,
                    symbol: category.currency.symbol,
                    // isSelected: false,
                }
                filteredResult.push(newObj)
                setObj[newObj.type] = true
            }
        })
        return filteredResult
    }
    return { selectedCategory, selectedCountry, selectedPriceRange, filteredCategories, filteredCountries, filteredPriceRanges }
}