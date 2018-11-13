<template>
    <form v-on:submit.prevent="onSubmit" class="form-group">
        <div class="row">
            <div class="col-md-12">
                <label class="quote-title" for="quoteEntry">Quote</label>
                <textarea
                    v-model="quote"
                    type="text"
                    class="form-control"
                    id="quoteEntry"
                    rows="5"
                    columns="100"
                    placeholder="Enter Quote"
                ></textarea>
                <!-- <button type="reset" class="btn btn-primary center-block">Reset</button> -->
            </div>
            <div class="row"></div>
            <div class="row">
                <div class="form-group col-md-12 text-center">
                    <button type="submit" class="btn btn-primary center-block">Add Quote</button>
                </div>
            </div>
        </div>
    </form>
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
form {
	margin: 10% 10%;
}
.row {
	margin: 10px 0;
}
</style>
