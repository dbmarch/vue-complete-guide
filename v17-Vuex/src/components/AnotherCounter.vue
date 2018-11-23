<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'

    export default {
        methods: {
            ...mapMutations(['increment', 'decrement']),
            myIncrement() {
                // this.$emit('updated', 1);
                this.$store.commit('increment')
            },
            myDecrement() {
                // this.$emit('updated', -1);
                this.$store.commit('decrement')
            }
        }
    }
</script>  