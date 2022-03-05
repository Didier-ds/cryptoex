<template>
    <router-link class="" :to="'/category/' + card.card.uuid">
        <div
            class="card border flex flex-col justify-center items-center 0 fade-in p-4 bg-white rounded-md"
            :style="{ '--order': index }">
            <div class="card-logo w-16 my-3">
                <img
                    class="w-full"
                    :src="'/img/cards/' + imgType + '.png'"
                    alt="" />
            </div>
            <div class="card-details text-center text-white">
                <p class="relative tracking-wider work text-black font-medium">
                    {{ card.card.name }}
                </p>
            </div>
        </div>
    </router-link>
</template>
<script>
import { ExactCardImg } from '../utils/cards'

export default {
    name: 'Card',
    props: ['card', 'index'],
    emits: ['toggleSide'],
    computed: {
        imgType() {
            return ExactCardImg(this.card.card.name)
        },
    },
    methods: {
        toggleSide(any) {
            this.$emit('toggleSide', any)
        },
    },
}
</script>
<style lang="scss" scoped>
.card {
    height: 12em;
    background-size: 7em;
    background-position: right bottom;
    background-repeat: no-repeat;
    p {
        font-size: 1.2rem;
    }
}
.card:hover .tracking-wider::before {
    width: 100%;
}

.fade-in {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.35s;
    // animation-delay: calc(var(--order) * 200ms)
}
.tracking-wider::before {
    position: absolute;
    left: 0;
    content: '';
    bottom: 0;
    width: 20%;
    background-color: white;
    height: 1px;
    transition: 0.5s ease-in-out;
}

@keyframes fadeInOpacity {
    20% {
        opacity: 0;
        transform: translateY(20%);
    }
    30%,
    100% {
        opactity: 1;
        transform: translateY(0);
    }
}
</style>
