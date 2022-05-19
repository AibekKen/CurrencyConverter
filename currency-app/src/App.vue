<template>
  <div class="container">
    <currency-rate />
    <currency-convert />
  </div>
</template>

<script>
import currencyConvert from "./components/currencyConvert.vue";
import currencyRate from "./components/currencyRate.vue";
export default {
  components: { currencyConvert, currencyRate },
  name: "App",
};
</script>

<style lang='scss'>
@import "@/assets/styles/nullstyle.scss";

#app {
  max-width: 1100px;
  padding: 15px;
  margin: 0 auto;
}
.container {
  display: flex;
  max-width: 350px;
  justify-content: space-between;
  margin: 0 auto;
}
</style>
