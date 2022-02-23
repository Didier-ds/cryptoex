<template>
  <div
    v-click-away="close"
    class="menudropdown border rounded shadow-lg bg-white w-full">
    <div>
      <p
        class="px-2 font-medium capitalize px-4 text-base font-medium work text-gray-700 pt-2 select-none">
        {{ "fullname" }}
      </p>
    </div>
    <div class="my-2">
      <ul class="">
        <li
          @click="push('Login')"
          class="hover:bg-gray-100 font-mediu work cursor-pointer text-gray-500 text-tiny px-4 p-2">
          Login
        </li>
        <li
          @click="push('Profile')"
          class="hover:bg-gray-100 font-mediu work cursor-pointer text-gray-500 text-tiny px-4 p-2">
          Your Profile
        </li>

        <li
          @click="logout()"
          class="hover:bg-gray-100 font-mediu work cursor-pointer text-gray-500 text-tiny px-4 p-2">
          Sign out
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["toggleModal", "toggleForm"]);
const close = () => {
  emit("toggleModal");
};
const toggleForm = (any) => {
  this.close();
  emit("toggleForm", any);
};
const push = (any) => {
  this.close();
  // router.push({ name: any });
};
const logout = () => {
  // store.dispatch('auth/logout').then(() => {
  //   window.location.reload(true);
  // })
};
</script>

<style lang="scss" scoped>
.menudropdown {
  max-width: 200px;
  position: absolute;
  top: 75px;
  right: 10px;
  z-index: 2;
}
</style>
