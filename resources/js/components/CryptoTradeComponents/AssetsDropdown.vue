<template>
  <div class="w-full work">
    <Listbox v-model="selectedVendor">
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full py-3 pl-3 pr-10  text-left bg-white rounded border shadow cursor-default focus:outline-none focus-visible:ring-1 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-cyan-300 focus-visible:ring-offset-2 focus-visible:border-cyan sm:text-sm"
        >
          <span class="block truncate">{{ selectedVendor ? $page.props.vendors[selectedVendor - 1].name :  'Select Vendor' }}</span>
          <span
            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
          >
            <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute w-full py-1 mt-1 z-10 overflow-auto text-sm bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm"
          >
            <ListboxOption
              v-for="(vendor, index) in $page.props.vendors"
              v-slot="{ active, selected }"
              :key="vendor.name"
              :value="index + 1"
              as="template"
            >
              <li
                :class="[
                  active ? 'text-black bg-gray-100'
                         : 'text-gray-800',
                  'cursor-default select-none relative py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ vendor.name }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-cyan-600"
                >
                  <CheckIcon class="w-5 h-5" aria-hidden="true" />
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
import { ref } from 'vue'
import {
  Listbox,
//   ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
import {watch} from '@/utils'
defineProps({
    vendors: {
        type: Array,
        default: () => []
    }
})
const emits = defineEmits(['isSelectedVendor'])
const selectedVendor = ref(null)
watch(selectedVendor, () => {
    console.log(selectedVendor.value);
    emits('isSelectedVendor', selectedVendor.value)
})
</script>
