<template>
            <div class="p-1 rounded-full inline-block" :class = "{'bg-green-200': status === 'success', 'bg-red-200' : status === 'failed', 'bg-gray-200' : status === 'pending'}">
                <div class="h-3 w-3 rounded-full "  :class = "{'bg-green-800': status === 'success','bg-red-800' : status === 'failed', 'bg-gray-800' : status === 'pending', 'h-2 w-2' : size === 'sm'}"></div>
            </div>
</template>

<script setup>
defineProps({
    status : { 
        type: String,
        default: 'pending'
    },
    size : {
        type: String,
        default: 'md'
    }
})
</script>

<style lang="scss" scoped>

</style>
