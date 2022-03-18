<template>
    <main-layout>
        <div class="px-2">
            <div class="flex flex-row justify-between items-center mx-4">
                <div class="my-1">
                    <GoBack />
                </div>
                <div class="">
                    <h2 class="text-lg work font-semibold p-ripple">Profile</h2>
                </div>
            </div>
            <div class="flex items-center justify-center ">
                <div class="my-4 box_container max-w-xl mx-auto p-6 shadow-lg rounded border">
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
                                    class="rounded capitalize p-3 px-6  font-medium text-gray-600"
                                    
                                    >
                                    {{user.fullname}}
                                    
                                     </p>
                            </div>
                            <div class="input_box">
                                <label class="font-medium">Email</label>
                                <p
                                    class="rounded p-3 px-6  font-medium text-gray-600"
                                    
                                    >
                                    {{user.email}}
                                    
                                     </p>
                            </div>
                            <div class="input_box">
                                <label class="font-medium">Phone</label>
                                <p
                                    class="rounded p-3 px-6  font-medium text-gray-600"
                                    
                                    >
                                    {{user.phone}}
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
        </div>
    </main-layout>
</template>

<script setup>
import MainLayout from '@/Layouts/MainLayout.vue'

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
    font-family: 'Work Sans', sans-serif
}
.input_card_container {
    margin: 1em 0;
    .input_box {
        margin-bottom: 1em;
        label {
            display: block;
            margin: 0.4em 0;
            font-medium: 500;
        }
        p {
            width: 100%;
            // text-transform: capitalize;
            // border: .5px solid grey;
        }
    }
}
</style>
