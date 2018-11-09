<template>
    <div class="row quote-form">
        <div class="col-md-4">
            <form v-on:submit.prevent="onSubmit">
                <div class="form-group">
                    <label for="quoteEntry">Quote:</label>
                    <textarea
                        v-model="quote"
                        type="text"
                        class="form-control form-control"
                        id="quoteEntry"
                        rows="5"
                        placeholder="Enter Quote"
                    ></textarea>
                </div>
                <div class="form-group col-md-4 text-center">
                    <button type="submit" class="btn btn-primary center-block">Add Quote</button>
                </div>
                <!-- <button type="reset" class="btn btn-primary center-block">Reset</button> -->
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
            console.log (data)
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
.quote-form {
	margin: 50px 0px;
}
</style>
