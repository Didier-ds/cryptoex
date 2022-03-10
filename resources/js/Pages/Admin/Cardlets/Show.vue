<template>
    <admin-layout>
        {{data}}
    </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue'
defineProps({
    data: {
        type: Object,
        default: () => {}
    }
})
</script>

<style lang="scss" scoped>

</style>