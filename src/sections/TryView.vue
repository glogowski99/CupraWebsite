<template>
  <div class="px-4 lg:px-0 bg-dark-gray text-white cupra-light">
    <div class="f-start-col py-28 w-full lg:w-8/12 mx-auto ">
      <div class="flex items-center lg:items-start flex-col">
        <h2 class="text-4xl lg:text-6xl uppercase">wypróbuj</h2>
        <p
            class="mt-4 text-xl leading-6 text-center lg:text-start opacity-50"
        >
          Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj <br> samochody, które są wyjątkowym połączeniem technologii,<br> mocy, elegancji i komfortu.
        </p>
      </div>
      <div class="w-full flex flex-col lg:flex-row">
        <div class="flex items-center lg:items-start flex-col">
          <div class="font-the-car mt-16 w-full lg:w-[787px] h-[519px]"></div>
          <p class="small-text">Design inspirowany wyścigami, stworzony z niezwykłą dbałością o detale.
          </p>
          <div class="flex items-center lg:items-start flex-col mt-32">
            <p class="text-[40px]">TYLKO DLA ODWAŻNYCH</p>
            <p class="mt-2 text-center lg:text-start text-xl opacity-50">Model CUPRA, który idealnie wpisuje się w DNA marki. <br> Unikalny SUV coupé, wyjątkowy, odważny i innowacyjny – <br> zapewni Ci to, co najlepsze w marce CUPRA.</p>
            <a href="#contact" class="ask-button mt-8 bg-sand text-black">
              <span class="cupra-normal">Umów jazdę próbną</span>
            </a>
          </div>
        </div>
        <div class="flex items-center lg:items-start flex-col lg:ml-10">
          <div class="side-the-car mt-32 w-full lg:w-[553px] h-[737px]"></div>
          <p class="small-text">Podróżuj z rozmachem bez kompromisów.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.font-the-car {
  background-image: url("@/assets/try/left.png");
  background-position: center;
}
.side-the-car {
  background-image: url("@/assets/try/right.png");
  background-position: left;
}
.font-the-car, .side-the-car {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>