<script>
import { gql } from 'nuxt-graphql-request'

export default {
  name: 'ServicesPage',
  layout: 'web',
  async asyncData({ $graphql, params }) {
    const query = gql`
      query {
        news(filter: { status: { _eq: "published" } }) {
          id
          status
          title
          cover {
            id
          }
          slug
          article
        }
      }
    `
    const assets = $graphql.assets.url
    const { news } = await $graphql.admin.request(query).then((data) => data)

    return { news, assets }
  },
}
</script>

<template>
  <div>
    <header class="pt-40 pb-16 bg-darkest-blue mb-10 xl:mb-20">
      <div class="container mx-auto max-w-7xl">
        <span class="w-20 border-t border-yellow block mx-auto"></span>
        <h1 class="text-center text-white my-6 text-4xl font-medium">
          Notícias
        </h1>
        <p class="text-center mx-auto max-w-lg text-white">
          Acompanhe as últimas notícias nacionais e internacionais do mundo de
          viagens e turismo
        </p>
      </div>
    </header>
    <main class="container mx-auto max-w-7xl mb-10 xl:mb-20">
      <div class="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8">
        <nuxt-link
          v-for="nw in news"
          :key="nw.id"
          :to="`/noticias/${nw.slug}`"
          class=""
        >
          <img
            class="w-auto rounded-lg"
            :src="`${assets}/${nw.cover.id}`"
            :alt="`Image from ${nw.title}`"
          />
          <h3 class="font-bold text-gray mt-2">
            {{ nw.title }}
          </h3>
        </nuxt-link>
      </div>
    </main>
  </div>
</template>

<style lang="postcss">
.content {
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
