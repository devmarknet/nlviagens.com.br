<script>
export default {
  name: 'PromocoesPage',
  layout: 'web',
}
</script>

<template>
  <div>
    <header class="pt-40 pb-16 bg-darkest-blue mb-20">
      <div class="container mx-auto max-w-7xl">
        <span class="w-20 border-t border-yellow block mx-auto"></span>
        <h1 class="text-center text-white my-6 text-4xl font-medium">
          Promoções
        </h1>
        <p class="text-center mx-auto max-w-lg text-white">
          Pacotes promocionais você encontra somente aqui com preços justos e
          sem taxas adicionais
        </p>
      </div>
    </header>
    <main class="container mx-auto max-w-7xl">
      <section>
        <div class="flex items-center gap-11">
          <h3 class="text-2xl font-title font-medium text-gray">
            Pacotes de férias
          </h3>
          <div class="flex items-center gap-6">
            <a class="font-bold text-blue border-b-2 border-blue py-1" href=""
              >Todas</a
            >
            <a class="py-1" href="">Nacional</a>
            <a class="py-1" href="">Internacional</a>
          </div>
        </div>
        <div class="w-full grid grid-cols-4 gap-8 py-6">
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
              :src="require('~/assets/images/pacote-passagens.jpeg')"
              alt=""
            />
          </NuxtLink>
        </div>
      </section>
      <section class="my-20">
        <div class="flex items-center gap-11">
          <h3 class="text-2xl font-title font-medium text-gray">
            Passagens Aéreas
          </h3>
          <div class="flex items-center gap-6">
            <a class="font-bold text-blue border-b-2 border-blue py-1" href=""
              >Todas</a
            >
            <a class="py-1" href="">Nacional</a>
            <a class="py-1" href="">Internacional</a>
          </div>
        </div>
        <div class="w-full grid grid-cols-4 gap-8 py-6">
          <NuxtLink to="/">
            <img
              class="flex-1 rounded-lg overflow-hidden"
              :src="require('~/assets/images/sao-paulo.jpeg')"
              alt=""
            />
          </NuxtLink>
          <NuxtLink to="/">
            <img
              class="flex-1 rounded-lg overflow-hidden"
              :src="require('~/assets/images/rio-de-janeiro.jpeg')"
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
      </section>
      <section>
        <div class="flex items-center gap-11">
          <h3 class="text-2xl font-title font-medium text-gray">
            Outras Promoções
          </h3>
          <div class="flex items-center gap-6">
            <a class="font-bold text-blue border-b-2 border-blue py-1" href=""
              >Todas</a
            >
            <a class="py-1" href="">Nacional</a>
            <a class="py-1" href="">Internacional</a>
          </div>
        </div>
        <div class="w-full grid grid-cols-4 gap-8 py-6">
          <NuxtLink to="/">
            <img
              class="flex-1 rounded-lg overflow-hidden"
              :src="require('~/assets/images/seguro-viagem.jpeg')"
              alt=""
            />
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>
