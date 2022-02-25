<template>
  <div class="py-4">
    <max-width-container>
      <div class="my-12">
        <!-- <div class="ads_container">
          <p class="whitespace-pre">{{ adText }}</p>
        </div> -->
        <div id="form_container" class="m-auto max-w-lg">
        <Logo />
          <div class="my-10">
            <p class="font-bold text-gray-800 work text-lg">
              Welcome Back Admin
            </p>
          </div>
          <jet-validation-errors class="mb-4" />
          <form @submit.prevent="submit">
            <div class="input_container mb-8">
              <q-input
                v-model="form.email"
                borderless
                input-class="my_input"
                placeholder="Email Address" />
            </div>
            <div class="input_container mb-8">
              <q-input
                v-model="form.password"
                :type="isPwd ? 'password' : 'text'"
                borderless
                input-class="my_input relative"
                placeholder="Password">
                <template #append>
                  <EyeIcon :show="!isPwd" @click="isPwd = !isPwd" />
                </template>
              </q-input>
            </div>
            <div class="mb-4">
              <q-btn
                color="primary"
                type="submit"
                :disabled="form.processing"
                unelevated
                class="w-full primary_shadow py-3 work font-medium"
                label="Login" />
            </div>
          </form>
         
        </div>
      </div>
    </max-width-container>
  </div>
</template>

<script setup>
import JetValidationErrors from "@/Jetstream/ValidationErrors.vue";
import EyeIcon from "@/components/reusables_/EyeIcon.vue";
import Logo from "@/components/reusables_/Logo.vue";
import { ref, useForm } from "@/utils";
defineProps({
  canResetPassword: Boolean,
  status: {
    type: String,
    default: null,
  },
});
const isPwd = ref(true);
const form = useForm({
  email: "",
  password: "",
  remember: false,
});
// const adText = ref(`Nice To See You, \nAgain`);

const submit = () => {
  form
    .transform((data) => ({
      ...data,
      remember: form.remember ? "on" : "",
    }))
    // eslint-disable-next-line no-undef
    .post(route("login"), {
      onFinish: () => form.reset("password"),
    });
};
</script>

<style lang="scss" scoped>
// .input_container {
//     ma
// }
.main_container {
  margin: 6em 0;
}
</style>
