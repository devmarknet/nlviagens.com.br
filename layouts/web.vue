<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'webLayout',
  components: { NavBar }
}
</script>

<template>
  <div>
    <NavBar/>
    <nuxt />
  </div>
</template>
