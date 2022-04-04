<template>
    <main-layout>
        <div class="px-2">
            <div class="flex flex-row justify-between items-center mx-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <div class="">
                    <h2 class="text-lg work font-semibold p-ripple">Settings</h2>
                </div>
            </div>
            <template v-if="step === 1">
                <div class="flex items-center justify-center">
                    <div
                        class="my-4 box_container max-w-xl mx-auto p-6 shadow-lg rounded border">
                        <h2 class="work font-bold text-lg">Account Basic</h2>
                        <div>
                            <div class="flex py-4 mb-2">
                                <div class="w-6 mr-1 h-2 bg-cyan"></div>
                                <div class="w-6 mr-1 h-2 bg-cyan-200"></div>
                                <div class="w-6 mr-1 h-2 bg-cyan-200"></div>
                            </div>
                            <div class="input_card_container">
                                <div class="input_box">
                                    <label class="font-medium">Fullname</label>
                                    <p
                                        class="rounded capitalize p-3 px-6 font-medium text-gray-600">
                                        {{ user.fullname }}
                                    </p>
                                </div>
                                <div class="input_box">
                                    <label class="font-medium">Email</label>
                                    <p
                                        class="rounded p-3 px-6 font-medium text-gray-600">
                                        {{ user.email }}
                                    </p>
                                </div>
                                <div class="input_box">
                                    <label class="font-medium">Phone</label>
                                    <p
                                        class="rounded p-3 px-6 font-medium text-gray-600">
                                        {{ user.phone }}
                                    </p>
                                </div>
                            </div>
                            <div class="float-right">
                                <!-- <button
                                    class="px-4 py-2 shadow-lg bg-cyan rounded text-white font-medium">
                                    Edit Profile
                                </button> -->
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="p-4 mx-auto">
                    <section id="profile_info">
                        <div class="max-w-3xl mx-auto">
                            <ul class="flex-nowrap flex overflow-x-auto">
                                <li class="inline-block"><inertia-link href="/user/profile" :class="{ 'bg-white font-medium': $page.url === '/user/profile' }" class="bg-gray-100 work text-gray-600 inline-block py-2 px-3 mr-2 rounded-tl-lg rounded-tr-lg">Basic Information</inertia-link></li>
                                <li class="inline-block"><inertia-link class="bg-gray-100 work text-gray-600 inline-block py-2 px-3 mr-2 rounded-tl-lg rounded-tr-lg">Bank Information</inertia-link></li>
                                <li class="inline-block"><inertia-link class="bg-gray-100 work text-gray-600 inline-block py-2 px-3 mr-2 rounded-tl-lg rounded-tr-lg">Security</inertia-link></li>
                            </ul>
                            <div class="bg-white rounded-bl-lg p-4 rounded-tr-lg rounded-br-lg">
                                <p class="font-medium text-gray-500 my-2">Personal Information</p>
                                <div class="grid md:grid-cols-2 gap-4">
                                    <div class="input__container">
                                        <label class="work" for="fullname">Fullname</label>
                                        <input type="text" class="border p-2 rounded-md w-full focus:border-cyan focus:shadow outline-none bg-white "/>
                                    </div>
                                </div>
                                <div class="grid md:grid-cols-2 gap-4">
                                    <div class="input__container">
                                        <label class="work" for="fullname">Email Address:</label>
                                        <input type="text" class="border p-2 rounded-md w-full focus:border-cyan focus:shadow outline-none bg-white "/>
                                    </div>
                                    <div class="input__container">
                                        <label class="work" for="fullname">Phone Number:</label>
                                        <input type="text" class="border p-2 rounded-md w-full focus:border-cyan focus:shadow outline-none bg-white "/>
                                    </div>
                                </div>
                                <div class="flex justify-end">
                                <button
                                    class="px-4 py-2 shadow-lg bg-primary rounded text-white font-medium">
                                    Save Changes
                                </button>
                            </div>
                            </div>
                        </div>
                    </section>
                </div>
            </template>
        </div>
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout.vue'
import ProfilePic from '@/components/reusables_/ProfilePic.vue'
import {ref} from 'vue'
const step = ref(2)
defineProps({
    user: {
        type: Object,
        default: () => {},
    },
})
</script>

<style lang="scss" scoped>
.box_container {
    width: 100%;
    font-family: 'Work Sans', sans-serif;
}
.input_card_container {
    margin: 1em 0;
    .input_box {
        margin-bottom: 1em;
        p {
            width: 100%;
            // text-transform: capitalize;
            // border: .5px solid grey;
        }
    }
}

label {
    display: block;
    margin: 0.4em 0;
    font-medium: 500;
}
.input__container {
    margin-bottom: 1em;
}
@media (min-width: 769px) {
    .myHidden {
        display: block !important;
    }
}
</style>
