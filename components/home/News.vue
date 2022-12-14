<script>
import Swiper from 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'NewsComponent',
  props: {
    news: {
      type: Array,
    },
  },
  mounted() {
    new Swiper(this.$refs.swiper, {
      // loop: true,
      // autoplay: true,
      slidesPerView: 2,
      spaceBetween: 16,
      breakpoints: {
        1280: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      },
    })
  },
}
</script>

<template>
  <div>
    <div class="container mx-auto w-full xl:max-w-7xl flex-col">
      <div class="box-content w-full relative">
        <span class="span">Notícias</span>
        <h2 class="title max-w-3xl">
          As últimas notícias nacionais e internacionais no mundo do turismo
        </h2>
        <div ref="swiper" class="swiper w-full max-w-7xl">
          <div class="swiper-wrapper">
            <div v-for="nw in news" :key="nw.id" class="swiper-slide w-max">
              <NuxtLink :to="`noticias/${nw.slug}`" class="w-full">
                <img
                  class="flex-1 rounded-lg overflow-hidden w-auto"
                  :src="`https://admin.nlviagens.com.br/assets/${nw.cover.id}`"
                  alt=""
                />
                <h3 class="text-left font-medium mt-2">{{ nw.title }}</h3>
              </NuxtLink>
            </div>
          </div>
        </div>
        <NuxtLink class="button" to="/noticias">Veja mais notícias</NuxtLink>
      </div>
      <div class="box-content mt-32">
        <span class="span">Newsletter</span>
        <h2 class="title max-w-3xl">
          Receba as novidades em primeira mão assinando nossa newsletter
        </h2>
        <div class="w-full flex flex-col gap-8 mt-8">
          <form
            class="flex flex-col w-full xl:flex-row gap-3 items-center"
            action=""
          >
            <input
              class="py-3 px-6 rounded-lg outline-none w-full"
              type="text"
              placeholder="Seu nome completo"
            />
            <input
              class="py-3 px-6 rounded-lg outline-none w-full"
              type="text"
              placeholder="Seu melhor e-mail"
            />
            <button
              class="bg-blue text-white py-3 px-6 rounded-lg outline-none w-full"
            >
              Quero receber novidades
            </button>
          </form>
          <p class="text-sm text-gray">
            * Ao inserir seus dados você aceita receber comunicações.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.container {
  @apply bg-neutral-100
      flex
      py-16
      xl:py-32
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
