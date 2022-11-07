<script>
export default {
  name: 'PromotionsComponent',
}
</script>

<template>
  <div class="container">
    <div class="box-content">
      <span class="span">Promoções</span>
      <h2 class="title max-w-3xl">
        Sua viagem será melhor com as ofertas que selecionamos para você
      </h2>
      <div class="w-full grid grid-cols-4 gap-8 py-10">
        <NuxtLink to="/">
          <img
            class="flex-1 rounded-lg overflow-hidden"
            :src="require('~/assets/images/tour-intercontinental.jpeg')"
            alt=""
          />
        </NuxtLink>
        <NuxtLink to="/">
          <img
            class="flex-1 rounded-lg overflow-hidden"
            :src="require('~/assets/images/ferias-em-familia.jpeg')"
            alt=""
          />
        </NuxtLink>
        <NuxtLink to="/">
          <img
            class="flex-1 rounded-lg overflow-hidden"
            :src="require('~/assets/images/ferias-na-franca.jpeg')"
            alt=""
          />
        </NuxtLink>
        <NuxtLink to="/">
          <img
            class="flex-1 rounded-lg overflow-hidden hover:object-fill"
            :src="require('~/assets/images/passagens-internacionais.jpeg')"
            alt=""
          />
        </NuxtLink>
      </div>
      <a class="button" href="">Veja mais promoções</a>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.container {
  @apply bg-dark-blue
      flex
      px-80
      py-32
      w-full
      items-center
      justify-center
      min-w-full
      overflow-hidden;

  & .box-content {
    @apply text-center
        flex
        flex-col
        gap-4
        justify-center
        items-center;

    & .span {
      @apply text-[#A8CDFF]
          font-semibold;
    }

    & .title {
      @apply font-title
          text-[32px]
          leading-9
          text-white;
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
