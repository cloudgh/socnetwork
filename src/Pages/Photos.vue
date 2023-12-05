
<template>
  <div class="app3" :class="{ 'dark-mode': isDarkMode }">
    <lamp></lamp>
    <Menu></Menu>
    <h1>Photos</h1>
    <div class="photo-gallery">
      <div v-for="photo in photos" :key="photo.id" class="photo-item" @click="bigPhoto(photo.id, albumId)">
        <img :src="photo.thumbnailUrl" :alt="photo.title" />
      </div>
    </div>

    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal-content">
        <span class="close-btn" @click="closeModal">&times;</span>
        <img :src="modalImageUrl" alt="Large Photo" />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  components: {
    Menu
  },
  data() {
    return {
      photos: [],
      albumId: null,
      isModalOpen: false,
      modalImageUrl: "",
    };
  },
  mounted() {
    this.albumId = this.$route.params.albumId;
    fetch(`https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`)
      .then(response => response.json())
      .then(data => (this.photos = data));
  },
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode;
    },
  },
  methods: {
    bigPhoto(photoId) {
      const photo = this.photos.find(p => p.id === photoId);
      if (photo) {
        this.modalImageUrl = photo.url;
        this.isModalOpen = true;
      }
    },
    closeModal() {
      this.isModalOpen = false;
      this.modalImageUrl = "";
    },
  },
};
</script>

<style scoped>


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bendText 2s 1;;

  
}
@keyframes bendText{
  0% {
    transform: scale(0.1);
  }
  100% {
    transform:  scale(1);
  }
}
.modal-content {

  max-width: 60vw;
  max-height: 60vw;
  position: fixed;
  
}

.modal-content img {
  max-width: 60vw;
  max-height: 60vw;
  object-fit: cover;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #060606;
}
h1{
    display: flex;
    margin-left: 40vw;
    text-align: center;
    margin-bottom: 5px;
  }
.photo-gallery {
  margin-left: 10vw;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;
  max-width: 65vw; 
}

.photo-item {
  flex-basis: 15%;
  transition: all 0.8s cubic-bezier(0.25, 0.4, 0.45, 1.4);
}

.photo-item img {
  width: 100%;
  height: 150px;
  border-radius: 20px;
  object-fit: cover;
}

.photo-item:hover {
  flex-grow: 5;
}
.dark-mode {
    background-color: rgba(23, 23, 23);
    color: white;
    min-height: 100vh;
  }
</style>
