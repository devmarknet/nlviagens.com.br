<script>
import { gql } from 'nuxt-graphql-request'

export default {
  name: 'ServicesPage',
  layout: 'web',
  async asyncData({ $graphql, params }) {
    const query = gql`
      query {
        services(filter: { status: { _eq: "published" } }) {
          id
          status
          title
          cover {
            id
          }
          slug
          meta_content
          content
        }
      }
    `
    const assets = $graphql.assets.url
    const { services } = await $graphql.admin
      .request(query)
      .then((data) => data)

    return { services, assets }
  },
}
</script>

<template>
  <div>
    <header class="pt-40 pb-16 bg-darkest-blue mb-20">
      <div class="container mx-auto max-w-7xl">
        <span class="w-20 border-t border-yellow block mx-auto"></span>
        <h1 class="text-center text-white my-6 text-4xl font-medium">
          Serviços
        </h1>
        <p class="text-center mx-auto max-w-lg text-white">
          Nossos serviços atendem desde assessorias a seguros de viagens, isso
          nos dá um diferencial na ampla demanda de nossos clientes.
        </p>
      </div>
    </header>
    <main class="container mx-auto max-w-7xl grid xl:grid-cols-2 gap-8 mb-20">
      <div
        v-for="service in services"
        :key="service.id"
        class="border rounded-xl border-zinc-200 w-max overflow-hidden"
      >
        <div class="relative">
          <img
            :src="`${assets}/${service.cover.id}`"
            :alt="`Image from ${service.title}`"
          />
          <div
            class="absolute flex w-full gap-2 items-end justify-between bottom-0 p-5 h-full bg-black/30"
          >
            <h2 class="text-3xl font-bold w-64 text-white">
              {{ service.title }}
            </h2>
            <a
              class="bg-yellow text-darkest-blue font-bold px-8 py-4 block w-max rounded-lg"
              href=""
              >Contrate</a
            >
          </div>
        </div>
        <div
          v-html-safe="service.content"
          class="p-5 content flex max-w-[624px]"
        />
        <!-- <div class="list-disc list-inside p-5">{{ service.content }}</div> -->
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
