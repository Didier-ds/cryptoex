<template>
    <div class="w-full  my-2 rounded border shadow-md bg-white flex justify-between items-center p-3" >
        <div>
            <div class="p-1 rounded-full inline-block" :class = "{'bg-green-200': status === 'success', 'bg-red-200' : status === 'failed', 'bg-gray-200' : status === 'pending'}">
                <div class="h-3 w-3 rounded-full " :class = "{'bg-green-800': status === 'success', 'bg-red-800' : status === 'failed', 'bg-gray-800' : status === 'pending'}"></div>
            </div>
            <p class="text-gray-400 my-1 text-sm capitalize work ">{{status}}</p>
        </div>
        <p class="work md:text-2xl text-lg font-semibold">{{total}}</p>
    </div>
</template>

<script setup>
defineProps({
    status: {
        type: String,
        default: 'pending'
    }, total: {
        type: Number,
        default: 0
    }, label: {
        type: String,
        default: 'Pending'
    }
})
</script>

<style lang="scss" scoped>

</style>