<template>
    <div
        class="card_big shadow card mx-auto flex flex-col justify-center bg-white items-center m-2 w-full p-4 h-40 rounded-md">
        <div class="card-logo w-16 my-3">
            <!-- <img class="w-full" :src="filename" alt="" /> -->
            <q-img :src="filename">
                <template #loading>
                    <q-spinner-tail color="secondary" size="1rem" />
                </template>
            </q-img>
        </div>
        <div class="text-base text-center text-white">
            <p class="relative block work text-black font-medium">
                {{ name }}
            </p>
        </div>
    </div>
</template>
<script setup>
defineProps({
    imgType: {
        type: String,
        default: 'Logo1',
    },
    name: {
        type: String,
        default: '',
    },
    filename: {
        type: String,
        default: '/images/cards/logo.png',
    },
})
</script>

<style lang="scss" scoped>
.card_big {
    height: 10em;
    background-size: 8em;
    background-position: right bottom;
    //background-color: #00C2FF;
    display: flex;
    flex-direction: column;
    // box-shadow: 0px 0px 30px #e4e8ef;
    // filter: drop-shadow(0px 0px 15px #e4e8ef);
    background-repeat: no-repeat;
    //max-height: 12em;
}
.card-details p {
    font-size: 1.25rem;
}
@media (max-height: 768px) {
    .card_big {
        height: 12em;
        max-width: 18em;
    }
}
</style>
