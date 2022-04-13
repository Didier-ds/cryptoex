<template>
    <div class="">
        <Listbox v-model="selectedPriceRange">
            <div class="relative mt-1">
                <ListboxButton
                    class="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded border shadow cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-cyan focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                    <span
                        class="flex uppercase font-semibold items-center work truncate">
                        <template v-if="selectedPriceRange === null"
                            ><span class="text-gray-600"
                                >Select Price Range</span
                            ></template
                        >
                        <template v-else
                            >{{ priceRanges[selectedPriceRange].min }} -
                            {{ priceRanges[selectedPriceRange].max }}</template
                        >
                    </span>
                    <span
                        class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon
                            class="w-5 h-5 text-gray-400"
                            aria-hidden="true" />
                    </span>
                </ListboxButton>

                <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    <ListboxOptions
                        class="absolute w-full py-1 mt-1 overflow-auto z-10 text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <ListboxOption
                            v-for="(priceRange, index) in priceRanges"
                            v-slot="{ active, selected }"
                            :key="priceRange.type"
                            :value="index"
                            as="template">
                            <li
                                :class="[
                                    active
                                        ? 'text-black bg-gray-100'
                                        : 'text-gray-800',
                                    'cursor-default select-none relative flex py-2 pr-10 pl-4',
                                ]">
                                <span
                                    v-if="selected"
                                    class="absolute inset-y-0 right-0 flex items-center pr-3 text-cyan">
                                    <CheckIcon
                                        class="w-5 h-5"
                                        aria-hidden="true" />
                                </span>
                                <span
                                    :class="[
                                        selected
                                            ? 'font-semibold'
                                            : 'font-normal',
                                        'flex uppercase  uppercase  items-center work truncate',
                                    ]">
                                    {{ priceRange.min }} - {{ priceRange.max }}
                                </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

const props = defineProps({
    priceRanges: {
        type: Array,
        default: () => [],
    },
    selectedPriceRange: {
        type: Number,
        default: null,
    },
})

const allPriceRanges = ref([])
const selectedPriceRange = ref(props.selectedPriceRange)
const emits = defineEmits(['isSelectedPriceRange'])

watch(selectedPriceRange, () => {
    emits('isSelectedPriceRange', selectedPriceRange.value) //props.categories.findIndex(a => a.type === selectedCategory.value.type)
})
watch(
    () => props.priceRanges,
    () => {
        allPriceRanges.value = props.priceRanges
        selectedPriceRange.value = null
    }
)
</script>
