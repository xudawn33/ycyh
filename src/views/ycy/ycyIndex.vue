<template>
  <div>ycy{{ token }}</div>
</template>
<script>
export default {
  name: "ycyIndex",
  data() {
    return  {
      token: ""
    }
  },
  created() {
    this.token = this.$store.getters.token
  },
}
</script>

