<template>
  <div class="app2" :class="{ 'dark-mode': isDarkMode }">
    <lamp></lamp>
    <Menu></Menu>
    <div :class="{ 'user-info': user_info }">
      <h1>Страница пользователя</h1>
      <div class="user">
        <h3 class="info">{{ user.name }} -<br>- {{ user.username }}</h3>
        <p class="info">{{ user.email }}</p>
        <div v-if="user.address">
          <p class="info">Address: {{ user.address.city }} <br> {{ user.address.street }} <br> {{ user.address.suite }}</p>
        </div>
        <p class="infoid">{{ $route.params.userId }}<br>UserId</p>
        <div class="user-btn">
          <div class="circle"></div>
          <input type="checkbox" class="curtain" v-model="user_info">
          <div class="grid">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>
        </div>
      </div>
      

      <div class="list">
        <label>
          <input type="radio" value="Posts" v-model="categories"> Posts
          <input type="radio" value="Albums" v-model="categories"> Albums
        </label>
        <span>Выбрано: {{ categories }}</span>
      </div>
        <div v-if="categories === 'Posts'" class="post-info">
          <div v-for="post in posts" :key="post.id" class="post">
            <h3 class="post-title">{{ post.title }}</h3>
            <div class="posts">
            <p class="title">{{ post.body }}</p>
            
            <details>
              <summary @click="loadComments(post.id)">Показать комментарии</summary>
              <span>
                <ul v-for="(comment, cindex) in post.comments" :key="cindex" class="comment">
                  <li>
                    <h4>{{ comment.name }}</h4><br>
                    <p>{{ comment.body }}</p>
                  </li>
                </ul>
              </span>
            </details>
          </div>
        </div>
      </div>
      <div v-if="categories === 'Albums'" class="albums">
        <ul v-for="(album, aindex) in albums" :key="aindex" class="album">
          <li>
            <h4 @click="photospage(album.userId)">{{ album.title }}</h4>
          </li>
        </ul>
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
      user: {},
      categories: '',
      posts: [],
      albums: [],
      user_info:false,
    };
  },
  mounted() {
    const userId = this.$route.params.userId;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => (this.user = data));
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        this.posts = data.map(post => ({ ...post, comments: [] }));
      });
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then(response => response.json())
      .then(data => (this.albums = data));
    
  },    
  methods: {
    
    loadComments(postId) {
      const postIndex = this.posts.findIndex(post => post.id === postId);
      if (postIndex !== -1 && this.posts[postIndex].comments.length === 0) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
          .then(response => response.json())
          .then(data => {
            this.posts[postIndex].comments = data;
          });
      }
    },
   
    photospage(albumId) {
      this.$router.push({ name: 'photos', params: { albumId } });
    }

  },
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode;
    },
  }

};
</script>
<style lang="scss" scoped>
   .dark-mode {
    background-color: rgba(23, 23, 23);
    color: white;
    min-height: 100vh;
  }
  h1{
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 5px;
    grid-column: span 2; 
  }
  .posts{
    display: grid;
    margin: 0 auto;
    grid-template-columns: 45vw 19vw;
    @media ( max-width: 788px) {

    grid-template-columns: 64vw;
    animation: bendText 2s 1;
    
    @keyframes bendText {
    0% {
    transform: rotate(2deg);
    }
    100% {
    transform:  scalex(-1);
    }

    }
  }
}
 
  .post-info{
    display: flex;
    flex-direction: column;
    margin: 1rem auto 0 auto;
    width: 64vw;
    border: 2px solid #ffffff33;
  }
  details{
    text-align: end;
    
    margin-right: 1rem;
  }
  .dark-mode .post h3 {
    
    box-shadow: inset 2px -4px 10px #ffffff33;
  }
  .dark-mode .post h4 {
    
    box-shadow: inset 2px -4px 10px #ffffff33;
  }
  .title{
    margin: 0 1rem 1rem 1rem;
  }
  .comment li{
    border: 2px solid #ffffff33;
    margin: 5px 0;
    width: 90%;
  } 
  .post-info h4{
    text-align: center;
    background:#dfdbdb08 ;
    box-shadow: inset 2px -4px 10px #00000033;
  } 
  .post h3{
    
    text-align: center;
    padding: 20px 0px;
    width: 64vw;
    background:#dfdbdb08 ;
    box-shadow: inset 2px -4px 10px #00000033;
  }

  p{
    text-align:justify;
  }
  .albums{
    padding: 0 40%;
  }
  .post ul{
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  li{
    cursor: pointer;
  }
  .curtain{
    position: absolute;
    width: 4rem;
    height: 4rem;
    top:0.5rem;
    left:0.5rem;
    appearance: none;
    z-index: 3;
  }
  .user h3 {
    text-align: center;
  }
  .user p {
    text-align: center;
    margin: 1rem 0;
  }
  .user {
    position: relative;
    width: 270px;
    border-radius: 20px;
    background-color: rgba(163, 163, 163, 0.965);
    border: 2px solid #273840;
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    padding: 30px 20px 0 20px;
    box-shadow: 4px 4px 10px #1a1a1ab8, -4px -4px 10px #2f2f2fb8;
    animation: slideIn 1.5s ease-in-out;
    @media (max-width: 500px) {
      left: -10%;
      width: 250px;
      height: 335px;
    }
  }

  .dark-mode .user {
    border: 2px solid #70a0b6;
    box-shadow: 4px 4px 10px #dfdfdfb8, -4px -4px 10px #cececeb8;
  }

  @keyframes slideIn {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .user::before {
    content: '';
    position: absolute;
    top: -1.1rem;
    left: -1.7rem;
    width: 320px;
    height: 150%;
    background-color: #273840;
    border-radius: 20px;
    box-shadow: 4px 4px 12px #39525c, -4px -4px 10px #517382;
    z-index: -1;

    @media (max-width: 500px) {
      width: 300px;
      height: 135%;
    }
  }

  

  .infoid{
    width: 3rem;
    position: relative;
    left: 80%;
    bottom: 0;
    color: transparent;
  }
  .user-btn{
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 23px;
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    box-shadow: 4px 4px 10px #9d9d9d, -4px -4px 10px #ffffff;
    margin: 0 auto;
    left: 0em;
    right: 0;
    top: 19.7rem;
  @media (max-width: 500px) {
    margin: 0;
    left:35%;
    top:21.4rem;
    
  }
   
}
.circle{
  border-radius: 50%;
  border: 0.3em dashed #5cd6ff;
  height: 30px;
  width: 30px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  animation: moveLine 4s infinite linear;
}


.grid {
  border-radius: 25%;
  padding: 10px;
  width: 60px;
  height: 60px;
  background: #37505c;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.user-info .grid {
  background-color: #2e434d;
} 
.info{
  color: transparent;
}
.user-info .info{
  color: #273840;
  animation: drawFromBottom 1.5s ease-out; 
}

@keyframes drawFromBottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0); 
  }
}
.user-info .infoid{
  color: #273840;
  animation: drawFromBottom 1.5s ease-out; 
}
.user-info .user{
  background-color: #f8f3f3;
  
}

.user-info .box {
  border-radius: 50%;
  background: linear-gradient(145deg, #68bce6, #7be0ff);
  box-shadow: 20px 20px 60px #5192b3, -20px -20px 60px #96ffff;
} 

.user-info .circle {
  opacity: 0;
}

.box {
  position: relative;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(145deg, #3b5662, #324853);
  box-shadow: 20px 20px 60px #273840, -20px -20px 60px #486878;
  overflow: hidden;
}
h3 {
  margin-bottom: 10px;
}



@keyframes moveLine {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.list{
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  align-items: center;
}

</style> 