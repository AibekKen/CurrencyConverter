<template >
  <div class="convert">
    <h2 class="convert__title">Конвертер валют</h2>
    <form @submit.prevent="toConvert" class="convert__form" action="#">
      <div class="convert__form-block">
        <input
          class="convert__input"
          min="0"
          v-model="inputCurrency"
          type="number"
        />
        <button class="convert__submit" type="submit">Convert</button>
      </div>
      <div class="convert__form-block">
        <div class="convert__select-block">
          <label for="convert__from">from</label>
          <select
            v-model="fromCurrency"
            class="convert__from"
            id="convert__from"
          >
            <option value="RUB">RUB</option>
            <option value="KZT">KZT</option>
            <option value="CNY">CNY</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div class="convert__select-block">
          <label for="convert__to">to</label>
          <select v-model="toCurrency" class="convert__to">
            <option value="RUB">RUB</option>
            <option value="KZT">KZT</option>
            <option value="CNY">CNY</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
      </div>
    </form>
    <div class="convert__result">
      ИТОГО: <span class="convert__result_count">{{ result }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputCurrency: 0,
      fromCurrency: "USD",
      toCurrency: "RUB",
      result: 0,
    };
  },
  methods: {
    async toConvert() {
      let myHeaders = new Headers();
      myHeaders.append("apikey", "9kiDDpaHeRdJTdiQYPNSYn9ukqDhcpMu");

      let requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      fetch(
        `https://api.apilayer.com/exchangerates_data/convert?to=${this.toCurrency}&from=${this.fromCurrency}&amount=${this.inputCurrency}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => (this.result = result.result.toFixed(2)))
        .catch((error) => console.log("error", error));
    },
  },
};
</script>
<style lang="scss">
label {
  display: inline-block;
  width: 50px;
}
.convert {
  &__form {
    display: flex;
    margin: 0 0 5px 0;
  }

  &__title {
    font-weight: 600;
    font-size: 16px;
    margin: 0 0 5px 0;
  }

  &__input {
    max-width: 50px;
    border: 1px solid rgba(0, 0, 0, 0.379);
    margin: 0 10px 8px 0;
  }
  
  &__submit {
    display: block;
    padding: 3px;
    color: #fff;
    background: rgb(21, 27, 209);
    transition: all 0.3s ease;
    border-radius: 3px;
    box-shadow: 0 0 3px rgb(31, 1, 1);
    &:hover {
      background: rgb(111, 84, 185);
    }
  }

  &__form-block:last-child {
    padding: 2px;
    background: rgb(152, 212, 224);
  }

  &__select-block:first-child {
    margin: 0 0 10px 0;
  }

  &__result {
    font-weight: 600;
    &_count {
      color: rgb(19, 154, 154);
    }
  }
}
</style>