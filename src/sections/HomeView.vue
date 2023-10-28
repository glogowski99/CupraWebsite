<template>
  <div class="relative h-screen">
    <div class="cupra-image absolute left-0 right-0 bottom-0 top-0"></div>
    <div class="absolute flex justify-center flex-col w-full pt-72 h-full text-white">
      <div class="flex items-start flex-col w-8/12 mx-auto">
        <div class="flex text-xl opacity-50">
          <p class="mr-2 uppercase">cupra</p>
          <p>Formentor</p>
        </div>
        <div class="flex flex-col w-full lg:w-1/2">
          <h1 class="text-4xl lg:text-6xl leading-10 lg:leading-[64.2px] text-start font-light cupra-light">
            Wejdź do świata Cupra. <br> Poznaj prawdziwą moc i sportowego ducha marki.
          </h1>
        </div>
        <a href="#contact" class="ask-button mt-8 bg-sand text-black">
          <span>Ruszaj na jazdę testową</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.cupra-image {
  background-image: url("@/assets/mainpage-image.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>