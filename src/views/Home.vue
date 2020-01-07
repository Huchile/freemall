<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{name}}</p>
    <button type="button" name="button" @click="update">更新数据</button>
    <HelloWorld msg="Welcome to Your Vue.js App" v-if="show"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
      return {
          show:true,
          name:"welcome to vue"
      }
  },
  //生命周期，八个方法
  beforeCreate(){
      console.log('beforeCreate');
      console.log(this.$el);
      console.log(this.$data);
  },
  created(){
      console.log('created');
      console.log(this.$el);
      console.log(this.$data);
  },
  beforeMount(){
      console.log('beforeMount');
      console.log(this.$el);
      console.log(this.$data);
  },
  mounted(){
      console.log('mounted');
      console.log(this.$el);
      console.log(this.$data);
  },
  beforeUpdate(){
      console.log('beforeUpdate');
  },
  updated(){
      console.log('updated');
  },
  beforeDestroy(){
      console.log('beforeDestroy');
  },
  destroyed(){
      console.log('destroyed');
  },
  methods:{
      update(){
          this.name = 'jack'
          //this.show = false
      }
  }
}
</script>
