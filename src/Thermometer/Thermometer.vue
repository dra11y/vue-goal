<template>
    <div class="thermometer" :class="classes" :style="styles">

        <thermometer-statistics v-if="statistics" class="thermometer-statistics-top">
            <thermometer-statistic
                :value="goal"
                :format="format"
                label="Goal"
            />
        </thermometer-statistics>

        <div class="thermometer-outer-container">

            <thermometer-statistics v-if="statistics" class="is-justify-content-space-between thermometer-statistics-left">
                <thermometer-statistic
                    :value="value"
                    :format="format"
                    label="Raised"
                />

                <thermometer-statistic
                    :value="completed"
                    label="of goal reached"
                />
            </thermometer-statistics>

            <div class="thermometer-container">
                <div class="thermometer-tube">
                    <div class="thermometer-inner-tube">
                        <div class="thermometer-value" :style="{height: `${percentage(currentValue)}%`}" />
                    </div>
                </div>
                <div class="thermometer-reservoir">
                    <div class="thermometer-reservoir-reflection" />
                </div>
            </div>

            <thermometer-ticks
                :min="min"
                :max="max"
                :value="value"
                :ticks="ticks"
                :values="values"
                :format="format"
                :intervals="intervals"
                :percentages="percentages"
            />
        </div>

    </div>
</template>

<script>
import PercentageMixin from './PercentageMixin';
import ThermometerTicks from './ThermometerTicks';
import ThermometerStatistic from './ThermometerStatistic';
import ThermometerStatistics from './ThermometerStatistics';

export default {

    name: 'Thermometer',

    components: {
        ThermometerTicks,
        ThermometerStatistic,
        ThermometerStatistics
    },

    mixins: [
        PercentageMixin
    ],

    props: {

        value: Number,

        vertical: Boolean,

        horizontal: Boolean,

        format: Function,

        height: [Number, String],

        min: {
            type: Number,
            required: true
        },

        max: {
            type: Number,
            required: true
        },


        goal: {
            type: Number,
            default() {
                return this.max
            }
        },

        ticks: {
            type: [Boolean, Number, Array],
            default: undefined
        },

        intervals: {
            type: Boolean,
            default: undefined
        },

        values: {
            type: Boolean,
            default: undefined
        },

        percentages: {
            type: Boolean,
            default: undefined
        },

        statistics: {
            type: Boolean,
            default: false
        },

        orientation: {
            type: String,
            validate: value => ['vertical', 'horizontal'].indexOf(value) !== -1,
            default() {
                return this.horizontal && 'horizontal' || 'vertical'
            }
        }

    },

    methods: {

        unit(value, defaultValue = 'px') {
            return isFinite(value) ? value + defaultValue : value;
        }

    },

    computed: {

        currentTicks() {
            const ticks = this.ticks instanceof Array ? this.ticks : [];

            if(!isNaN(this.ticks)) {
                for(let x = 1; x <= this.ticks; x++) {
                    ticks.push(x);
                }
            }
            else if(this.ticks === true) {

            }
        },

        completed() {
            return `${(this.value / (this.goal - this.min) * 100).toFixed(2).replace(/\.00$/, '')}%`;
        },

        classes() {
            return {
                'thermometer-vertical': this.orientation === 'vertical',
                'thermometer-horizontal': this.orientation === 'horizontal'
            };
        },

        styles() {
            return {
                height: this.height && this.unit(this.height)
            };
        }

    },

    watch: {

        value() {
            this.height = value;
        }

    },

    data() {
        return {
            currentValue: 0
        };
    },

    mounted() {
        setTimeout(() => {
            this.currentValue = this.value;
        });
    }

}
</script>

<style lang="scss">
@use 'sass:math';

$thermometer-color: red;
$thermometer-background: #ddd;
$thermometer-tube-size: 1.2em;
$thermometer-reservoir-size: 3em;
$thermometer-tube-background: #fff;
$thermometer-tube-border: math.div($thermometer-tube-size, 4.5) solid #aaa;

.thermometer {
    display: flex;
    flex-direction: column;

    &.thermometer-vertical {
        flex-grow: 1;
        flex-direction: column;

        .thermometer-outer-container {
            display: flex;
            flex-direction: row;
            flex-grow: 1;

            .thermometer-container {
                align-items: center;
                flex-direction: column;

                .thermometer-value {
                    bottom: 0;
                    width: 100%;
                }

                .thermometer-tube {
                    width: .75em;
                    height: 100%;
                    transform: translateY(.125em);
                    background: $thermometer-tube-background;
                    border-radius: 2em 2em 0 0;

                    .thermometer-inner-tube {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        border-radius: 2em 2em 0 0;
                        background: $thermometer-tube-background;
                    }
                }
            }
        }
    }

    .thermometer-container {
        font-size: inherit;
        height: 100%;
        padding: .75em;
        position: relative;
        display: inline-flex;

        .thermometer-tube {
            position: relative;

            &:before {
                content: ' ';
                position: absolute;
                z-index: -2;
                padding: .75em;
                top: -.85em;
                left: -.75em;
                right: -.75em;
                bottom: .43333em;
                border: $thermometer-tube-border;
                border-bottom: 0;
                background: $thermometer-background;
                border-radius: 2em 2em 0 0;
            }
        }

        .thermometer-value {
            left: 0;
            position: absolute;
            transition: 1s all ease-in;
            background: $thermometer-color;
        }

        .thermometer-reservoir {
            position: relative;
            flex-grow: 0;
            flex-shrink: 0;
            border-radius: 100%;
            width: $thermometer-reservoir-size;
            height: $thermometer-reservoir-size;
            background: $thermometer-color;

            .thermometer-reservoir-reflection {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;

                &:before {
                    top: 25%;
                    left: 50%;
                    content: '';
                    width: .85em;
                    height: .75em;
                    position: absolute;
                    border-radius: 100%;
                    background: rgba(255, 255, 255, .35);
                }

                &:after {
                    top: 55%;
                    left: 50%;
                    content: '';
                    width: .6em;
                    height: .5em;
                    position: absolute;
                    border-radius: 100%;
                    background: rgba(255, 255, 255, .25);
                }
            }

            &:after {
                content: ' ';
                position: absolute;
                z-index: -1;
                padding: .75em;
                top: -.75em;
                left: -.75em;
                right: -.75em;
                bottom: -.75em;
                border-radius: 100%;
                border: $thermometer-tube-border;
                background: $thermometer-background;
            }
        }
    }

    .thermometer-statistics-left {
        .thermometer-statistic-value,
        .thermometer-statistic-label {
            text-align: right;
        }
    }

    .thermometer-statistics-right {
        .thermometer-statistic-value {
            font-size: 2em;
        }
    }

    .thermometer-statistics-top {
        padding: 0;
        text-align: center;

        .thermometer-statistic-value {
            font-size: 3em;
        }
    }
}
</style>
