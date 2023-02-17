//console.log('Milos Teodosic');


  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: "Quando inizi Vue ma è Venerdì",
        src: './img/venerdi.jpg',
        titleStyle: {
          color: 'red',
          fontSize: '40px',
          textTransform: 'uppercase',
        },
        imgClass: 'title__img'
      }
    }
  }).mount('#app')

