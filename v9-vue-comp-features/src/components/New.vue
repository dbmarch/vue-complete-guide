<template>
    <div>
        <h1>New Quote</h1>
        <button @click="counter++">Increase</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            counter: 0
        }
    },
    destroyed() {
        console.log ('<New> destroyed')
    },
    deactivated() {
        console.log ('<New> deactivated')
    },
    activated() {
        console.log ('<New> activated')
    }
}
</script>

<style>
</style>
