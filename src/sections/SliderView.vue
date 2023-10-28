<template>
  <div class="f-center py-14 lg:py-28 px-4 lg:px-0">
    <div class="relative f-center w-full h-[400px] lg:h-[635px]">
      <div class="hidden lg:flex flex-col absolute left-[-20%] top-0 opacity-50">
        <p class="text-5xl cupra-normal">{{ cars[previousIdSlide].name }}</p>
        <div class="relative f-center w-full">
          <img :src="cars[previousIdSlide].image" :alt="cars[previousIdSlide].alt"/>
        </div>
        <div class="f-center flex-col w-full">
          <p>{{ cars[previousIdSlide].details }}</p>
          <div class="f-start-center w-full my-10 w-1/2">
            <div>
              <p class="cupra-light text-sm">Dostępny w leasingu z <br> 0% opłaty własnej</p>
            </div>
            <div class="f-center flex-col mx-24">
              <p class="cupra-light text-sm">Rata netto/mies. od*</p>
              <p class="cupra-normal text-xl">{{ cars[previousIdSlide].monthlyRate }}</p>
            </div>
            <div class="f-center flex-col">
              <p class="cupra-light text-sm">Cena brutto już od</p>
              <p class="cupra-normal text-xl">{{ cars[previousIdSlide].price }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute h-full w-full lg:w-[1066px]">
        <p
            class="text-3xl lg:text-5xl cupra-normal"
        >
          {{ cars[currentIdSlide].name }}
        </p>
        <div class="relative f-center w-full">
          <img
              :src="cars[currentIdSlide].image"
              :alt="cars[currentIdSlide].alt"
          />
          <button
              class="absolute top-1/2 left-[-15px] left-[-20px] bottom-50 f-center bg-white w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] z-10"
              @click="prevSlide"
          >
            <img
                src="@/assets/arrow-left.png"
                alt="Strzałka w lewo"
            />
          </button>
          <button
              class="absolute top-1/2 right-[-15px] lg:right-[-20px] bottom-50 f-center bg-white w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] z-10"
              @click="nextSlide"
          >
            <img
                src="@/assets/arrow-right.png"
                alt="Strzałka w lewo"
            />
          </button>
        </div>
        <div class="f-center flex-col w-full">
          <p>{{ cars[currentIdSlide].details }}</p>
          <div class="f-start-center w-full my-10 w-full lg:w-1/2">
            <div>
              <p class="cupra-light text-xs lg:text-sm">Dostępny w leasingu z <br> 0% opłaty własnej</p>
            </div>
            <div class="f-center flex-col mx-10 lg:mx-24">
              <p class="cupra-light text-xs lg:text-sm">Rata netto/mies. od *</p>
              <p class="cupra-normal text-base lg:text-xl">{{ cars[currentIdSlide].monthlyRate }}</p>
            </div>
            <div class="f-center flex-col">
              <p class="cupra-light text-xs lg:text-sm">Cena brutto już od</p>
              <p class="cupra-normal text-base lg:text-xl">{{ cars[currentIdSlide].price }}</p>
            </div>
          </div>
          <a href="#contact" class="py-3 px-6 bg-box-bgc text-white">
            <span>Umów jazdę próbną</span>
          </a>
        </div>
      </div>
      <div class="hidden lg:flex flex-col absolute right-[-20%] top-0 opacity-50">
        <p class="text-5xl cupra-normal">{{ cars[nextIdSlide].name }}</p>
        <div class="relative f-center w-full">
          <img :src="cars[nextIdSlide].image" :alt="cars[nextIdSlide].alt"/>
        </div>
        <div class="f-center flex-col w-full">
          <p>{{ cars[nextIdSlide].details }}</p>
          <div class="f-start-center w-full my-10 w-1/2">
            <div>
              <p class="cupra-light text-sm">Dostępny w leasingu z <br> 0% opłaty własnej</p>
            </div>
            <div class="f-center flex-col mx-24">
              <p class="cupra-light text-sm">Rata netto/mies. od*</p>
              <p class="cupra-normal text-xl">{{ cars[nextIdSlide].monthlyRate }}</p>
            </div>
            <div class="f-center flex-col">
              <p class="cupra-light text-sm">Cena brutto już od</p>
              <p class="cupra-normal text-xl">{{ cars[nextIdSlide].price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref} from "vue";
export default {
  setup() {
    const cars = [
      {
        name: "Nowa CUPRA Born",
        image: require("@/assets/cars/cupraborn.png"),
        alt: "Zdjęcie samochodu 'CUPRA Born' ze strony kierowcy, bokiem",
        details: "Akumulator 58 kWh moc do 204 KM²",
        monthlyRate: "1943 zł",
        price: "179 600 zł",
      },
      {
        name: "CUPRA Formentor VZ",
        image: require("@/assets/cars/cupraformentorvz.png"),
        alt: "Zdjęcie samochodu 'CUPRA Formentor VZ' ze strony kierowcy, bokiem",
        details: "Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM",
        monthlyRate: "1553 zł",
        price: "152 400 zł",
      },
      {
        name: "CUPRA Ateca",
        image: require("@/assets/cars/cupraateca.png"),
        alt: "Zdjęcie samochodu 'CUPRA Ateca' ze strony kierowcy, bokiem",
        details: "Maksymalna prędkość: 247 KM/H Moc silnika: 300 KM",
        monthlyRate: "2334 zł",
        price: "220 700 zł",
      },
      {
        name: "CUPRA Formentor",
        image: require("@/assets/cars/cupraformentor.png"),
        alt: "Zdjęcie samochodu 'CUPRA Formentor' ze strony kierowcy, bokiem",
        details: "Maksymalna prędkość: 204 KM/H Moc silnika: 150 KM",
        monthlyRate: "1439 zł",
        price: "127 800 zł",
      },
      {
        name: "Leon",
        image: require("@/assets/cars/leon.png"),
        alt: "Zdjęcie samochodu 'Leon' ze strony kierowcy, bokiem",
        details: "Maksymalna prędkość: 245 KM/H Moc silnika: 300 KM",
        monthlyRate: "1553 zł",
        price: "152 400 zł",
      },
      {
        name: "Leon Sportstourer",
        image: require("@/assets/cars/leonsportstourer.png"),
        alt: "Zdjęcie samochodu 'Leon Sportstourer' ze strony kierowcy, bokiem",
        details: "Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM",
        monthlyRate: "1601 zł",
        price: "156 200  zł",
      },
    ];

    const currentIdSlide = ref(0);
    const previousIdSlide = ref(cars.length-1);
    const nextIdSlide = ref(1);
    const nextSlide = () => {
      previousIdSlide.value = currentIdSlide.value;
      currentIdSlide.value = (currentIdSlide.value + 1) % cars.length;
      nextIdSlide.value = (currentIdSlide.value + 1) % cars.length;
    };
    const prevSlide = () => {
      previousIdSlide.value = currentIdSlide.value;
      currentIdSlide.value = (currentIdSlide.value - 1 + cars.length) % cars.length;
      nextIdSlide.value = (currentIdSlide.value + 1) % cars.length;
    };
    return {currentIdSlide,previousIdSlide,nextIdSlide, nextSlide, prevSlide, cars};
  },
};
</script>