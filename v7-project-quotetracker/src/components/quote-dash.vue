<template>
    <div class="quote-dash">
        <div class="row">
            <div class="col-xs-12">
                <div>Quote Dashboard</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3" v-for="quote,id in quotes">
                <div class="quote-item" @click="removeQuote(id)">{{quote}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        quotes: {
            type: Array    
            },
        removeQuote: Function
    },
    methods: {
    }
}
</script>

<style scoped>
.quote-dash {
	margin: 30px 0px;
}

.quote-item {
	font-style: italic;
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-bottom: 20px;
	padding: 5px;
}

.quote-item:hover {
	background-color: #f8e2e2;
}
</style>
