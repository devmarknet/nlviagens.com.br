<script>
export default {
  name: 'AboutPage',
  layout: 'web',
}
</script>

<template>
  <div>
    <header class="pt-40 pb-16 bg-darkest-blue mb-20">
      <div class="container mx-auto max-w-7xl">
        <span class="w-20 border-t border-yellow block mx-auto"></span>
        <h1 class="text-center text-white my-6 text-4xl font-medium">
          A NL Viagens
        </h1>
        <p class="text-center mx-auto max-w-lg text-white">
          Conheça um pouco de nossa história
        </p>
      </div>
    </header>
    <main
      class="container mx-auto max-w-2xl mb-20 text-center flex flex-col items-center gap-8 text-gray"
    >
      <p>
        Somos uma empresa com mais de 30 anos no mercado de viagens e turismo,
        somos especialistas quando se trata de viagens nacionais e
        internacionais. Temos uma equipe altamente capacitada que faz destaca o
        sucesso de nosso atendimento. Assessores prontos para elaborar seu plano
        de viagem de modo que atenda suas nececissades e torna sua experiência
        única.
      </p>
      <p>
        Nossa empresa é conhecida pela qualidade, agilidade e satisfação em
        nossos serviços.
      </p>
      <img
        :src="require('~/assets/images/sobre-nilsara.jpg')"
        alt="Avião em pleno vôo"
      />
    </main>
  </div>
</template>
