<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server {{server.id}}: {{server.status}} </p>
    </div>

</template>

<script>
import {eventBus} from '../../main'

  export default {
     data () {
         return {
             server: null
         }
     },
     created() {
        eventBus.$on('serverSelected', (data)=> {
            console.log ('eventBus: ', data);
            this.server = data;
        })    
     }
}

</script>

<style scoped>
p {
	color: blue;
}
</style>
