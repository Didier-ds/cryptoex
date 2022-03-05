<template>
    <div
        class="card_big card shadow-md mx-auto flex flex-col justify-center bg-white items-center border fade-in m-4 p-4 h-40 rounded-md">
        <div class="card-logo w-16 my-3">
            <img
                class="w-full"
                :src="'/images/cards/' + imgType + '.png'"
                alt="" />
        </div>
        <div class="card-details text-center text-white">
            <p class="relative block work text-black text-lg font-normal">
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
