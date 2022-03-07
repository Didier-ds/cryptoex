<template>
    <div id="main" class="relative">
        <div
            class="overlay"
            :class="isSideBar ? 'active' : ''"
            @click="toggleSideBar"></div>

        <div id="layout">
        <SideNav :is-side-bar="isSideBar" @toggle-side-bar="toggleSideBar" />
            <main>
                <Header @toggle-side-bar="toggleSideBar" />
                <div class="bg-white rounded-lg">
                    <slot></slot>
                </div>
            </main>
        </div>

        <!-- <Toast class="custom" /> -->
        <!-- <Footer /> -->
        <!-- 
    <Spinner v-if="isLoading" />
    <SuccessModal :isSuccess="isSuccess" /> -->
        <!-- <AccountForm @FormClickAway = "ClickAway" v-if="isShowForm"/> -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from './components/Mainlayout/Header.vue'
import SideNav from './components/Mainlayout/Sidenav.vue'
const isSideBar = ref(false)
const toggleSideBar = () => {
    isSideBar.value = !isSideBar.value
}
</script>

<style lang="scss" scoped>
@media (min-width: 769px) {
    #layout {
        display: grid;
        grid-template-columns: minmax(180px, 280px) 1fr,
    }
}

input {
    appearance: none !important;
}

main {
    transition: 0.5s ease-in-out;
    // margin-top: 40px;
    margin-bottom: 50px;
    // position: relative;
}

// @media (min-width: 769px) {
//     main {
//         margin-left: 325px;
//     }
// }
// #view {
//   width: calc(100vw - 260px);
//   margin-left: 240px;
//   padding: 1rem 1.2rem;
// }
.overlay {
    background-color: #00000045;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    opacity: 0;
    transition: 0.5s ease-in-out;
}
@media (max-width: 769px) {
    .overlay.active {
        opacity: 1;
        display: block;
    }
    // #view {
    //   width: 100%;
    //   margin-left: 0px;
    // }
}
</style>
