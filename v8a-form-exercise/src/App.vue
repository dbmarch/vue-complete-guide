                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
<template>
    <div class="container">
        <form>
            <!-- <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <label for="firstname">First Name</label>
                    <input id="firstname" type="text" v-model="userData.firstName">
                </div>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <label for="lastname">Last Name</label>
                    <input id="lastname" type="text" v-model="userData.lastName">
                </div>
            </div>-->
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <full-name v-model="userData.fullName"></full-name>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input
                                class="form-control"
                                id="email"
                                type="email"
                                v-model="userData.email"
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="password">Password</label>
                    <input
                        class="form-control"
                        id="password"
                        type="password"
                        v-model="userData.password"
                    >
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="store">Store Data?</label>
                    <select class="form-control" id="store" v-model="storeData">
                        <option v-for="choice in choices" :selected="choice == 'No'">{{choice}}</option>
                    </select>
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <button type="submit" @click.prevent="submit">Submit</button>
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
                            <!-- <p>Full Name: {{fullName}}</p> -->
                            <p>Full Name: {{userData.fullName}}</p>
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
    import FullName from './full-name.vue'

    export default {
        
        data() {
            return {
                userData: {
                    fullName: '',
                    email: '',
                    password: ''
                },
                storeData: null,
                choices: ['Yes', 'No'],
                isSubmitted: false
            }
        },
        computed: {
        },
        methods: {
            submit () {
                console.log ('submit');
                this.isSubmitted = true;
            }
        },
        components: {
            fullName: FullName
        }
    }
</script>

<style scoped>
</style>
