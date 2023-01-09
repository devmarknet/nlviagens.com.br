<script>
import { gql } from 'nuxt-graphql-request'
export default {
  name: 'GaleriaPage',
  layout: 'web',
  async asyncData({ $graphql, params }) {
    const query = gql`
      query {
        galeries: galery {
          id
          cover {
            id
          }
          slug
          title
          images: galery {
            image: directus_files_id {
              id
              width
              height
            }
          }
        }
      }
    `
    const assets = $graphql.assets.url
    const { galeries } = await $graphql.admin
      .request(query)
      .then((data) => data)

    return { galeries, assets }
  },
}
</script>

<template>
  <div>
    <header class="pt-40 pb-16 bg-darkest-blue mb-10 xl:mb-20">
      <div class="container mx-auto max-w-7xl">
        <span class="w-20 border-t border-yellow block mx-auto"></span>
        <h1 class="text-center text-white my-6 text-4xl font-medium">
          Galeria de Fotos
        </h1>
        <p class="text-center mx-auto max-w-lg text-white">
          Aqui tem os momentos mais incríveis que registramos e queremos
          compartilhar com você!
        </p>
      </div>
    </header>
    <main
      class="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8 mb-10 xl:mb-20 items-stretch"
    >
      <div
        v-for="service in galeries"
        :key="service.id"
        class="border flex-1 rounded-xl border-zinc-200 w-auto overflow-hidden group"
      >
        <div class="relative h-full w-full">
          <img
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            :src="`${assets}/${service.cover.id}`"
            :alt="`Image from ${service.title}`"
          />
          <div
            class="absolute flex w-full gap-2 items-end justify-between bottom-0 p-5 h-full bg-black/30"
          >
            <h2 class="text-xl xl:text-3xl font-bold xl:w-64 text-white flex-1">
              {{ service.title }}
            </h2>
            <NuxtLink
              class="bg-yellow text-darkest-blue font-bold xl:px-8 px-3 py-2 xl:py-4 block w-max rounded-lg text-center"
              :to="`/galeria/${service.slug}`"
              >Ver galeria</NuxtLink
            >
          </div>
        </div>
        <!-- <div class="list-disc list-inside p-5">{{ service.content }}</div> -->
      </div>
    </main>
  </div>
</template>
