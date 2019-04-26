<template>
  <div class="main_container">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showRouter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components: {
    FooterGuide
  }
}
</script>


<style>
  .main_container{
    height: 100%;
  }
</style>
