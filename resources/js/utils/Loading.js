import { ref } from 'vue'
export default function() {
    const isLoading = ref(false)
    const toggleLoader = () => {
        isLoading.value = !isLoading.value
    }

    return { isLoading, toggleLoader }
}