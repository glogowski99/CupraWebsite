<template>
  <div class="cupra-light flex flex-col py-14 lg:py-28 px-4 lg:px-0 bg-dark-gray text-white">
    <div class="flex flex-col w-full lg:w-8/12 mx-auto">
      <div class="flex flex-col lg:flex-row w-full">
        <div class="w-full lg:w-1/2">
          <div class="h-[519px] w-full lg:w-[787px] first-img"></div>
        </div>
        <div class="lg:ml-16 mt-10 lg:mt-0 w-full lg:w-1/2">
          <div class="flex flex-col items-center lg:items-start px-14 h-[332px] text-center lg:text-start bg-dark-gray">
            <p class="leading-7">Technologia</p>
            <p class="text-4xl leading-[48px]">Poczuj pełną wolność <br> jazdy dzięki licznym <br> innowacjom.</p>
            <div class="flex items-start">
              <a href="#contact" class="info-btn">
                <span class="cupra-normal">Umów jazdę próbną</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mb-40 lg:mb-0 mt-40 w-full relative">
        <div class="w-full lg:w-1/2">
          <div class="w-full lg:hidden">
            <div class="h-[519px] w-full second-img "></div>
          </div>
          <div class="flex items-center lg:items-start flex-col absolute lg:px-14 mt-10 lg:mt-0 h-[332px] bg-dark-gray ml-10">
            <p class="leading-7">Potęga Designu</p>
            <p class="text-4xl leading-[48px] text-center lg:text-start">Crossover emanujący <br> gracją, dynamizmem <br> i czystym wyrafinowaniem.</p>
            <div class="flex items-start">
              <a href="#contact" class="info-btn">
                <span class="cupra-normal">Umów jazdę próbną</span>
              </a>
            </div>
          </div>
        </div>
        <div class="hidden lg:flex">
          <div class="h-[519px] w-[787px] second-img "></div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row mt-96 lg:mt-40 w-full">
        <div class="w-full lg:w-1/2">
          <div class="h-[519px] w-full lg:w-[787px] third-img"></div>
        </div>
        <div class="lg:ml-16 w-full lg:w-1/2">
          <div class="flex flex-col items-center lg:items-start lg:px-14 mt-10 lg:mt-0 h-[332px] text-center lg:text-start bg-dark-gray">
            <p class="leading-7">Design wnętrza</p>
            <p class="text-4xl leading-[48px]">Idealny komfort. Unikalny <br> wystrój wnętrza stworzony <br> w stylu CUPRY.</p>
            <div class="flex items-start">
              <a href="#contact" class="info-btn">
                <span class="cupra-normal">Umów jazdę próbną</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.first-img {
  background-image: url("@/assets/info/CUPRAFORMENTOR294.jpg");
}
.second-img {
  background-image: url("@/assets/info/CUPRAFORMENTOR418.jpg");
}
.third-img {
  background-image: url("@/assets/info/CUPRAFORMENTOR381.jpg");
}
.first-img, .second-img, .third-img{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
