<template>
    <transition
        enter-active-class="animate__animated  animate__shakeX"
        leave-active-class="animate__animated  animate__fadeOut">
        <div v-if="hasErrors">
            <ul
                class="mt-3 border border-red-300 rounded work list-disc p-2 w-fit bg-red-100/50 max-w-lg mx-auto list-inside text-xs text-red-600">
                <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
            </ul>
        </div>
    </transition>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    computed: {
        errors() {
            return this.$page.props.errors
        },

        hasErrors() {
            return Object.keys(this.errors).length > 0
        },
    },
})
</script>
