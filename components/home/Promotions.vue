<script>
export default {
  name: 'PromotionsComponent'
}
</script>

<template>
  <div class="container">
    <div class="box-content">
      <span class="span">Promoções</span>
      <h2 class="title">Sua viagem será melhor com as ofertas que selecionamos para você</h2>
      <img class="image" src="@/assets/promocoes.png" alt="Promoções">
      <a class="button" href="">Veja mais promoções</a>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .container {
    @apply
      bg-dark-blue
      flex
      px-80
      py-32
      w-full
      items-center
      justify-center
      min-w-full
      overflow-hidden
    ;

    & .box-content {
      @apply
        text-center
        max-w-3xl
        flex
        flex-col
        gap-4
        justify-center
        items-center
      ;

      & .span {
        @apply
          text-[#A8CDFF]
          font-semibold
        ;
      }

      & .title {
        @apply
          font-title
          text-[32px]
          leading-9
          text-white
        ;
      }

      & .button {
        @apply
          text-white
          font-bold
          px-8
          py-4
          rounded-lg
          bg-blue
          cursor-pointer
          max-w-max
          transition-all
        ;
      }

      & .button:hover{
        @apply
          bg-white
          text-dark-blue
        ;
      }

      & .image {
        @apply
          my-10
          rounded-2xl
          max-w-[296px]
          max-h-[364px]
        ;
      }
    }
  }
</style>
