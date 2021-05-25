<template>
  <div class="app">
    <form action="/" method="get">
      <table-a></table-a>
      <table-b></table-b>
      <buttons-option></buttons-option>
    </form>
  </div>
</template>

<script>
import tableA from "./components/tableA.vue";
import tableB from "./components/tableB.vue";
import buttonsOption from "./components/buttonsOption.vue";

export default {
  name: "app",
  components: {
    tableA,
    tableB,
    buttonsOption,
  },
};
</script>
