<template>
    <div class="testimony">
        <img id="image" src="https://via.placeholder.com/200x350?text=person" alt="Picture of Person" />
        <div id="text-parent">
            <span id="quote"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Aliquam sem et tortor consequat id porta nibh venenatis.</span
            >
            <h1 id="name">hey ;)</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Testimony",
        props: {
            name: {
                type: String,
                required: true
            },
            quote: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            }
        }
    };
</script>

<style lang="scss" scoped>
    .testimony {
        width: 50%;
    }

    #image {
        display: inline-block;
    }

    #text-parent {
        display: inline-block;
    }
</style>
