<script>
export default {
  name: 'ServicesComponent'
}
</script>

<template>
  <div class="container">
    <div class="box-info">
      <span class="span">Nossos Serviços</span>
      <h2 class="title">Qualidade e satisfação são prioridades em nossos serviços</h2>
      <p class="text">Nossos serviços atendem desde assessorias a seguros de viagem, isso nos dá um diferencial na ampla demanda de nossos clientes.</p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .container {
    @apply
      flex
      px-80
      py-32
      w-full
      items-center
      justify-center
      min-w-full
      overflow-hidden
    ;

    & .box-info {
      @apply
        flex
        flex-col
        justify-center
        items-center
        gap-4
        text-gray
        max-w-3xl
        text-center
      ;

      & .span {
        @apply
          font-semibold
        ;
      }

      & .title {
        @apply
          font-title
          text-[32px]
          leading-9
          font-semibold
        ;
      }

      & .text {
        @apply
          max-w-xl
        ;
      }
    }
  }
</style>
