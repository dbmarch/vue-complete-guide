<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p> User Name: {{ switchName() }} </p>
        <p> User Age: {{ userAge }} </p>
        <p> {{description}} </p>
        <button @click="resetName"> Reset name </button>
        <button @click="resetFn()">Parent Reset </button>
    </div>
</template>

<script>
    import {eventBus} from '../main'
    export default {
        data: function () {
            return {
                description: ""
            }
        },
        props: {
            myName: { 
                type: String,
                required: true ,
                default:  'Who is it'
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("")
            },
            resetName () {
                this.myName = "Dave";
                this.$emit('nameWasReset', this.myName);
            }
        },
        created() {
            eventBus.$on('ageChanged', (data)=> {
                console.log ('eventBus: ', data);
                this.userAge = data;
            })    
            eventBus.$on('description', (data)=> {
                console.log ('eventBus: ', data);
                this.description = data;
            })    
        }
    }
</script>


<style scoped>
div {
	background-color: lightcoral;
}
</style>
