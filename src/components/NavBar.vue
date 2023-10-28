<template>
  <div class="fixed w-full py-4 bg-[#F5F5F5] z-10">
    <div class="f-center-between w-full px-4 lg:px-0 lg:w-8/12 h-full mx-auto relative">
      <a href="#">
        <img alt="Cupra logo" src="@/assets/cupra-logo.png">
      </a>
      <div class="flex items-center justify-center text-nav-font-color hidden lg:flex">
        <a
            v-for="(link, index) in links"
            :key="index"
            :href="link.href"
            class="px-2"
        >
          {{ link.text }}
        </a>
      </div>
      <div class="flex items-center text-nav-font-color hidden lg:flex">
        <a class="mr-6 text-sm font-bold" href="tel:+48585066565">+48 58 506 65 65</a>
        <a class="ask-button mx-6 border border-solid border-box-bgc" href="#contact">
          <span>Zapytaj o ofertę</span>
        </a>
        <a class="test-drive-btn" href="#contact">
          <span>Umów jazdę próbną</span>
        </a>
      </div>
      <button class="text-nav-font-color px-4 py-2 lg:hidden" @click="toggleMobileMenu">
        <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M4 6h16M4 12h16m-7 6h7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
          />
        </svg>
      </button>
    </div>
  </div>
  <div
      :class="{ 'dropdown-menu': mobileMenuOpen }"
      class="mobile-menu"
  >
    <div class="flex items-center justify-between w-full px-4">
      <a href="#">
        <img alt="Cupra logo" src="@/assets/cupra-logo.png">
      </a>
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-xl font-bold pr-4">X</button>
    </div>
    <div class="flex flex-col items-center justify-center mt-20">
      <a v-for="(link, index) in links" :key="index" :href="link.href" class="block px-2 py-1 mb-2">
        {{ link.text }}
      </a>
    </div>
    <div class="flex flex-col justify-center items-center mt-4">
      <a class="mr-6 text-sm font-bold text-center" href="tel:+48585066565">+48 58 506 65 65</a>
      <div class="flex items-center justify-center px-4 mt-10">
        <a class="py-2 px-5 mr-6 border border-solid border-box-bgc text-xs" href="#contact">
          <span>Zapytaj o ofertę</span>
        </a>
        <a class="py-2 px-5 bg-box-bgc text-white text-xs" href="#contact">
          <span>Umów jazdę próbną</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const links = [
      {href: "#cars", text: "Samochody"},
      {href: "#contact", text: "Jazda próbna"},
      {href: "#contact", text: "Oferta"},
      {href: "#contact", text: "Salony Cupra"},
    ];
    const mobileMenuOpen = ref(false);
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    return {
      links,
      mobileMenuOpen,
      toggleMobileMenu,
    };
  },
};
</script>
<style scoped>
.mobile-menu {
  width: 100%;
  height: 0px;
  background-color: #F5F5F5;
  transition: height 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
  position: fixed;
  z-index: 10000;
}

.dropdown-menu {
  height: calc(65vh - 50px);
  transition: height 0.2s ease;
}
</style>
