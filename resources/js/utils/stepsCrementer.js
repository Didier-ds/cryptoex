import { ref } from 'vue'
export default function() {
    const currentStep = ref(0)
    const nextStep = async(loader) => {
        if (currentStep.value >= 2) {
            return false
        }
        loader()
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(currentStep.value++)
                window.scrollTo(0, 0)
            }, 1000)
        })
        loader()
    }

    const prevStep = () => {
        if (currentStep.value <= 0) {
            window.history.back()
        }
        currentStep.value--
    }

    return { currentStep, nextStep, prevStep }
}