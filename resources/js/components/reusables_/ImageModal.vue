<template>
    <modal
        :show="show"
        :max-width="maxWidth"
        :closeable="closeable"
        @close="close">
        <div class="image_container h-full w-full bg-white">
            <img :src="img" alt="big-image"/>
        </div>
    </modal>
</template>

<script setup>
import Modal from '@/Jetstream/Modal.vue'
const emits = defineEmits(['close'])
defineProps({
    img: {
        type: String,
        default: ''
    }, 
    show: {
            type: Boolean,
            default: false,
        },
        maxWidth: {
            type: String,
            default: '2xl',
        },
        closeable: {
            type: Boolean,
            default: true,
        },
})

const close = () => {
    emits('close')
}
</script>

<style lang="scss" scoped>
.image_container {
    
}
img {
    width: 100%;
}
</style>