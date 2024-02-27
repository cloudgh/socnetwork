<template>
  <div class="modal" id="modal" v-if="isVisible">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <div v-for="(comment, index) in comments" :key="index" class="comment">
        <h4>{{ comment.name }}</h4>
        <p>{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['postId'],
  data() {
    return {
      isVisible: false,
      comments: []
    };
  },
  // watch: {
 
  //   postId() {
  //     // if (this.isVisible === true) {
  //       this.loadComments();
  //       // this.handler();
  //     // }
  //   }
  // },
  methods: {
    loadComments() {
      const currentPostId = this.postId;
      console.log('Loading comments for postId:', currentPostId);

      fetch(`https://jsonplaceholder.typicode.com/posts/${currentPostId}/comments`)
        .then(response => response.json())
        .then(data => {
          console.log('Comments loaded for postId:', currentPostId, data);
          this.comments = Array.from(data);
          this.isVisible = true;
        });
    },
    closeModal() {
      // this.clearContent();
      this.$emit('close');
      // return null;
    },
    
  },
 
  mounted(){
    // this.loadComments();
    const currentPostId = this.postId;
      console.log('Loading comments for postId:', currentPostId);

      fetch(`https://jsonplaceholder.typicode.com/posts/${currentPostId}/comments`)
        .then(response => response.json())
        .then(data => {
          console.log('Comments loaded for postId:', currentPostId, data);
          this.comments = Array.from(data);
          this.isVisible = true;
        });
  }

};
</script>


<style lang="scss" scoped>
.modal {
  display: table;
  position: fixed;
  top: 50%;
  left: 50%;; 
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  width: 90vw;
  margin-top: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-height: 80vh; 
  overflow-y: auto;
  z-index: 3;
  animation: bendText 2s 1;;

  
}
@keyframes bendText{
  0% {
    transform: translate(0%, 0%) scale(0.1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.modal-content {
  margin: 0 auto;
  // max-width: 90vw;
  max-height: 88vh;
  overflow-y: auto;
}

.close {
  position: absolute;
  top: -0.4rem;
  right: 0.2rem;
  cursor: pointer;
  font-size: 20pt;
}
h4{
    text-align: center;
    padding: 20px 0px;
    background:#dfdbdb08 ;
    box-shadow: inset 2px -4px 10px #00000033;
   
  }

  p{
    text-align:justify;
    margin: 1rem 2rem;
  }
  .dark-mode h4 {
    
    box-shadow: inset 2px -4px 10px #ffffff33;
  }
  .dark-mode .modal{
    background-color: #575757;
  }
</style>
