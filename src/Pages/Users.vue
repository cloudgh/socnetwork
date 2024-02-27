<template>
  <div class="app4" :class="{ 'dark-mode': isDarkMode }">
    <lamp></lamp>
    <Menu></Menu>
    <h1>Users</h1>
    <div class="user-container">
      <div class="user" v-for="(user, index) in users" :key="index" @click="userPage(index)">
        <div class="user-card">
          <h3 class="info">{{ user.name }} -<br>- {{ user.username }}</h3>
          <p class="info">{{ user.email }}</p>
          <div v-if="user.address">
            <p class="info">Address: {{ user.address.city }} <br> {{ user.address.street }} <br> {{ user.address.suite }}</p>
          </div>
          <p class="infoid">{{ user.id }}<br>UserId</p>
        </div>
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
      users: {},
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => (this.users = data));
  },
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode;
    },
  },

  methods: {
    userPage(userId) {
      userId +=1;
      this.$router.push({ name: 'user', params: { userId } });
    }
  },
};
</script>

<style lang="scss" scoped>
.app4{
  @media (max-width: 500px) {
    padding-top: 78px;
    
  }
}
.dark-mode {
  background-color: rgba(23, 23, 23);
  color: white;
  min-height: 100vh;
}

h1 {
  text-align: center;
  padding: 20px 0px;
  background: #dfdbdb08;
}

.dark-mode h1 {
  box-shadow: inset 2px -4px 10px #ffffff33;
}

.user-container {
  display: flex;
  flex-wrap: wrap;
  width: 65vw;
  justify-content: space-around;
  margin: 0 auto; 
}

.user {
  flex: 0 0 calc(20% - 20px); 
  margin: 10px;
  height: 250px;
  @media (max-width: 500px) {
    
    min-width: 60vw;
  }
}

.user-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  padding: 20px;
  text-align: center;
  transition: box-shadow 0.3s; 
  height: 100%;
}

.user-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
}
.dark-mode .user-card:hover{
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}
.dark-mode .user-card {
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
  color: white;
}
</style>
