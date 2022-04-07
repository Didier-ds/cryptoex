<template>
    <main-layout>
        <div class="px-2">
            <div class="flex flex-row justify-between items-center mx-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <div class="">
                    <h2 class="text-lg work font-semibold p-ripple">
                        Settings
                    </h2>
                </div>
            </div>
            <div class="p-4 mx-auto">
                <section id="profile_info">
                    <div class="max-w-3xl mx-auto">
                        <ul class="flex-nowrap flex overflow-x-auto">
                            <li class="inline-block">
                                <inertia-link
                                    href="/settings/profile"
                                    :class="{
                                        'bg-white font-medium':
                                            $page.url === '/settings/profile',
                                    }"
                                    class="bg-gray-100 work text-gray-600 inline-block py-2 px-3 mr-2 rounded-tl-lg rounded-tr-lg"
                                    >Basic Information</inertia-link
                                >
                            </li>
                            <li class="inline-block">
                                <inertia-link
                                    href="/settings/banks"
                                    :class="{
                                        'bg-white font-medium':
                                            $page.url === '/settings/banks',
                                    }"
                                    class="bg-gray-100 work text-gray-600 inline-block py-2 px-3 mr-2 rounded-tl-lg rounded-tr-lg"
                                    >Bank Information</inertia-link
                                >
                            </li>
                            <li class="inline-block">
                                <inertia-link
                                    href="/user/profile"
                                    class="bg-gray-100 work text-gray-600 inline-block py-2 px-3 mr-2 rounded-tl-lg rounded-tr-lg"
                                    >Security</inertia-link
                                >
                            </li>
                        </ul>
                        <div
                            class="bg-white rounded-bl-lg p-4 md:p-10 rounded-tr-lg rounded-br-lg">
                            <slot></slot>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main-layout>
</template>

<script setup>
import MainLayout from './MainLayout.vue'
</script>

<style lang="scss" scoped></style>
