<script>
import { gql } from 'nuxt-graphql-request'

export default {
  name: 'PromocoesPage',
  layout: 'web',
  async asyncData({ $graphql }) {
    const query = gql`
      query {
        packages {
          id
          title
          promotional_packages {
            promotions_id {
              id
              image {
                id
              }
              title
              slug
            }
          }
        }
      }
    `
    const promotionalPackages = await $graphql.admin
      .request(query)
      .then(({ packages }) => packages)
    return { promotionalPackages }
  },
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
    <main class="container mx-auto max-w-7xl flex flex-col gap-20 mb-20">
      <section v-for="pkg in promotionalPackages" :key="pkg.id">
        <div
          v-if="pkg.promotional_packages.length"
          class="flex items-center gap-11"
        >
          <h3 class="text-2xl font-title font-medium text-gray">
            {{ pkg.title }}
          </h3>
          <div class="flex items-center gap-6">
            <a class="font-bold text-blue border-b-2 border-blue py-1" href=""
              >Todas</a
            >
            <a class="py-1" href="">Nacional</a>
            <a class="py-1" href="">Internacional</a>
          </div>
        </div>
        <div
          v-if="pkg.promotional_packages.length"
          class="w-full grid grid-cols-4 gap-8 py-6"
        >
          <NuxtLink
            v-for="promo in pkg.promotional_packages"
            :key="promo.promotions_id.id"
            :to="`promocoes/${promo.promotions_id.slug}`"
          >
            <img
              class="flex-1 rounded-lg overflow-hidden"
              :src="`https://admin.nlviagens.com.br/assets/${promo.promotions_id.image.id}`"
              :alt="promo.promotions_id.title"
            />
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>
