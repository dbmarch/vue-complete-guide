<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->

                    <label for="name">Name</label>
                    <input id="name" type="text" v-model="userData.name">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="email">Email</label>
                    <input id="email" type="email" v-model="userData.email">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="email">Password</label>
                    <input id="password" type="password" v-model="userData.password">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="store">Store Data?</label>
                    <select id="store" class="form-control" v-model="storeData">
                        <option v-for="choice in choices" :selected="choice == 'No'">{{choice}}</option>
                    </select>
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <button @click.prevent="submit">Submit</button>
                </div>
            </div>
            <hr>
            <div class="row" v-if="isSubmitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Your Data</h4>
                        </div>
                        <div class="panel-body">
                            <p>Full Name: {{userData.name}}</p>
                            <p>Mail: {{userData.email}}</p>
                            <p>Password: {{userData.password}}</p>
                            <p>Store in Database?: {{storeData}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    name: '',
                    email: ''
                },
                storeData: null,
                choices: ['Yes', 'No'],
                isSubmitted: false
            }
        },
        methods: {
            submit () {
                console.log ('submit');
                this.isSubmitted = true;
            }
        }
    }
</script>

<style>
#store {
	width: 50%;
	display: inline-block;
}
</style>
