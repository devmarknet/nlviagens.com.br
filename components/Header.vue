<script>
export default {
  name: 'HeaderComponent',
    props: {
    headerProps: { type: Object },
  }
}

</script>

<template>
  <div class="container">
    <h1 class="title">{{ headerProps.main_section.title }}</h1>
    <p class="sub-title" v-html="headerProps.main_section.sub_title" />
    <a class="action" :href="headerProps.main_section.action">{{ headerProps.main_section.action_text }}</a>
  </div>
</template>

<style lang="postcss" scoped>
.container {
  .title {
    @apply
      text-7xl
    ;
  }
}
</style>
