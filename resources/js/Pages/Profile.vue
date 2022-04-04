<template>
    <settings-layout>
            <p class="font-medium text-gray-500 my-2">Personal Information</p>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="input__container">
                    <label class="work" for="fullname">Fullname</label>
                    <input type="text" :placeholder="$page.props.user.fullname" class="border p-2 rounded-md w-full focus:border-cyan focus:shadow outline-none bg-white "/>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="input__container">
                    <label class="work" for="fullname">Email Address:</label>
                    <input type="text" :placeholder="$page.props.user.email" class="border p-2 rounded-md w-full focus:border-cyan focus:shadow outline-none bg-white "/>
                </div>
                <div class="input__container">
                    <label class="work" for="fullname">Phone Number:</label>
                    <input type="text" :placeholder="$page.props.user.phone" class="border p-2 rounded-md w-full focus:border-cyan focus:shadow outline-none bg-white "/>
                </div>
            </div>
            <div class="flex justify-end">
                <button
                    class="px-4 py-2 shadow-lg bg-primary rounded text-white font-medium">
                    Save Changes
                </button> 
            </div>
    </settings-layout>
</template>

<script setup>
import SettingsLayout from '@/Layouts/SettingsLayout.vue'
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
