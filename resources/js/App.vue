<template>
    <div class="app">
        <table-b></table-b>
        <buttons-option></buttons-option>
    </div>
</template>

<script>
import tableB from './components/tableB.vue'
import buttonsOption from './components/buttonsOption.vue'

export default ({
    name: 'app',
    components: {
        tableB,
        buttonsOption
    }
})
</script>
