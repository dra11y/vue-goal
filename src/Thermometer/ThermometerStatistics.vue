<template>
    <div class="thermometer-statistics">
        <slot />
    </div>
</template>

<script>
export default {

    name: 'ThermometerStatistics'

}
</script>

<style lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import 'bootstrap/scss/_variables.scss';

.thermometer-statistics {
    display: flex;
    padding: 2em 1em 3em;
    flex-direction: column;
}
</style>
