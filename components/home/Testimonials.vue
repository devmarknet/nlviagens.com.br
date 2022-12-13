<script>
export default {
  name: 'TestimonialsComponent',
  data() {
    return {
      items: [
        {
          text: 'Foi a melhor viagem da minha vida!! Já deu até saudade :(',
          image: 'passagens-rodoviarias.jpeg',
          name: 'Anjelica Matos',
        },
        {
          text: 'Minhas férias não teria sido melhor senão fosse essa equipe altamente qualificada!!',
          image: 'fretamento.jpeg',
          name: 'Rubens Freitas',
        },
        {
          text: 'O atendimento desta equipe é o melhor do ramo!',
          image: 'acessoria.jpeg',
          name: 'Sabrina Moreno',
        },
        {
          text: 'Foi a melhor viagem da minha vida!! Não vejo a hora de voltar para a estrada!',
          image: 'corporativo.jpeg',
          name: 'George Lima',
        },
      ],
    }
  },
  created() {},
}
</script>

<template>
  <section class="flex flex-col gap-10 container">
    <div class="box-info">
      <span class="span">Depoimentos</span>
      <h2 class="title">
        Veja o que nossos clientes pensam de nossos serviços
      </h2>
    </div>
    <ul class="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-9">
      <li
        v-for="i in items"
        :key="i.title"
        class="flex-1 bg-neutral-100 p-4 rounded-lg flex flex-col justify-between gap-4"
      >
        <p class="flex-1">
          {{ i.text }}
        </p>
        <div class="flex gap-4 items-center">
          <img
            src=""
            class="w-10 h-10 border-2 border-blue rounded-full bg-neutral-200"
            alt=""
          />
          <span class="font-bold">{{ i.name }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="postcss" scoped>
.container {
  @apply flex
      mx-auto
      max-w-7xl
      py-16
      xl:py-32
      overflow-hidden;

  & .box-info {
    @apply flex
        flex-col
        gap-4
        text-gray
        max-w-3xl;

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
