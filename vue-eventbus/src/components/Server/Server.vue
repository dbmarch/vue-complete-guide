<template>
    <li class="list-group-item"
        style="cursor: pointer"
        @click = "serverSelected">
        Server #{{ server.id }} 
    </li>
</template>

<script>
import {eventBus} from '../../main'
// create array of server object.  Pass an id to each component 
// when we click on a server, load it into server details.
export default {
    props: {
        server: {
            required: true
        }
    },
    methods: {
        serverSelected () {
            // console.log ('Server Selected: ', this.server)
            eventBus.$emit('serverSelected', this.server)
        }
    }
}

</script>

<style>
</style>
