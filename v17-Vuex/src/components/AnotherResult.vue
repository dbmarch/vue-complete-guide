<template>
    <div>
        <hr>
        <p>Double Counter is: {{ counter }}</p>
        <p>Number of Clicks: {{ clicks }}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import * as types from '../store/types'
    export default {

        // either pass an array of strings or an objct with identifers mapped to the getter names.
        computed: {
            anotherValue() {

            },
            ...mapGetters({  // This needs babel-stage-2 installed.
                counter: types.DOUBLE_COUNTER,
                clicks: types.CLICK_COUNTER
        })
        }
        // props: ['counter']
        // computed: {
        //     counter() {
        //         return this.$store.getters.doubleCounter;
        //     },
        //     clicks() {
        //         return this.$store.getters.stringCounter;
        //     }
        // }
    }
</script>