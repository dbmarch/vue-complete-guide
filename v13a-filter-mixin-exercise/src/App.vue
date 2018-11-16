<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{message}}</p>
                <p>{{message | reverse}}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <hr>
                <p>{{countedText | count}}</p>
                <p>{{message | count }}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <hr>
                <p>Repeat with computed properties</p>
                <p>{{reverseText(message2)}}</p>
                <p>{{appendCount(message)}}</p>
                <p>{{appendCount(message2)}}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>{{message3 | reverseglobal}}</p>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: 'This text will be reversed',
                message2: 'This text will be reversed by Computed',
                countedText: 'Test',
                message3: "this will be filtered by a global filter"
            }
        },
        filters: {
            reverse (text) {
                console.log ('filter reverse')
                let textArray=text.split('')
                return textArray.reverse().join("");
            }
        },
        computed: {
            reverseText: function() {
                return (text) => {
                    console.log (text)
                    let textArray=text.split('')
                    return textArray.reverse().join("");
                }
            },
            appendCount: function() {
                return (value) => {
                    return value.concat(` (${value.length})`);
                }
            }

        }
    }
</script>

<style>
</style>
