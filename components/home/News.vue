<script>
export default {
  name: 'NewsComponent',
}
</script>

<template>
  <div>
    <div class="container mx-auto max-w-7xl flex-col">
      <div class="box-content">
        <span class="span">Notícias</span>
        <h2 class="title max-w-3xl">
          As últimas notícias nacionais e internacionais no mundo do turismo
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
        <NuxtLink class="button" to="/promocoes">Veja mais notícias</NuxtLink>
      </div>
      <div class="box-content mt-32">
        <span class="span">Newsletter</span>
        <h2 class="title max-w-3xl">
          Receba as novidades em primeira mão assinando nossa newsletter
        </h2>
        <div class="w-full flex flex-col gap-8 mt-8">
          <form class="flex gap-3 items-center" action="">
            <input
              class="py-3 px-6 rounded-lg outline-none"
              type="text"
              placeholder="Seu nome completo"
            />
            <input
              class="py-3 px-6 rounded-lg outline-none"
              type="text"
              placeholder="Seu melhor e-mail"
            />
            <button
              class="bg-blue text-white py-3 px-6 rounded-lg outline-none"
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
