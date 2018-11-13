<template>
    <div class="container">
        <progress-bar :count="quotes.length"></progress-bar>
        <quote-form :submitQuote="submit"></quote-form>
        <quote-dashboard :quotes="quotes" :removeQuote="removeQuote"></quote-dashboard>
        <info></info>
    </div>
</template>

<script>
    import ProgressBar from './components/progress-bar.vue'
    import QuoteForm from './components/quote-form.vue'
    import QuoteDashboard from './components/quote-dash.vue'
    import Info from './components/info.vue'

    export default {
        data () {
            return {
                quotes: []
            }
        },
        components: {
            ProgressBar,
            QuoteForm,
            QuoteDashboard,
            Info
        },
        methods: {
            submit (quote) {
                console.log ('submit ', quote)
                if (this.quotes.length < 10) {
                    this.quotes.push(quote)
                }
                else 
                    alert ('Too Many Quotes!')
            },
            removeQuote(id) {
                console.log (`removing item ${id} -  ${this.quotes[id]}`)
            //    this.quotes = this.quotes.filter(item => item !== quote)
                 this.quotes.splice(id, 1)
            }
        }
    }
</script>
<style scoped>
.container {
	width: 90%;
}
</style>
