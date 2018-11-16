<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h2>Filters & Mixins</h2>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from './main'
    import {fruitMixin} from './fruitMixin'

    export default {
        mixins: [fruitMixin],
      	created() {
    		console.log('Inside list Created');
	},

    }
</script>

<style>
</style>
