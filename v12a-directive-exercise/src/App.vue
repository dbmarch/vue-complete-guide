<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-custom-on:click="clicked" class="btn btn-primary">CLICK ME</button>
                <hr>
                <div
                    v-custom-on:mouseenter="mouser"
                    v-custom-on:mouseleave="mouseleft"
                    style="width: 100px; height: 100px; background-color: lightgreen"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'custom-on': {
                bind(el,binding, vnode) {
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn)


                    // console.log (binding.expression)
                    // console.log (binding)
                    // if (binding.arg === 'click') {
                    //     console.log ('found a click modifier')

                    //     const onclick = event => {
                    //         // console.log ('onclick ', event)
                    //         event.stopPropagation()
                    //         binding.value();
                    //     }

                    //     el.addEventListener('click', onclick) 
                        
                    //     }

                }
            }
        },
        methods: {
            clicked () {
                console.log ("<Click>")
                //alert("I am clicked")
            },
            mouser() {
                console.log ('mouse-enter')
            },
            mouseleft() {
                console.log ('mouse-left')
            }
        }
    }
</script>

<style>
</style>
