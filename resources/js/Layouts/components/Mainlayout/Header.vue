<script setup>
import ProfilePic from '@/components/reusables_/ProfilePic.vue'
import MenuDropDown from '@/components/reusables_/MenuDropdown.vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { Inertia } from '@/utils'
defineEmits(['toggleSideBar'])

const isDrop = ref(false)

const toggleModal = () => {
    isDrop.value = !isDrop.value
}

const logout = () => {
    // eslint-disable-next-line no-undef
    Inertia.post(route('logout'))
    // emits('toggleModal')
}
// const toggleSideBar = () => {

// };
</script>
<template>
    <header
        class="flex py-5 px-4 static inset-x-0 w-full justify-between items-center">
        <div class="logo mx-2" @click="$emit('toggleSideBar')">
            <div class="myHidden">
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z"
                        fill="#111827" />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z"
                        fill="#111827" />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 15C3 14.4477 3.44772 14 4 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15Z"
                        fill="#111827" />
                </svg>
            </div>

            <!-- <img src="/img/logo.svg" class="w-full" alt="" /> -->
        </div>
        <div class="w-56 text-right ">
            <Menu as="div" class="relative inline-block text-left">
                <MenuButton
                    class="capitalize select-none flex items-center">
                    <ProfilePic :is-size="'small'" />
                    <span class="hidden myHidden font-medium work px-2">{{ $page.props.user.fullname }}</span>
                    <ChevronDownIcon
                            class="w-5 h-5 -mr-1 text-secondary"
                            aria-hidden="true"
                        />
                </MenuButton>

                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                    >
                    <MenuItems
                    class="absolute right-0 w-56 mt-2 work z-20 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                        <inertia-link 
                            href="/giftcards"
                            :class="[
                            active ? 'bg-primary text-white' : 'text-gray-900',
                            'group flex rounded-md items-center w-full font-medium cursor-default px-2 py-2 text-sm',
                            ]"
                        >
                            Trade Giftcards
                        </inertia-link>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <inertia-link 
                            href="/sell-bitcoin"
                            :class="[
                            active ? 'bg-primary text-white' : 'text-gray-900',
                            'group flex rounded-md items-center w-full font-medium cursor-default px-2 py-2 text-sm',
                            ]"
                        >
                            Sell Bitcoin
                        </inertia-link>
                        </MenuItem>
                    </div>
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                        <inertia-link 
                            href="/user/transactions"
                            :class="[
                            active ? 'bg-primary text-white' : 'text-gray-900',
                            'group flex rounded-md items-center w-full font-medium cursor-default px-2 py-2 text-sm',
                            ]"
                        >
                            Transactions
                        </inertia-link>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <inertia-link 
                            href="/settings/profile"
                            :class="[
                            active ? 'bg-primary text-white' : 'text-gray-900',
                            'group flex rounded-md items-center w-full font-medium cursor-default px-2 py-2 text-sm',
                            ]"
                        >
                            Settings
                        </inertia-link>
                        </MenuItem>
                    </div>

                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                        <button 
                            @click="logout"
                            :class="[
                            active ? 'bg-negative text-white' : 'text-gray-900',
                            'group flex rounded-md items-center w-full font-medium cursor-default px-2 py-2 text-sm',
                            ]"
                        >
                            <DeleteIcon
                            :active="active"
                            class="w-5 h-5 mr-2 text-violet-400"
                            aria-hidden="true"
                            />
                            Sign Out
                        </button>
                        </MenuItem>
                    </div>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
        <!-- <div class="capitalize select-none flex items-center">
             <div class="px-4"><el-button v-if="role" @click="() => $router.push({'path': '/admin'})" color="#1D4ED8" style="color: white">Admin Dashboard</el-button></div> 
            <div
                class="capitalize select-none flex items-center"
                @click="toggleModal()">
                <ProfilePic :is-size="'small'" /><span
                    class="hidden myHidden font-medium work px-2"
                    >{{ $page.props.user.fullname }}</span
                >
                <div>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                            fill="#111827" />
                    </svg>
                </div>
            </div>
        </div>
        <transition name="fade">
            <MenuDropDown
                v-if="isDrop"
                @toggle-form="toggleForm"
                @toggle-modal="toggleModal" />
        </transition> -->
    </header>
</template>
<style lang="scss" scoped>
header {
    z-index: 5;
}
@media (min-width: 769px) {
    .myHidden {
        display: block !important;
    }
}

.disabled, .disabled *, [disabled], [disabled] * {
  outline: 0 !important;
  cursor: default !important;
  opacity: 1 !important;
}

.fade-enter-active,
.fade-leave-active {
    transition: 0.2s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
