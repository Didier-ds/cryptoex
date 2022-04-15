<script setup>
import { useStore } from 'vuex'
import { ref, tablet, computed } from '@/utils'
import Header from './components/Adminlayout/Header.vue'
import Sidebar from './components/Adminlayout/Sidebar.vue'
import Footer from './components/Adminlayout/Footer.vue'

let store = useStore()
const isMobile = computed(() => {
    return tablet ? true : false
})
const isSideBar = ref(isMobile.value)
const toggleSideBar = () => {
    isSideBar.value = !isSideBar.value
}
</script>

<template>
    <div class="app-admin-wrap-layout-2">
        <Header @toggle-side-bar="toggleSideBar" />
        <Sidebar :is-side-bar="isSideBar" @toggle-side-bar="toggleSideBar" />

        <div :class="isSideBar ? '' : 'full'" class="main-content-wrap">
            <main>
                <div
                    class="main-content-wrap flex flex-col flex-grow print-area pt-10">
                    <div>
                        <slot></slot>
                    </div>

                    <!-- <Footer /> -->
                </div>
            </main>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-admin-wrap-layout-2 {
    width: 100%;
    height: 100%;
    .main-content-wrap {
        width: calc(100% - 120px);
        margin-left: 90px;
        // min-height: 100vh;
        margin-top: 80px;
        transition: all 0.24s ease-in-out;
        .main-content-body {
            min-height: calc(100vh - 80px);
        }
        &.full {
            width: 100%;
            margin-left: 0px;
            transition: all 0.24s ease-in-out;
        }
        @media screen and (max-width: 991px) {
            width: 100%;
            margin-left: 0px;
            padding-right: 4px;
            padding-left: 4px;
        }
    }
}
</style>
