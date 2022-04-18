<template>
    <admin-layout>
        {{proofs}}
    </admin-layout>
</template>

<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue'
defineProps({
    proofs: {
        type:Array,
        default: () => []
    }
})
</script>

<style lang="scss" scoped></style>
