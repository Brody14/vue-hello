//console.log('Milos Teodosic');


  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: "Quando inizi Vue ma è Venerdì",
        src: './img/venerdi.jpg'
      }
    }
  }).mount('#app')

