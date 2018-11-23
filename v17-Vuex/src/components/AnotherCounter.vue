<template>
    <div>
        <hr>
        <br>
        <h2>Mutations</h2>
        <button class="btn btn-primary" @click="increment(1)">Increment</button>
        <button class="btn btn-primary" @click="decrement(1)">Decrement</button>
        <hr>
        <br>
        <h2>Async Actions</h2>
        <button
            class="btn btn-primary"
            @click="asyncIncrement({by: 50, duration:500})"
        >Async Increment</button>
        <button
            class="btn btn-primary"
            @click="asyncDecrement({by: 150, duration:2500})"
        >Async Decrement</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {mapActions } from 'vuex'

    export default {
        methods: {
            ...mapMutations(['increment', 'decrement']),
            ...mapActions (['asyncIncrement', 'asyncDecrement']),   // calls this.$store.dispatch ('action', payload)
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