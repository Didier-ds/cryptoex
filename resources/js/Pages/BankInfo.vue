<template>
    <settings-layout>
        <p class="font-medium text-gray-500 my-2">Bank Information</p>
        <div class="grid md:grid-cols-2 ">
            <div></div>
            <div>
                {{banks}}
            </div>
        </div>
    </settings-layout>
</template>

<script setup>
import SettingsLayout from '@/Layouts/SettingsLayout.vue'
defineProps({
    banks: {
        type: Object,
        default: () => {}
    }
})
</script>

<style lang="scss" scoped>

</style>