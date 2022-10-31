<script>
export default {
  name: 'AboutComponent',
  props: {
    aboutProps: { type: Object }
  },
  methods: {
    getImage (uuid) {
      return `${this.$graphql.assets.url}/${uuid}`
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="box-text">
      <span class="span">Quem Somos</span>
      <h2 class="title">{{ aboutProps.about.title }}</h2>
      <p class="text" v-html="aboutProps.about.text" />
      <a class="button" href="/a-empresa" title="Conheça mais">Conheça mais</a>
    </div>
    <div class="box-image">
      <img :src="getImage(aboutProps.about.image.id)" alt="" class="image">
    </div>
  </div>
</template>


<style lang="postcss" scoped>
  .container {
    @apply
      flex
      px-80
      py-32
      gap-[60px]
      w-full
      items-center
      justify-center
      min-w-full
      overflow-hidden
    ;

    & .box-text {
      @apply
        text-gray
        max-w-2xl
      ;

      & .span {
        @apply
          font-semibold
        ;
      }

      & .title {
        @apply
          text-[32px]
          leading-9
          font-title
          mt-4
          mb-10
        ;
      }

      & .text {
        @apply
          mb-14
        ;
      }

      & .button {
        @apply
          text-white
          font-bold
          px-8
          py-4
          rounded-lg
          bg-blue
          cursor-pointer
          max-w-max
          transition-all
        ;
      }

      & .button:hover{
        @apply
          bg-dark-blue
        ;
      }
    }

    & .box-image {
      & .image {
        @apply
          rounded-2xl
        ;
      }
    }
  }
</style>
