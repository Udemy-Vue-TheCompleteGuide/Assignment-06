<template>
  <div class="container">
    <Header></Header>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <li class="list-group-item"
              v-for="index in 5" :key="index">
            <ServerItem :serverId="index"></ServerItem>
          </li>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-6">
        <ServerDetails></ServerDetails>
      </div>
    </div>
    <hr>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ServerItem from "@/components/ServerItem.vue";


export default {
  name: 'App',

  // registering components local. Only for this component.
  // Will need to register in other components individually if needed.
  components: {
    Header,
    Footer,
    ServerItem
  }

}
</script>

<style>
</style>
