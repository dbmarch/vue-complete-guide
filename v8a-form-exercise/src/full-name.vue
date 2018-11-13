<template>
    <div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                <label for="firstname">First Name</label>
                <input id="firstname" type="text" v-model="firstName">
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                <label for="lastname">Last Name</label>
                <input class="" id="lastname" type="text" v-model="lastName">
            </div>
        </div>
        <p>{{this.value}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: ''
        }
    },
    methods: {
        submit () {
            
            console.log ('submit: ', this.firstName, this.lastName)
            this.$emit('input', [this.firstName, this.lastName].join(' '))

        }

    }

}
</script>

<style scoped>
label {
	float: left;
	clear: left;
	width: 6em;
	padding-right: 0.5em;
}
</style>
