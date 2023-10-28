<template>
  <div class="overflow-x-hidden relative flex-col">
    <nav-bar/>
    <div class="flex flex-col">
      <HomeView/>
      <TryView/>
      <SliderView id="cars"/>
      <InfoView/>
      <ContactView id="contact"/>
      <FooterView/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import HomeView from "@/sections/HomeView";
import TryView from "@/sections/TryView";
import SliderView from "@/sections/SliderView";
import InfoView from "@/sections/InfoView";
import ContactView from "@/sections/ContactView";
import FooterView from "@/sections/FooterView";

export default {
  name: 'App',
  components: {
    FooterView,
    ContactView,
    InfoView,
    SliderView,
    TryView,
    HomeView,
    NavBar,

  }
}
</script>

<style>
@import url(https://db.onlinewebfonts.com/c/1a998736e1a95af302b555d9cf0f552b?family=Cupra);
@import url(https://db.onlinewebfonts.com/c/d8c243c0372d796c35aac398a8e882a1?family=Cupra+Light);
#app {
  font-family: 'Cupra', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:0;
  background-color:#F5F5F5;
}
.cupra-light {
  font-family: "Cupra Light";
}
.cupra-normal {
  font-family: 'Cupra', sans-serif;
}
</style>
