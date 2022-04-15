<template>
    <div class="menudropdown border rounded shadow-lg bg-white w-full">
        <div>
            <p
                class="px-4 font-medium capitalize px-4 text-base font-medium work text-gray-700 pt-2 select-none">
                {{ $page.props.user.fullname }}
            </p>
        </div>
        <div id="menu-dropdown" class="my-2">
            <!-- <inertia-link @click="push('Login')"> Login </inertia-link> -->
            <inertia-link @click="push('Profile')"> Your Profile </inertia-link>
            <inertia-link @click="push('Profile')"> Settings </inertia-link>
            <button
                class="w-full text-white bg-red font-medium text-center"
                @click="logout()">
                Sign out
            </button>
        </div>
    </div>
</template>

<script setup>
import { Inertia } from '@/utils'
const emits = defineEmits(['toggleModal', 'toggleForm'])
// const close = () => {

// };
// const toggleForm = (any) => {
//   this.close();
//   emit("toggleForm", any);
// };
// const push = () => {
//   this.close();
//   // router.push({ name: any });
// };
const logout = () => {
    // eslint-disable-next-line no-undef
    Inertia.post(route('logout'))
    emits('toggleModal')
}
</script>

<style lang="scss" scoped>
.menudropdown {
    max-width: 200px;
    position: absolute;
    top: 75px;
    right: 10px;
    z-index: 2;

    a,
    button {
        display: block;
        font-size: 0.9em;
        cursor: pointer;
        --tw-text-opacity: 1;
        color: rgb(107 114 128 / var(--tw-text-opacity));
        padding: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    a:hover,
    button:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(243 244 246 / var(--tw-bg-opacity));
    }
}
</style>
