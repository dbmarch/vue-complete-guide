<template>
    <div class="row quote-form">
        <div class="col-md-12">
            <form v-on:submit.prevent="onSubmit">
                <div class="form-group">
                    <label class="quote-title" for="quoteEntry">Quote</label>
                    <textarea
                        v-model="quote"
                        type="text"
                        class="form-control form-control"
                        id="quoteEntry"
                        rows="5"
                        columns="100"
                        placeholder="Enter Quote"
                    ></textarea>
                    <!-- <button type="reset" class="btn btn-primary center-block">Reset</button> -->
                </div>
                <div class="form-group col-md-12 text-center">
                    <button type="submit" class="btn btn-primary center-block">Add Quote</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            quote: ""
        }
    },
    watch: {
        quote: function(data) {
            //console.log (data)
        }
    },
    props: {
        submitQuote: Function
    },
    methods: {
        addQuote () {
            console.log ('add quote')
            console.log (this.quote);
            },
        onSubmit(evt) {
            console.log ("onSubmit")
            console.log (this.quote);
            if (this.quote.length) {
            this.submitQuote (this.quote);           
            }
          this.quote = ""
        },
        onReset(evt) {
            console.log ('onReset');
        },

    }

}
</script>

<style>
.quote-title {
	font-size: 1.5rem;
	font-weight: bold;
}
.quote-form {
	margin: 10% 10%;
}
</style>
