<script>
export default {
  name: 'ServicesComponent',
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
    <ul class="grid grid-cols-4 gap-9">
      <li class="flex-1" v-for="i in 4" :key="i">
        <a href="#card">
          <div class="w-[296px]">
            <img src="" alt="" />
            <ul>
              <li>Expresso Maringá</li>
              <li>Viação Garcial</li>
              <li>Brasil Sul</li>
            </ul>
          </div>
          <span>Passagens Rodoviárias</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="postcss" scoped>
.container {
  @apply flex
      px-80
      py-32
      w-full
      items-center
      justify-center
      min-w-full
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
