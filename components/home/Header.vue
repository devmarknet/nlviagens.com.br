<script>
export default {
  name: 'HeaderComponent',
  props: {
    headerProps: { type: Object },
  },
  methods: {
    getImage(uuid) {
      return `${this.$graphql.assets.url}/${uuid}?fit=cover&height=850&width=1920`
    },
  },
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="box-info">
        <h1 class="title">{{ headerProps.main_section.title }}</h1>
        <p v-html="headerProps.main_section.sub_title" class="sub-title" />
        <a
          :href="headerProps.main_section.action"
          class="button"
          :title="headerProps.main_section.action_text"
          >{{ headerProps.main_section.action_text }}</a
        >
      </div>
    </div>
    <img
      :src="getImage(headerProps.main_section.file.id)"
      alt=""
      class="image"
    />
  </header>
</template>

<style lang="postcss" scoped>
.header {
  background: linear-gradient(
    132deg,
    rgba(0, 49, 117, 0.9) 0%,
    rgb(254 245 44 / 50%) 100%
  );
  @apply flex
    relative
    items-center
    justify-center
    min-h-[65vh]
    xl:min-h-[88vh]
    overflow-hidden;
  .container {
    @apply flex
      pt-52
      pb-16
      xl:py-60
      mx-auto
      max-w-7xl
      items-center
      min-h-[65vh]
      xl:min-h-[88vh]
      overflow-hidden;
    & .box-info {
      @apply flex
          flex-col
          gap-8
          max-w-4xl;
      & .title {
        @apply font-title
          text-5xl
          xl:text-7xl
          text-white
          font-semibold;
      }

      & .sub-title {
        @apply text-xl
          text-white
          max-w-xl;
      }

      & .button {
        @apply text-white
          font-bold
          px-8
          py-4
          rounded-lg
          bg-blue
          cursor-pointer
          max-w-max
          transition-all;
      }

      & .button:hover {
        @apply bg-dark-blue;
      }
    }
  }
  & .image {
    @apply top-0
      z-[-1]
      left-0
      w-full
      h-full
      absolute
      object-cover;
  }
}
</style>
