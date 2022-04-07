<template>
    <div class="">
        <Listbox v-model="selectedCountry">
            <div class="relative mt-1">
                <ListboxButton
                    class="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded border shadow cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-cyan focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                    <span
                        class="flex uppercase font-semibold items-center work truncate">
                        <template v-if="selectedCountry === null">
                            <p class="px-2">--</p>
                        </template>
                        <template v-else>
                            <div class="mr-4">
                                <img
                                    :src="countries[selectedCountry].icon_url"
                                    class="w-full"
                                    :alt="countries[selectedCountry].type" />
                            </div>
                            <p class="mr-4">
                                {{ countries[selectedCountry].type }}
                            </p>
                            <p>{{ countries[selectedCountry].symbol }}</p>
                        </template>
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
                        class="absolute w-full py-1 mt-1 z-10 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <ListboxOption
                            v-slot="{ active, selected }"
                            v-for="(country, index) in countries"
                            :key="country.type"
                            :value="index"
                            as="template">
                            <li
                                :class="[
                                    active
                                        ? 'text-black bg-gray-100'
                                        : 'text-gray-800',
                                    'cursor-default select-none relative flex py-2 pr-10 text-sm pl-4',
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
                                    <div class="mr-4">
                                        <img
                                            :src="country.icon_url"
                                            class="w-full"
                                            :alt="country.type" />
                                    </div>
                                    <p class="mr-4">{{ country.type }}</p>
                                    <p>{{ country.symbol }}</p>
                                    <!-- {{ Country.name }} -->
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
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

const props = defineProps({
    countries: {
        type: Array,
        default: () => [],
    },
    selectedCountry: {
        type: Number,
        default: null,
    },
})
const emits = defineEmits(['isSelectedCountry'])

const selectedCountry = ref(props.selectedCountry)
watch(selectedCountry, () => {
    emits('isSelectedCountry', selectedCountry.value) // props.countries.findIndex(a => a.type === selectedCountry.value.type)
})
</script>
