<script>
export default {
  name: 'GaleryComponent',
  props: {
    items: Array,
  },
}
</script>

<template>
  <div class="bg-neutral-100">
    <section class="flex flex-col items-center gap-10 container">
      <div class="box-info">
        <h2 class="title">Galeria de Fotos</h2>
        <p class="text">
          Aqui tem os momentos mais incríveis que registramos e queremos
          compartilhar com você!
        </p>
      </div>
      <ul
        class="flex grid-cols-1 xl:grid-cols-4 gap-4 xl:gap-9 items-stretch"
        v-if="items.length"
      >
        <li v-for="i in items" :key="i.title" class="flex-1">
          <NuxtLink :to="`galeria/${i.slug}`" class="w-full h-full group">
            <div class="w-full h-full relative rounded-lg overflow-hidden">
              <img
                class="w-full h-full group-hover:scale-105 transition-transform duration-300"
                :src="`https://admin.nlviagens.com.br/assets/${i.cover.id}`"
                alt="Illustration Passagens Rodoviárias"
              />
              <div
                class="flex justify-between absolute top-0 w-full items-end h-full bg-black/30 p-4"
              >
                <span
                  class="text-white font-bold text-xl group-hover:scale-105 transition-transform duration-300"
                  >{{ i.title }}</span
                >
                <span
                  class="bg-yellow text-darkest-blue font-bold xl:px-8 px-3 py-2 xl:py-4 block w-max rounded-lg"
                  >Ver galeria</span
                >
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="postcss" scoped>
.container {
  @apply flex
      mx-auto
      max-w-7xl
      py-16
      xl:py-32
      items-center
      justify-center
      overflow-hidden;

  & .box-info {
    @apply flex
        flex-col
        justify-center
        items-center
        gap-4
        text-gray
        max-w-3xl
        text-center;

    & .span {
      @apply font-semibold;
    }

    & .title {
      @apply font-title
          text-[32px]
          leading-9
          font-semibold;
    }

    & .text {
      @apply max-w-xl;
    }
  }
}
</style>
