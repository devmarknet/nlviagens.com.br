<script>
import { gql } from 'nuxt-graphql-request'

export default {
  name: 'NewsSlugPage',
  layout: 'web',
  async asyncData({ $graphql, params }) {
    const query = gql`
      query {
        news(filter: { slug: { _eq: \"${params.slug}\" } }) {
          id
          cover {
            id
          }
          slug
          title
          article
        }
      }
    `
    const [news] = await $graphql.admin.request(query).then(({ news }) => news)
    return { news }
  },
}
</script>

<template>
  <div>
    <header class="pt-40 pb-6 bg-darkest-blue mb-10"></header>
    <article class="max-w-2xl mx-auto px-4">
      <h2
        class="text-3xl xl:text-4xl font-semibold text-gray text-center mx-auto"
      >
        {{ news.title }}
      </h2>
      <img
        :src="`https://admin.nlviagens.com.br/assets/${news.cover.id}`"
        :alt="news.title"
        class="mt-5 xl:mt-10"
      />
      <span></span>
      <p v-html-safe="news.article" class="my-6" />
    </article>
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
