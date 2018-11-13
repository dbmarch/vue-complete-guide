<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change My Name </button>
        <p> Name is {{name}}</p>
        <p> Age: {{age}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- <app-user-detail :myName="name" v-on:nameWasReset="name=$event"></app-user-detail> -->
                <app-user-detail 
                    :myName="name" 
                    @nameWasReset="name = $event" 
                    :resetFn="resetName"
                    :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :userAge="age"
                    @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function () {
            return {
                name: 'Dave',
                age: 30
            }            
        },
        methods: {
            changeName () {
                this.name = 'Toby'
            },
            resetName() {
                this.name = "Harry"
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
div {
	background-color: lightblue;
}
</style>
