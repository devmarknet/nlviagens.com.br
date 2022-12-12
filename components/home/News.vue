<script>
export default {
  name: 'NewsComponent',
}
</script>

<template>
  <div>
    <div class="container mx-auto max-w-7xl">
      <div class="box-content">
        <span class="span">Notícias</span>
        <h2 class="title max-w-3xl">
          As últimas notícias nacionais e internacionais no mundo do turismo
        </h2>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.container {
  @apply bg-neutral-200
      flex
      py-32
      min-w-full
      mx-auto
      items-center
      justify-center
      overflow-hidden;

  & .box-content {
    @apply text-center
        flex
        flex-col
        gap-4
        max-w-7xl
        justify-center
        items-center;

    & .span {
      @apply text-dark-blue
          font-semibold;
    }

    & .title {
      @apply font-title
          text-[32px]
          leading-9
          text-dark-blue;
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
      @apply bg-white
          text-dark-blue;
    }

    & .image {
      @apply my-10
          rounded-2xl
          max-w-[296px]
          max-h-[364px];
    }
  }
}
</style>
