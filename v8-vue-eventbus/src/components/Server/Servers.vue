<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <Server  v-for="server in servers"
                :server="server" 
                :clickIt="selectServer"
                ></Server>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue'
import {eventBus} from '../../main'

// create array of server object.  Pass an id to each component 
// when we click on a server, load it into server details.
export default {
    data: function () {
        return {
            selectedServer: null,
            servers: [
                { id: 1, status: 'Normal'},
                { id: 2, status: 'Critical'},
                { id: 3, status: 'Unknown'},
                { id: 4, status: 'Normal'}
            ]
        }
    },
    methods: {
        selectServer(index) {
            this.selectedServer = index;
            eventBus.serverStatus(this.servers[this.selectedServer])
        }
    },
    components: {
        Server
    }
}

</script>

<style>
</style>
