<template>
    <div class="thermometer-statistic">
        <div class="thermometer-statistic-value">{{ format(value) }}</div>
        <div class="thermometer-statistic-label">{{ label }}</div>
    </div>
</template>

<script>
export default {

    name: 'ThermometerStatistic',

    props: {

        value: [String, Number],

        label: String,

        format: {
            type: Function,
            default: value => value
        }

    }

}
</script>

<style lang="scss">
.thermometer-statistic {

    .thermometer-statistic-value {
        font-weight: 600;
        line-height: 1em;
        font-size: 1.75em;
    }

    .thermometer-statistic-label {
        font-size: .85em;
        font-weight: 300;
        color: #888;
        word-wrap: none;
        word-break: keep-all;
    }

}
</style>
