<template>
  <div class="app1" :class="{ 'dark-mode': isDarkMode , 'modal_open': isModalOpen }" >
   
    <div v-if="isLoading" class="loading-overlay">
      <div v-if="errorLoadingData" class="error-message">
        <p>Ошибка загрузки данных. Пожалуйста, проверьте соединение и попробуйте снова.</p>
      </div>
      <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2>Loading...</h2>
    </div>
    <lamp></lamp>
    <Menu></Menu>
    <div class="book">
      <div class=" post-cont post-cont1">
        <h1>Посты</h1>
        <div v-for="(post, index) in firstColumn" :key="post.id" class="post">
          <h3 class="post-title">{{ post.title }}</h3>
          <p>{{ post.body }}</p>
          <div class="btn">
            <button @click="openModal(post.id)">Показать комментарии к посту</button>
            <button @click="userpage(post.userId)">Перейти к пользователю</button>
          </div>
        </div>
      </div>
      <div class="sq"></div>
      <div class="post-cont post-cont2">
        <h1 class="post2">Посты</h1>
        <div v-for="(post, index) in secondColumn" :key="post.id" class="post post2">
          <h3 class="post-title">{{ post.title }}</h3>
          <p>{{ post.body }}</p>
          <div class="btn">
            <button @click="openModal(post.id)">Показать комментарии к посту</button>
            <button @click="userpage(post.userId)">Перейти к пользователю</button>
          </div>
        </div>
      </div>
    </div>

    <modal v-if="isModalOpen" @close="closeModal" :post-id="currentPostId"></modal>
  </div>
</template>

<script>
import modal from '@/components/Comments.vue';
import Menu from '@/components/Menu.vue'
export default {
  components: {
    modal,
    Menu
  },

  data() {
    return {
      posts: [],
      isModalOpen: false,
      currentPostId: null,
      isLoading: true, 
      errorLoadingData: false,
    };
  },
  
  mounted() {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          this.posts = data;
          this.isLoading = false;
        })
        .catch(error => {
          console.error('Ошибка загрузки данных:', error);
          this.errorLoadingData = true;
        });
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      this.errorLoadingData = true;
    }
  },
  methods: {
    openModal(postId) {
      console.log('Opening modal for postId:', postId);
      this.currentPostId = postId;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      console.log('Модальное окно закрыто');
      console.log('сшщыовупшщ');
    },
    userpage(userId) {
      this.$router.push({ name: 'user', params: { userId } });
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode;
    },
    firstColumn() {
      return this.posts.slice(0, Math.ceil(this.posts.length / 2));
    },
    secondColumn() {
      return this.posts.slice(Math.ceil(this.posts.length / 2));
    },
  },
};
</script>

<style lang="scss" scoped>
.error-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #faccff;
  border: 1px solid #ae00ff;
  border-radius: 5px;
  text-align: center;
  z-index: 2;
  p{
    text-align: center;
  }
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255);
  z-index: 1;
  @media (max-width: 500px) {
    width: 100vw;
  }
  h2{
    margin-top: 30px;
  }
}
.dark-mode .loading-overlay{
  background-color: rgba(23, 23, 23);
  left: 47%;
  transform: translateX(-47%);
}
.spinner {
 width: 88px;
 height: 88px;
 animation: spinner-y0fdc1 2s infinite ease;
 transform-style: preserve-3d;
}

.spinner > div {
 background-color: rgba(0,77,255,0.2);
 height: 100%;
 position: absolute;
 width: 100%;
 border: 2px solid #004dff;
}

.spinner div:nth-of-type(1) {
 transform: translateZ(-44px) rotateY(180deg);
}

.spinner div:nth-of-type(2) {
 transform: rotateY(-270deg) translateX(50%);
 transform-origin: top right;
}

.spinner div:nth-of-type(3) {
 transform: rotateY(270deg) translateX(-50%);
 transform-origin: center left;
}

.spinner div:nth-of-type(4) {
 transform: rotateX(90deg) translateY(-50%);
 transform-origin: top center;
}

.spinner div:nth-of-type(5) {
 transform: rotateX(-90deg) translateY(50%);
 transform-origin: bottom center;
}

.spinner div:nth-of-type(6) {
 transform: translateZ(44px);
}

