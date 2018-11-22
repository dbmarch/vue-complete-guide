<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <input class="form-control" type="text" v-model="node">
                <br>
                <br>
                <button class="btn btn-primary" @click="fetchdata">Get Data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{u.username}} - {{u.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            user: {
                username: '',
                email: ''
                },
            users: [],
            resource: {}, 
            node: 'data'
        }
    }, 
    methods: {
        submit () {
            console.log (`Submit: user: ${this.user.username}  email: ${this.user.email}`)
            // this.resource.save( {}, this.user)
            this.resource.saveAlt(this.user);
        },
        submit_original () {
            console.log (`Submit: user: ${this.user.username}  email: ${this.user.email}`)
            this.$http.post('data.json', this.user)
                .then((rsp) => {
                    console.log (rsp)
                }, (err) => {
                    console.log (err);
                })

        },
    fetchdata() {
        console.log ('fetchdata')
    //     let vm = this;
    //     this.$http.get('data.json')
    //         .then((rsp) => {
    //             return rsp.json()       // I don't see any reason to do it this way.
    //         })
    //         .then((rsp) => {
    //             console.log (rsp);
    //             vm.users= Object.keys(rsp).map((key)=> {
    //                 return (rsp[key])
    //             })

    //         }, (err) => {
    //             console.log (err);
    //         })
        this.resource.getData({node: this.node})
             .then (rsp => {
                return rsp.json()       // I don't see any reason to do it this way.
            })
            .then((rsp) => {
                console.log (rsp);
                this.users= Object.keys(rsp).map((key)=> {
                    return (rsp[key])
                })

            }, (err) => {
                console.log (err);
            })
     },
        fetchdata2() {
        console.log ('fetchdata')
        let vm = this;
        this.$http.get('data.json')
            .then((rsp) => {
                console.log (rsp.json())
                vm.users= Object.keys(rsp.data).map((key)=> {
                    return (rsp.data[key])
                })
                
                //  console.log (vm.users);
                //  console.log (vm.users[0].username)
                
            }, (err) => {
                console.log (err);
            })

    }

    },
    created() {
        const customActions = {
            saveAlt: {method: 'POST', url: 'alternative.json'},
            getData: {method: 'GET',  url: '{node}.json'}
        }
        this.resource = this.$resource('{node}.json', {}, customActions);
    }
    }
</script>

<style>
</style>
