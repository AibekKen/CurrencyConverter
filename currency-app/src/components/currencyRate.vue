<template>
  <div>
    <div class="currency">
      <div class="currency__head">
        <h1 class="currency__title">Курс валют</h1>
        <select
          class="currency__base-select"
          @change="getCurrency"
          v-model="base"
        >
          <option value="RUB">рубль(Россия)</option>
          <option value="KZT">тенге(Казахстан)</option>
          <option value="CNY">юань(Китай)</option>
        </select>
      </div>
      <div class="currency__rate"><span>EUR:</span> {{ EUR }}</div>
      <div class="currency__rate"><span>USD:</span> {{ USD }}</div>
      <div class="currency__rate"><span>GBP:</span> {{ GBP }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "",
      base: "RUB",
      EUR: 0,
      USD: 0,
      GBP: 0,
    };
  },
  methods: {
    async getCurrency() {
      let myHeaders = new Headers();
      myHeaders.append("apikey", "9kiDDpaHeRdJTdiQYPNSYn9ukqDhcpMu");
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };
      fetch(
        `https://api.apilayer.com/exchangerates_data/latest?symbols=EUR%2CUSD%2CGBP&base=${this.base}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          this.EUR = (1 / result.rates.EUR).toFixed(1);
          this.USD = (1 / result.rates.USD).toFixed(1);
          this.GBP = (1 / result.rates.GBP).toFixed(1);
        })
        .catch((error) => console.log("error", error));
    },
  },
  async mounted() {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "9kiDDpaHeRdJTdiQYPNSYn9ukqDhcpMu");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    fetch(
      `https://api.apilayer.com/exchangerates_data/latest?symbols=EUR%2CUSD%2CGBP&base=${this.base}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.EUR = (1 / result.rates.EUR).toFixed(1);
        this.USD = (1 / result.rates.USD).toFixed(1);
        this.GBP = (1 / result.rates.GBP).toFixed(1);
      })
      .catch((error) => console.log("error", error));
  },
};
</script>

<style lang='scss'>
.currency {
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.423);
  max-width: 140px;
  background: rgba(10, 144, 227, 0.374);
  box-shadow: 0 0 2px #000;
  &__head {
    margin: 0 0 11px 0;
    max-width: 125px;
    border-bottom: 1px solid #000;
  }

  &__title {
    font-weight: 600;
    font-size: 16px;
    padding: 0 0 0 2px;
    height: 15px;
    margin: 0 5px 5px 0;
  }

  &__base-select {
    margin: 0 0 5px 0;
    background: rgb(193, 195, 219);
  }

  &__rate {
    span {
      font-weight: 600;
      display: inline-block;
      margin: 0 10px 0 0;
    }
    margin: 0 0 5px 0;
  }
}
</style>
