<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p> User age: {{userAge}} </p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
import {eventBus } from '../main'
export default {
    props: ['userAge'],
    methods: {
        editAge() {
            this.userAge=40;
            //this.$emit('ageWasEdited', this.userAge)
            eventBus.$emit('ageChanged', this.userAge)
            eventBus.changeDescription('Age was changed in user edit')
        }
    }
}
</script>

<style scoped>
div {
	background-color: lightgreen;
}
</style>
