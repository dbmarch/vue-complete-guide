<template>
    <div class="container">
        <progress-bar :count="numberQuotes"></progress-bar>
        <quote-form :submitQuote="submit"></quote-form>
        <quote-dashboard></quote-dashboard>
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
                numberQuotes: 0
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
                if (this.numberQuotes < 10)
                    this.numberQuotes++;
                else 
                    alert ('Too Many Quotes!')
            }
        }
    }
</script>
<style scoped>
.container {
	width: 90%;
}
</style>
