<script>
import NavBar from '@/components/NavBar.vue'
import FooterLayout from '@/components/Footer.vue'

export default {
  name: 'WebLayout',
  components: { NavBar, FooterLayout },
}
</script>

<template>
  <div>
    <NavBar />
    <nuxt />
    <FooterLayout />
  </div>
</template>
