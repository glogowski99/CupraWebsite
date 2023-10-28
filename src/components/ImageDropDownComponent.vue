<template>
  <div
      style="margin: 30px; padding: 30px; border: 1px solid #D5D5D5; display: flex; justify-content: space-between;align-items: center;"
      class="w-full lg:w-[500px] h-[145px]"
      @click="dropAction">
    <div v-if="selectedCar" class="flex justify-between items-center">
      <div class="flex items-center justify-center ">
        <img :src="selectedCar.image" :alt="selectedCar.alt" class="translate-x-[-1.8rem] lg:translate-x-[-6rem] h-[84px] lg:h-[128px]">
          <p class="cupra-normal">{{ selectedCar.name }}</p>
      </div>

      <div class="ml-10">
        <img alt="Strzałka do góry lub na dół" src="@/assets/arrow-left.png" :class="{'rotate-[270deg]': open, 'rotate-90': !open}"/>
      </div>
    </div>
    <div v-else class="flex items-center justify-between w-full">
      <span class="cupra-normal">Wybierz model</span>
      <img alt="Strzałka do góry lub na dół" src="@/assets/arrow-left.png" :class="{'rotate-[270deg]': open, 'rotate-90': !open}"/>
    </div>


  </div>

  <div v-if="open" class="translate-y-[-1.9rem] lg:translate-x-[8.2rem] w-full" style="">
    <div v-for="car in cars" :key="car.name">
      <div
          @click="selectCar(car)"
          class="flex justify-start items-center w-full lg:w-[500px] h-[145px]"
          style="border: 1px solid #D5D5D5;"
      >
        <img :src="car.image" :alt="car.alt" class="translate-x-[-1.6rem] lg:translate-x-[-4rem] h-[84px] lg:h-[128px]">
        <p class="cupra-normal">{{ car.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";

export default {
  name: "ImageDropDownComponent",
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ["update:selectedCar"],
  setup(props, {emit}) {

    function fetchCars() {
      return Promise.resolve([
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
      ]);
    }

    const cars = ref([]);
    onMounted(() => {
      fetchCars().then(response => {
        cars.value = response;
      }, err => {
        alert("Nie udało się załadować")
        console.error(err);
      })
    })
    const open = ref(false);
    const selectedCar = ref(props.modelValue || cars.value[0]);

    function selectCar(car) {
      selectedCar.value = car;
      emit("update:modelValue", car)
      open.value = !open.value
    }

    function dropAction() {
      open.value = !open.value;
    }

    return {cars, selectedCar, selectCar, open, dropAction}
  }
}
</script>

<style scoped>

</style>