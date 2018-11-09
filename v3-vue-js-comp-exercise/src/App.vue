<template>
    <div class="container">
        <server-status>
        </server-status>    
        <hr>
        <div class="row">
            <server-list>
            </server-list>
            <server-details>
            </server-details>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <server-manager>
                </server-manager>
            </div>
        </div>
    </div>
</template>

<script>

import Status from './components/server-status.vue';
import Manager from './components/manager.vue';
import Details from './components/server-details.vue';
import ServerList from './components/server-list.vue';

export default {
    data:  function() {
      return {
      } 
      
    },
    components: {
        'server-status':    Status,
        'server-manager':   Manager,
        'server-details':   Details,
        'server-list':      ServerList
    }
}

</script>

<style>
</style>
