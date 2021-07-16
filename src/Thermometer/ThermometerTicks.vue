<template>
    <div class="thermometer-ticks">
        <template v-for="(tick, i) in currentTicks">
            <div class="thermometer-tick" :key="tick">
                <span class="thermometer-tick-label" :key="tick">
                    {{ format(tick, percentage(tick)) }}
                </span>
            </div>
            <template v-if="intervals && i + 1 < currentTicks.length">
                <div
                    v-for="i in 9"
                    :key="`${tick}-${i}`"
                    class="thermometer-interval-tick"
                    :class="{'thermometer-half-tick': 5 === i}"
                />
            </template>
        </template>
    </div>
</template>

<script>
import PercentageMixin from './PercentageMixin';

export default {

    name: 'ThermometerTicks',

    mixins: [
        PercentageMixin
    ],

    props: {

        min: Number,

        max: Number,

        percentages: Boolean,

        ticks: [Boolean, Number, Array],

        intervals: {
            type: Boolean,
            default: false
        },

        values: {
            type: Boolean,
            default: function() {
                return this.percentages ? false : true;
            }
        },

        format: {
            type: Function,
            default: value => value
        }

    },

    computed: {

        currentTicks() {
            if(this.ticks instanceof Array ) {
                return this.ticks;
            }
            else if(!isNaN(this.ticks) || this.ticks === true) {
                const ticks = [this.min],
                      total = this.ticks === true && 8 || this.ticks,
                      interval = (this.max - this.min) / total;

                for(let x = 1; x <= total; x++) {
                    ticks.push(interval * x);
                }

                return ticks.reverse();
            }
        },

        classes() {
            return {

            };
        }

    },

    data() {
        return {

        };
    }

}
</script>

<style lang="scss">
$thermometer-color: red;
$thermometer-background: #ddd;
$thermometer-tube-size: 1.2em;
$thermometer-tube-background: #fff;
$thermometer-tube-border: math.div($thermometer-tube-size, 4.5) solid #aaa;

.thermometer-ticks {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1em;
    margin-bottom: 3.5em;

    .thermometer-tick {
        position: relative;
        height: calc(1em / 10);

        &:before {
            content: '';
            width: 1.15em;
            height: 1px;
            position: absolute;
            border-top: calc(1em / 10) solid #555;
        }

        .thermometer-tick-label {
            padding-left: 1.25em;
            position: relative;
            top: -.75em;
        }
    }

    .thermometer-interval-tick {
        width: 1em;
        position: relative;
        border-top: 1px solid #888;
    }

    .thermometer-half-tick {
        border-top: 2px solid #888;
    }
}
</style>
