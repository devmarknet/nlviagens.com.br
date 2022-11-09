<script>
import { gql } from 'nuxt-graphql-request'

export default {
  name: 'PromocoesSlugPage',
  layout: 'web',
  async asyncData({ $graphql, params }) {
    const query = gql`
      query {
        promotions(filter: { slug: { _eq: \"${params.slug}\" } }) {
          id
          image {
            id
          }
          title
          slug
          article
          meta_description
          tag
        }
      }
    `
    const [promo] = await $graphql.admin
      .request(query)
      .then(({ promotions }) => promotions)
    return { promo }
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
    <main class="container mx-auto max-w-7xl flex gap-20 mb-20">
      <aside class="flex flex-col gap-8">
        <img
          width="448"
          class="rounded-lg overflow-hidden"
          :src="`https://admin.nlviagens.com.br/assets/${promo.image.id}`"
          alt=""
        />
        <div class="p-7 rounded-lg bg-light-gray/10">
          <span class="block mb-3">Resumo:</span>
          <ul class="flex flex-col gap-3">
            <li class="flex justify-between">
              <span class="text-blue">Destino:</span>
              <b>Natal - RN</b>
            </li>
            <li class="flex justify-between">
              <span class="text-blue">Destino:</span>
              <b>Natal - RN</b>
            </li>
            <li class="flex justify-between">
              <span class="text-blue">Destino:</span>
              <b>Natal - RN</b>
            </li>
          </ul>
        </div>
      </aside>
      <article>
        <h2 class="text-2xl font-semibold text-gray">{{ promo.title }}</h2>
        <p v-html-safe="promo.meta_description" class="my-6" />
        <h3 class="text-xl font-semibold text-gray">Este pacote inclui:</h3>
        <p v-html-safe="promo.article" class="article" />
      </article>
    </main>
  </div>
</template>

<style lang="postcss">
.article {
  & h1,
  h2,
  h3 {
    @apply text-lg font-semibold text-blue my-6;
  }
  & ul {
    @apply list-disc list-inside;
  }
}
</style>
