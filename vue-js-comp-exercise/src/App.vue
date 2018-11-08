<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <server-status>
                </server-status>    
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <server-list>
                </server-list>
            </div>
            <div class="col-xs-12 col-sm-6">
                <server-details>
                </server-details>
            </div>
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
