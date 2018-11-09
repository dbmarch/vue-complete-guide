<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-quote>
                    <h1>Quote of the Day</h1>
                    <p>This is a quote!</p>
                    <hr>
                    <h2>{{message}}</h2>
                </app-quote>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent='appQuotes'">Quote</button>
                <button @click="selectedComponent='appAuthor'">Author</button>
                <button @click="selectedComponent='appNew'">New</button>
                <hr>
                <p>{{selectedComponent}}</p>
                <hr>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>This is a conditional component</p>
                    </component>
                </keep-alive>
                <!-- <app-quotes>
                    <h1 slot="title">Quote of the Day</h1>
                    <p slot="content">This is a quote!</p>
                </app-quotes>-->
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/quote.vue'
import Quotes from './components/quotes.vue'
import Author from './components/author.vue'
import New from './components/new.vue'

export default {
    data () {
        return {
            message: "From App.vue",
            selectedComponent: 'appQuotes'
        }
    },
    components: {
        appQuote: Quote,
        appQuotes: Quotes,
        appAuthor: Author,
        appNew: New
    }
}

</script>

<style>
h2 {
	color: blue;
}
</style>
