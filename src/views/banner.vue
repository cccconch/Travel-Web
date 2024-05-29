<template>
    <div class="carousel">
      <ul>
        <li v-for="(image, index) in images" :key="index" :class="{ active: index === currentIndex }">
          <img :src="image.src" :alt="image.alt">
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { src: '../assets/images/01.jpg', alt: 'Image 1' },
          { src: '../assets/images/01.jpg', alt: 'Image 2' },
          { src: '../assets/images/01.jpg', alt: 'Image 3' },
        ],
        currentIndex: 0
      };
    },
    methods: {
      prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }
    }
  }
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    display: none;
  }
  
  li.active {
    display: block;
  }
  
  .controls {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  button {
    margin: 0 5px;
  }
  </style>
  