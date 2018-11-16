<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h2>Filters & Mixins</h2>
                <div v-show="false">
                    <p>{{text | toUppercase | to-lowercase }}</p>
                    <p>{{text | to-lowercase }}</p>
                    <hr>
                </div>
                <button @click="fruits.push('Pear')">Add New Item</button>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
            </div>
            <hr>
            <app-list></app-list>
        </div>
    </div>
</template>

<script>
    import Vue from './main'
    import List from './List.vue'
    import {fruitMixin} from './fruitMixin'

    export default {
        mixins: [fruitMixin],

        data() {
            return {
            text: 'Hello there!'
            }
        },
        filters: {
            toUppercase(value) {
                console.log ('local filter')
            return value.toUpperCase()
            },
            toLowercase1(value) {
                console.log('local filter');
                return value.toLowerCase();
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>
</style>
