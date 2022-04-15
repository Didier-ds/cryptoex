<template>
    <div ref="SUCCESSMODAL" class="flex items-center h-full justify-center">
        <div id="overlay">
            <div
                id="box"
                class="flex bg-white rounded-lg p-8 flex-col items-center justify-center">
                <div class="my-4 w-32">
                    <img src="../images/success.svg" />
                </div>
                <div class="text-center">
                    <h2 class="text-2xl work font-medium my-4">
                        Successfull!!!
                    </h2>
                    <p class="text-lg work">
                        Your <span><slot></slot></span> Has Been sent, You will
                        credited once it has been reviewed
                    </p>
                </div>
                <inertia-link
                    v-ripple
                    class="bg-primary relative my-4 rounded work py-2 px-6 text-white font-medium shadow-md"
                    href="/">
                    Trade More
                </inertia-link>
                <inertia-link
                    class="border-cyan-500 border border-3 my-4 rounded work py-2 px-6 text-cyan font-medium shadow-md"
                    href="/user/transactions">
                    View My Transactions
                </inertia-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import { ref, onMounted, onUnmounted } from '@/utils'

// defineProps([''])

// const redirect = (any) => {
//     // this.showSuccess.val = !this.showSuccess.val;
//     // this.$router.push({ name: any });
// }
const SUCCESSMODAL = ref(null)
onMounted(() => {
    disableBodyScroll(SUCCESSMODAL.value)
})
onUnmounted(() => {
    console.log('unmounted!')
    enableBodyScroll(SUCCESSMODAL.value)
    clearAllBodyScrollLocks(SUCCESSMODAL.value)
})
</script>
<style lang="scss">
#overlay {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 300;
    background-color: #00000026;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
}
#box {
    margin: 0 auto;
    width: 90%;
    max-width: 47.375rem;
    display: flex;
    flex-direction: column;
    min-height: 0;
    border-radius: 1rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
    background: #fff;
}
@media (max-width: 425px) {
    #box {
        margin: 1em;
        // width: 100%;
        // min-height: 100vh;
        // border-radius: 0;
    }
}
</style>
