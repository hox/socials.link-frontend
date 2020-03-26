<template>
    <div class="features">
        <div class="feature" v-for="(content, i) in features" v-bind:key="i">
            <span id="check" class="material-icons" v-bind:class="color">done</span>
            <span class="feature-text" v-bind:class="textColor">
                {{ content }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PlansFeatures",
        props: {
            color: {
                type: String,
                required: true
            },
            textColor: {
                type: String,
                required: true
            },
            features: {
                type: Array,
                required: true
            }
        }
    };
</script>

<style lang="scss">
    .white {
        color: #fff;
    }

    .black {
        color: #000;
    }

    .green {
        color: #41d4a3;
    }

    .feature {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 0 0 8px 0;
    }

    #check {
        margin: 0 10px 0 0;
    }

    #feature-text {
        font-size: 10px;
        font-weight: 400;
        font-family: $title-font;
    }
</style>
