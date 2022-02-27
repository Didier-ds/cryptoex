<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue'
import ProfilePic from "@/components/reusables_/ProfilePic.vue";
import { Switch } from '@headlessui/vue'
import { Inertia } from "@/utils";
import HeaderSearch from '@/components/HeaderSearch.vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useStore } from 'vuex'

let store = useStore()

const sideBarToggle = () => {
    let sidenav = store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen

    if (sidenav == false) {
        store.commit('largeSidebar/toggleSidebarProperties')
    } else {
        store.commit('largeSidebar/toggleSidebarProperties')
    }
}

const logout = () => {
  // eslint-disable-next-line no-undef
  Inertia.post(route("logout"));
//   emits("toggleModal");
};

</script>

<template>
    <div class="header-wrapper flex bg-white justify-between px-4">
        <div class="flex items-center">
            <div class="logo flex justify-center">
               <svg
                width="44"
                height="41"
                viewBox="0 0 44 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M43.1696 0.376465L43.3767 0.376465L41.0324 7.68837L39.5413 6.09666L30.7935 14.3536L30.6941 14.3039C29.3604 11.278 23.6114 8.71428 19.0139 10.1174C13.8365 11.7091 9.13954 18.1257 12.3537 24.7909L9.86852 27.2282L9.71941 27.1288C9.0277 24.9858 7.47034 22.6251 8.0295 19.2697C8.38363 17.164 8.71499 15.3091 9.62 13.7568C12.1942 9.34225 18.2394 4.54226 25.7735 6.84278C27.8445 7.4749 29.3832 8.47801 30.9509 9.57852L35.8218 5.00236C36.2132 4.61066 37.4662 3.71739 37.0644 3.36092L35.8715 1.96817V1.91843L43.1696 0.376465Z"
                    fill="#00C2FF" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.1013 1.37125C26.5313 1.27591 30.1017 2.86969 33.2288 5.05207L32.3839 5.94741L30.8431 7.39818C29.1408 6.4759 27.5461 5.55777 25.3757 5.00233C16.336 2.72254 9.19117 9.4044 7.085 15.3982C6.57968 16.8365 6.5714 18.366 6.28975 20.1236C5.93975 22.3101 7.05186 25.3982 7.68143 26.8386L8.52639 28.48L6.14064 30.7184L5.99153 30.6189L4.64954 28.1318C4.08975 26.8166 3.65702 25.4508 3.35726 24.0531C1.01707 13.6116 8.28615 5.51632 14.8884 2.71425C16.1558 2.17954 17.6055 1.86658 19.0552 1.57021L21.1013 1.37125Z"
                    fill="#00C2FF" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M37.8514 9.97656C38.3733 10.4781 38.6508 11.2905 38.9946 11.9662C40.9495 15.8149 41.662 21.7299 39.9886 26.4905C37.1121 34.6812 27.3847 42.3952 15.7832 38.2791C13.9545 37.6304 12.0555 36.8491 10.7632 35.6428L13.1986 33.3631C14.7912 34.2169 16.3196 35.1309 18.3181 35.6428C26.5688 37.7859 32.8624 32.7413 35.6644 27.9745C36.5529 26.4677 38.1496 22.5962 37.7023 19.9164C37.4082 18.1237 37.373 16.5444 36.8076 15.0916L35.4656 12.2066L37.8514 9.97656Z"
                    fill="#00C2FF" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.2009 11.4189C24.7216 11.3526 26.7014 12.4448 28.4079 14.1546C28.7952 14.5422 29.3585 14.9836 29.5014 15.6054L26.9665 17.9349L26.8671 17.8852C26.1899 15.7567 22.8308 14.0572 20.0081 15.1909C17.9992 16.0033 16.8312 17.6199 16.4874 20.1152C16.0235 23.4043 19.772 26.6106 23.247 25.7359C25.0695 25.2758 25.7177 24.1795 26.8257 23.0417L27.6706 23.8375L29.2611 25.5784C25.9476 30.4323 18.1276 30.3929 14.7478 25.6282C14.1616 24.7913 13.7089 23.8684 13.4058 22.8924C11.834 17.7836 15.0957 13.5246 18.4258 12.0987C19.2625 11.7546 20.2628 11.794 21.2009 11.4189Z"
                    fill="#00C2FF" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.1234 13.5081C34.6018 13.8355 34.7861 14.7246 35.0181 15.2987C36.4823 18.9194 36.0681 23.6055 34.4714 26.7391C32.0152 31.5619 25.4875 36.1629 17.8125 33.7443C15.9487 33.1619 14.499 32.1816 13.0907 31.1578H12.9913L6.72873 37.1267L6.82814 37.2262L8.12042 38.7184V38.7681L0.623535 40.3764L3.00928 33.0645L3.3075 33.3132L4.45068 34.6065L10.9121 28.5961C11.6556 27.9951 12.3473 26.7308 13.2978 26.4075C14.5135 29.3505 20.3391 32.0262 24.8787 30.6355C30.201 29.0023 34.7986 22.7246 31.6383 15.9205L34.1234 13.5081Z"
                    fill="#00C2FF" />
                </svg>
            </div>
            <div class="mx-0 sm:mx-3">
                <button
                    @click="sideBarToggle"
                    class="
                        menu-toggle
                        cursor-pointer
                        text-gray-500
                        align-middle
                        focus:outline-none
                    "
                    type="button"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <!-- mega-menu  -->

            <Menu as="div" class="relative inline-block text-left">
                <div>
                    <MenuButton
                        class="
                            btn-sm
                            mx-3
                            md:block
                            hidden
                            focus:outline-none
                            dropdown-button
                        "
                    >
                        <div class="flex items-center">
                            <p class="mr-2">Mega Menu</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </MenuButton>
                </div>

                <MenuItems
                    class="
                        absolute
                        mega-menu
                        left-0
                        mt-2
                        overflow-hidden
                        origin-top-right
                        bg-white
                        rounded-md
                        custom-box-shadow
                        focus:outline-none
                    "
                >
                    <div class="">
                        <MenuItem>
                            <div class="grid grid-cols-12 gap-5">
                                <div
                                    class="
                                        col-span-4
                                        bg-gradient-to-r
                                        from-purple-500
                                        to-purple-700
                                    "
                                >
                                    <div class="p-4">
                                        <p
                                            class="
                                                text-2xl text-white
                                                font-semibold
                                                mb-3
                                            "
                                        >
                                            Mega Menu Sidebar
                                        </p>
                                        <p class="text-white mb-4">
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Asperiores natus laboriosam fugit,
                                            consequatur.
                                        </p>
                                        <p class="text-white mb-4">
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Exercitationem odio amet eos dolore
                                            suscipit placeat.
                                        </p>
                                        <BaseBtn
                                            class="
                                                border border-yellow-500
                                                text-yellow-500
                                                hover:bg-yellow-500
                                                hover:text-white
                                            "
                                            rounded
                                            >Learn More</BaseBtn
                                        >
                                    </div>
                                </div>
                                <div class="col-span-4">
                                    <div class="p-4">
                                        <p
                                            class="
                                                text-purple-500
                                                border-b border-purple-500
                                                inline-block
                                                mb-4
                                            "
                                        >
                                            Features
                                        </p>
                                        <div
                                            class="
                                                menu-icon-grid
                                                flex
                                                justify-between
                                                flex-wrap
                                            "
                                        >
                                            <a
                                                class="
                                                    hover:bg-purple-500
                                                    hover:text-white
                                                    text-gray-600
                                                    p-5
                                                    inline-flex
                                                    flex-col
                                                    items-center
                                                    rounded
                                                    w-24
                                                "
                                                href="#"
                                            >
                                                <i class="i-Shop-4 text-2xl">
                                                </i
                                                >Home
                                            </a>
                                            <a
                                                class="
                                                    hover:bg-purple-500
                                                    hover:text-white
                                                    text-gray-600
                                                    p-5
                                                    inline-flex
                                                    flex-col
                                                    items-center
                                                    rounded
                                                    w-24
                                                "
                                                href="#"
                                            >
                                                <i
                                                    class="i-Library text-2xl"
                                                ></i
                                                >UI Kits
                                            </a>
                                            <a
                                                class="
                                                    hover:bg-purple-500
                                                    hover:text-white
                                                    text-gray-600
                                                    p-5
                                                    inline-flex
                                                    flex-col
                                                    items-center
                                                    rounded
                                                    w-24
                                                "
                                                href="#"
                                            >
                                                <i class="i-Drop text-2xl"></i
                                                >Apps
                                            </a>
                                            <a
                                                class="
                                                    hover:bg-purple-500
                                                    hover:text-white
                                                    text-gray-600
                                                    p-5
                                                    inline-flex
                                                    flex-col
                                                    items-center
                                                    rounded
                                                    w-24
                                                "
                                                href="#"
                                            >
                                                <i
                                                    class="
                                                        i-File-Clipboard-File--Text
                                                        text-2xl
                                                    "
                                                >
                                                </i
                                                >Forms
                                            </a>
                                            <a
                                                class="
                                                    hover:bg-purple-500
                                                    hover:text-white
                                                    text-gray-600
                                                    p-5
                                                    inline-flex
                                                    flex-col
                                                    items-center
                                                    rounded
                                                    w-24
                                                "
                                                href="#"
                                            >
                                                <i
                                                    class="
                                                        i-Checked-User
                                                        text-2xl
                                                    "
                                                ></i
                                                >Sessions
                                            </a>
                                            <a
                                                class="
                                                    hover:bg-purple-500
                                                    hover:text-white
                                                    text-gray-600
                                                    p-5
                                                    inline-flex
                                                    flex-col
                                                    items-center
                                                    rounded
                                                    w-24
                                                "
                                                href="#"
                                            >
                                                <i
                                                    class="i-Ambulance text-2xl"
                                                ></i
                                                >Support
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-4">
                                    <div class="p-4">
                                        <p
                                            class="
                                                text-purple-500
                                                border-b border-purple-500
                                                inline-block
                                                mb-4
                                            "
                                        >
                                            Components
                                        </p>
                                        <ul class="links">
                                            <li>
                                                <a
                                                    class="
                                                        hover:text-purple-500
                                                        text-gray-600
                                                    "
                                                    href="#"
                                                    >Accordion
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    class="
                                                        hover:text-purple-500
                                                        text-gray-600
                                                    "
                                                    href="#"
                                                    >Alerts
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    class="
                                                        hover:text-purple-500
                                                        text-gray-600
                                                    "
                                                    href="#"
                                                    >Buttons
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    class="
                                                        hover:text-purple-500
                                                        text-gray-600
                                                    "
                                                    href="#"
                                                    >Badges
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    class="
                                                        hover:text-purple-500
                                                        text-gray-600
                                                    "
                                                    href="#"
                                                    >Carousels
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    class="
                                                        hover:text-purple-500
                                                        text-gray-600
                                                    "
                                                    href="#"
                                                    >Lists
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    class="
                                                        hover:text-purple-500
                                                        text-gray-600
                                                    "
                                                    href="#"
                                                    >Popover
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    class="
                                                        hover:text-purple-500
                                                        text-gray-600
                                                    "
                                                    href="#"
                                                    >Tables
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    class="
                                                        hover:text-purple-500
                                                        text-gray-600
                                                    "
                                                    href="#"
                                                    >Datatables
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    class="
                                                        hover:text-purple-500
                                                        text-gray-600
                                                    "
                                                    href="#"
                                                    >Modals
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    class="
                                                        hover:text-purple-500
                                                        text-gray-600
                                                    "
                                                    href="#"
                                                    >Sliders
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    class="
                                                        hover:text-purple-500
                                                        text-gray-600
                                                    "
                                                    href="#"
                                                    >Tabs
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu>

            <HeaderSearch />
        </div>
        <div class="flex items-center">
            <a
                class="
                    hidden
                    mr-0
                    btn btn-sm
                    hover:bg-gray-100
                    sm:block
                    rounded
                    p-1
                    md:mr-2
                "
                href="https://github.com/uilibrary/AatroX-vue"
                target="_blank"
            >
                <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="text-purple-600 text-opacity-50 transform"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                    ></path>
                </svg>
            </a>

            <Menu as="div" class="relative inline-block text-left">
                <div>
                    <MenuButton
                        class="
                            btn btn-sm
                            hover:bg-gray-100
                            rounded
                            w-full
                            px-4
                            py-2
                            text-sm
                            font-medium
                        "
                    >
                        <i class="i-Safe-Box text-gray-800 text-xl"></i>
                    </MenuButton>
                </div>

                <MenuItems
                    class="
                        absolute
                        right-0
                        w-40
                        mt-2
                        overflow-hidden
                        origin-top-right
                        bg-white
                        rounded-md
                        custom-box-shadow
                        focus:outline-none
                    "
                >
                    <div class="">
                        <MenuItem>
                            <div class="flex justify-between flex-wrap">
                                <a
                                    class="
                                        hover:bg-purple-500 hover:text-white
                                        text-gray-600
                                        p-4
                                        inline-flex
                                        flex-col
                                        items-center
                                        rounded
                                        w-20
                                    "
                                    href="#"
                                >
                                    <i class="i-Shop-4 text-2xl"> </i>Home
                                </a>
                                <a
                                    class="
                                        hover:bg-purple-500 hover:text-white
                                        text-gray-600
                                        p-4
                                        inline-flex
                                        flex-col
                                        items-center
                                        rounded
                                        w-20
                                    "
                                    href="#"
                                >
                                    <i class="i-Library text-2xl"></i>UI Kits
                                </a>
                                <a
                                    class="
                                        hover:bg-purple-500 hover:text-white
                                        text-gray-600
                                        p-4
                                        inline-flex
                                        flex-col
                                        items-center
                                        rounded
                                        w-20
                                    "
                                    href="#"
                                >
                                    <i class="i-Drop text-2xl"></i>Apps
                                </a>
                                <a
                                    class="
                                        hover:bg-purple-500 hover:text-white
                                        text-gray-600
                                        p-4
                                        inline-flex
                                        flex-col
                                        items-center
                                        rounded
                                        w-20
                                    "
                                    href="#"
                                >
                                    <i
                                        class="
                                            i-File-Clipboard-File--Text
                                            text-2xl
                                        "
                                    >
                                    </i
                                    >Forms
                                </a>
                                <a
                                    class="
                                        hover:bg-purple-500 hover:text-white
                                        text-gray-600
                                        p-4
                                        inline-flex
                                        flex-col
                                        items-center
                                        rounded
                                        w-20
                                    "
                                    href="#"
                                >
                                    <i class="i-Checked-User text-2xl"></i
                                    >Sessions
                                </a>
                                <a
                                    class="
                                        hover:bg-purple-500 hover:text-white
                                        text-gray-600
                                        p-4
                                        inline-flex
                                        flex-col
                                        items-center
                                        rounded
                                        w-20
                                    "
                                    href="#"
                                >
                                    <i class="i-Ambulance text-2xl"></i>Support
                                </a>
                            </div>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu>
            <!-- notification-dropdown  -->
            <Menu as="div" class="relative inline-block text-left">
                <div>
                    <MenuButton
                        class="
                            btn btn-sm
                            hover:bg-gray-100
                            rounded
                            badge-top-container
                            inline-flex
                            justify-center
                            w-full
                            px-4
                            py-2
                            text-sm
                            font-medium
                        "
                    >
                        <span class="badge-count text-white bg-purple-500"
                            >3</span
                        >
                        <i class="i-Bell text-xl header-icon text-gray-800"></i>
                    </MenuButton>
                </div>

                <MenuItems
                    class="
                        absolute
                        right-0
                        w-44
                        mt-2
                        overflow-hidden
                        origin-top-right
                        bg-white
                        rounded-md
                        custom-box-shadow
                        focus:outline-none
                    "
                >
                    <div class="">
                        <MenuItem
                            v-for="(item, index) in 4"
                            :key="index"
                            v-slot="{ active }"
                        >
                            <button
                                :class="[
                                    active
                                        ? 'bg-purple-500 text-white'
                                        : 'text-gray-900',
                                    'group flex  items-center w-full px-4 py-2 text-sm',
                                ]"
                            >
                                <div class="flex flex-1 justify-between">
                                    <div>
                                        <h6>New Message</h6>
                                        <p
                                            :class="[
                                                active
                                                    ? 'text-gray-300'
                                                    : 'text-gray-500',
                                            ]"
                                        >
                                            How are you ?
                                        </p>
                                    </div>
                                    <div>
                                        <p
                                            :class="[
                                                active
                                                    ? 'text-gray-200'
                                                    : 'text-gray-400',
                                            ]"
                                        >
                                            10s
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu>

            <!-- profile-dropdown  -->
            <Menu as="div" class="relative inline-block text-left">
                <div>
                    <MenuButton
                        class="
                            inline-flex
                            justify-center
                            w-full
                            px-4
                            py-2
                            text-sm
                            font-medium
                        "
                    >
                        <ProfilePic :is-size="'small'"/>
                    </MenuButton>
                </div>

                <MenuItems
                    class="
                        absolute
                        right-0
                        w-44
                        mt-2
                        overflow-hidden
                        origin-top-right
                        bg-white
                        rounded-md
                        custom-box-shadow
                        focus:outline-none
                    "
                >
                    <div class="">
                        <MenuItem v-slot="{ active }">
                            <button
                                :class="[
                                    active
                                        ? 'bg-purple-500 text-white'
                                        : 'text-gray-900',
                                    'group flex  items-center w-full px-4 py-2 text-sm',
                                ]"
                            >
                                Account Settings
                            </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <button
                                :class="[
                                    active
                                        ? 'bg-purple-500 text-white'
                                        : 'text-gray-900',
                                    'group flex  items-center w-full px-4 py-2 text-sm',
                                ]"
                            >
                                Billing History
                            </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <button
                            
                                :class="[
                                    active
                                        ? 'bg-purple-500 text-white'
                                        : 'text-gray-900',
                                    'group flex  items-center w-full px-4 py-2 text-sm',
                                ]"
                                @click="logout()"
                            >
                                Sign Out
                            </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-wrapper {
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 100;
    box-shadow: 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%);
}
.mega-menu {
    width: 1200px;
}
ul.links {
    column-count: 2;
    li {
        margin-bottom: 8px;
    }
}
</style>
