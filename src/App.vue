<template>
<div>
  <Navbar/>
</div>
</template>
<script>

import Navbar from "@/views/Navbar.vue"
export default {
  name: "App",
  components: {
    Navbar,
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout)
        }
        throw err;
      });
    });
  }
}
</script>

<style>
    
</style>
