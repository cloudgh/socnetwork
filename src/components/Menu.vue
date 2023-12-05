<template>
  <div class="cmp" :class="{ 'dark_mode': isDarkMode }">
    <nav class="nav">
      <button class="nav-item1" @click="goTo('/')">
        <span class="nav-icon">&#9993;</span>
        Home
      </button>
      <button class="nav-item2" @click="goTo('/Users')">
        <span class="nav-icon">&#128101;</span>
        User
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
   
  },
  computed: {
  isDarkMode() {
    return this.$store.state.isDarkMode;
  },
}
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.dark_mode .nav {
  background-color: rgba(23, 23, 23);
  color: white;
  border: 2px solid #ffffff98;
}


.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  border-radius: 10px;
  margin: 7px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 700px){
.nav {
  right: 0;
}

.dark_mode .nav {
  margin: 2px;
}
}

.dark_mode .nav-item1{
  color: #dddddd;
}
.dark_mode .nav-item2{
  color: #dddddd;
}
.nav-item1, .nav-item2 {
  text-align: left;
  text-decoration: none;
  color: #333;
  margin: 4px ;
  border: none;
  background: none;
  cursor: pointer;
}
.nav-item1:hover{
  background-color: rgba(245, 163, 63, 0.667);
  border-radius: 10px;
  color: rgb(13, 13, 23);
  transform: scale(1.15);
}
.nav-item2:hover{
  background-color: rgba(121, 63, 245, 0.667);
  border-radius: 10px;
  color: rgb(225, 225, 230);
  transform: scale(1.15);
}
.nav-icon {
  font-size: 20px;
  margin-right: 8px;
}
</style>