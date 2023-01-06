<script>
import { gql } from 'nuxt-graphql-request'

export default {
  name: 'PromocoesSlugPage',

  async asyncData({ $graphql, params }) {
    const query = gql`
      query {
        galery(filter: { slug: { _eq: \"${params.slug}\" } }) {
          id
		cover {
			id
		}
		slug
		title
		images:galery {
			image:directus_files_id {
				id
				width
				height
			}
		}
        }
      }
    `
    const galery = await $graphql.admin
      .request(query)
      .then(({ galery }) => galery[0])

    return { galery }
  },
}
</script>

<template>
  <div>
    <header class="py-4 px-10 bg-darkest-blue">
      <div class="flex gap-4 items-center">
        <NuxtLink
          to="./"
          class="text-white border border-wite/50 py-2 px-6 rounded-lg hover:bg-white hover:text-darkest-blue cursor-pointer"
          >Voltar</NuxtLink
        >
        <h1 class="text-center text-white text-xl font-medium">
          {{ galery.title }}
        </h1>
      </div>
    </header>
    <div class="p-4 flex flex-wrap gap-4">
      <img
        class="rounded-lg object-cover h-full flex-grow"
        v-for="image in galery.images"
        :key="image.image.id"
        :src="`https://admin.nlviagens.com.br/assets/${image.image.id}`"
      />
    </div>

    <!-- <main
      class="container mx-auto max-w-7xl flex flex-col xl:flex-row gap-10 xl:gap-20 mb-10 xl:mb-20"
    >
      <aside class="flex flex-col gap-4 xl:gap-8">
        <img
          width="448"
          class="rounded-lg overflow-hidden xl:min-w-[448px]"
          :src="`https://admin.nlviagens.com.br/assets/${promo.image.id}`"
          alt=""
        />
        <div v-if="promo.resume" class="p-7 rounded-lg bg-light-gray/10">
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
        <h3 v-if="promo.article" class="text-xl font-semibold text-gray">
          Este pacote inclui:
        </h3>
        <p v-html-safe="promo.article" class="article" />
        <a
          class="mt-10 block w-auto xl:w-max text-white font-bold px-4 xl:px-8 py-2 xl:py-4 rounded-lg bg-blue hover:bg-dark-blue cursor-pointer max-w-max transition-all text-center"
          href=""
          >Contate-nos para mais detalhes</a
        >
      </article>
    </main> -->
    <!-- <section class="container mx-auto max-w-7xl mt-6 mb-12">
      <h3 class="text-xl text-gray font-semibold">
        Outros pacotes promocionais
      </h3>
      <div class="w-full grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 py-6">
        <NuxtLink
          v-for="promotion in otherPromotions"
          :key="promotion.id"
          :to="`/promocoes/${promotion.slug}`"
        >
          <img
            class="flex-1 rounded-lg overflow-hidden"
            :src="`https://admin.nlviagens.com.br/assets/${promotion.image.id}?width=296&quality=80`"
            :alt="promotion.title"
          />
        </NuxtLink>
      </div>
    </section> -->
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
