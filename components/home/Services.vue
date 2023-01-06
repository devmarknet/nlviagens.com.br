<script>
export default {
  name: 'ServicesComponent',
  props: {
    items: Array,
  },
}
</script>

<template>
  <section class="flex flex-col items-center gap-10 container">
    <div class="box-info">
      <span class="span">Nossos Serviços</span>
      <h2 class="title">
        Qualidade e satisfação são prioridades em nossos serviços
      </h2>
      <p class="text">
        Nossos serviços atendem desde assessorias a seguros de viagem, isso nos
        dá um diferencial na ampla demanda de nossos clientes.
      </p>
    </div>
    <ul
      class="grid grid-cols-1 xl:grid-cols-4 items-stretch gap-4 xl:gap-9"
      v-if="items.length"
    >
      <li v-for="i in items" :key="i.title" class="flex-1 flex-shrink">
        <!-- <NuxtLink :to="i.slug"> -->
        <NuxtLink to="/servicos">
          <div class="w-full relative rounded-t-lg overflow-hidden">
            <img
              :src="`https://admin.nlviagens.com.br/assets/${i.cover.id}`"
              alt="Illustration Passagens Rodoviárias"
            />
            <div
              v-html="i.content"
              class="absolute top-0 flex flex-col justify-end h-full w-full bg-black/30 text-white p-4"
            />
          </div>
          <span
            class="flex bg-zinc-100 w-full text-sm font-title uppercase font-bold p-4 rounded-b-lg"
            >{{ i.title }}</span
          >
        </NuxtLink>
      </li>
    </ul>
    <NuxtLink
      class="text-white font-bold px-8 py-4 rounded-lg bg-blue cursor-pointer max-w-max transition-all"
      to="/servicos"
      >Veja mais detalhes</NuxtLink
    >
  </section>
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