@keyframes spinner-y0fdc1 {
 0% {
  transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
 }

 50% {
  transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
 }

 100% {
  transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
 }
}
@import "@/styles/global.scss";
  .modal_open {
    // background-attachment: fixed;
    position: fixed;
    // min-width: 98vw;
  }

  .app1{
    display: flex;
    flex-direction: column;
    min-height: fit-content;
    max-width: 100vw;
    box-sizing: border-box;

  }

  
  h1{
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    
  }
  .book{
    display: grid;
    grid-template-columns: 30vw 10px 30vw;
    margin: 80px auto ;
    
    
    @media ( max-width: 788px) {
      grid-template-columns: 55vw;
      border: 20px solid rgba(77, 58, 23);
      border-right: 10px solid #000000ae;
      border-top-right-radius: 50% 37px;
      border-bottom-right-radius: 50% 47px;
      animation: bendText 2s 1;
      
      .post-cont1::before {
        border: 0;
      }
      .post-cont2 h1{
        display: none;
      }
      .post-cont2{
        border-top: none;
        margin-top: -4rem;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 90% 25px;
         border-bottom-right-radius: 90% 40px;
      }
      .post-cont2::before {
        border: 0;
      }
      .sq{
        height: 0;
        appearance: none;
      }
      
    }
  }  
  
  @keyframes bendText {
  0% {
    transform: rotate(-2deg);
  }
  100% {
    transform:  scalex(1);
  }
}
  .sq{
    background-color: #000000ae;
    position: relative;
    top:1.1rem;
    height: calc(100% - 2.37rem);
  }
  .dark-mode .sq{
    background-color: #ffffffae;
  }
  .post-cont1 {
  position: relative;
  border: 2px solid rgba(0, 0, 0, 0.395);
  border-top-left-radius: 90% 25px;
  border-top-right-radius: 90% 40px;
  border-bottom-left-radius: 90% 25px;
  border-bottom-right-radius: 90% 40px;
  
  padding: 50px 20px;
  box-shadow: -12px 4px 10px  #00000057;
  background-color: #ffffff;
  margin-top: -0.1rem;
  }

  .post-cont1::before {
    content: '';
    position: absolute;
    top: -1.1rem;
    left: -2rem;
    width: 30.6vw;
    height: 100%;
    border: 20px solid rgba(77, 58, 23);
    border-right: 0;
    border-top-right-radius: 50% 37px;
    border-bottom-right-radius: 50% 47px;
    z-index: -1;
  }
  .post-cont2::before {
    content: '';
    position: absolute;
    top: 1.3rem;
    left: -0.1rem;
    width: 30.5vw;
    height: calc(100% - 2.8rem) ; 
    border: 17px solid rgba(77, 58, 23);
    border-left: 0;
    border-top-left-radius: 50% 27px;
    border-bottom-left-radius: 50% 38px;
    z-index: -1;
  }
 

 
  .post-cont2{
    margin-top: -23px;
    position: relative;
    border: 2px solid rgba(0, 0, 0, 0.49);
    border-top-left-radius: 40% 80px;
    border-top-right-radius: 90% 30px;
    border-bottom-left-radius: 90% 40px;
    border-bottom-right-radius: 90% 35px;
    padding: 50px 20px;
    box-shadow: 12px 4px 10px -6px #00000057;
    background-color: #ffffff;
    
  }

  h3{
    text-align: center;
    padding: 20px 0px;
    background:#dfdbdb08 ;
    box-shadow: inset 2px -4px 10px #00000033;
  }

  p{
    text-align:justify;
    margin: 1rem 2rem;
  }
  .btn{
    display: flex;
    justify-content: center;
    margin: 0.5rem 0;
    gap:1rem
  }
  button{
    margin-bottom:0.5rem ;
    width: 170px;
    border: none;
    border-radius: 40px;
    padding: 10px 5px;
    text-align: match-parent;
    cursor: pointer;
    text-decoration: none;
    background:#dfdbdb08 ;
    box-shadow: inset 2px -4px 10px #00000033;
  }
  .dark-mode {
    background-color: rgba(23, 23, 23);
    color: white;
    min-height: 100vh;
  }
  .dark-mode h3 {
    
    box-shadow: inset 2px -4px 10px #ffffff33;
  }
  .dark-mode button {
    box-shadow: inset 2px -4px 10px rgba(255, 255, 255, 0.2);
    color: #ffffff;
    background:#3a3a3a ;

  }
  .dark-mode .post-cont1{
    background-color: #57575733;
    box-shadow: -12px 4px 10px  #ffffff57;
    @media ( max-width: 788px) {
      background-color: #232323;
    }
  }
  
  .dark-mode .post-cont2{
    background-color: #57575733;
    @media ( max-width: 788px) {
      background-color: #232323;
    }
  }
  .dark-mode .post-cont .post {
    border: 2px solid rgba(255, 255, 255, 0.395);
    box-shadow: -12px 4px 10px -6px #ffffff2d;

  }
 
</style>
