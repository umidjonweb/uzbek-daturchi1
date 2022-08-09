<template>
  <div class="grid place-content-center my-14 ">
    <button type="button" class="my-violet-border w-64 h-12 sm:h-14 md:h-16 sm:w-72 md:w-80 lg:w-96 lg:h-20 my-violet-text medium-font text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 ">Наверх</button>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.my-violet-border{
  border: 2px solid #5374CA;
}
.my-violet-text{
  color: #5374CA;
}
button{
  border-radius: 30px;
}
button:hover{
  background-color: #5374CA;
  color: white;
}
</style>