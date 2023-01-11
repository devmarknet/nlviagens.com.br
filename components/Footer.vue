<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

<template>
  <footer class="bg-darkest-blue text-white text-sm py-16 xl:py-24">
    <div
      class="container mx-auto max-w-7xl flex flex-col xl:flex-row items-stretch justify-between gap-10"
    >
      <img
        class="w-40 xl:w-auto"
        :src="require('~/assets/images/footer-logo.png')"
        alt="Footer Logo NL Viagens Nilsara"
      />
      <div class="flex-1 flex flex-col">
        <div class="flex flex-col xl:flex-row flex-1 gap-4 xl:gap-20">
          <div>
            <h3 class="mb-4">Fale com um de nossos acessores</h3>
            <ul class="text-white/50 flex flex-col gap-3">
              <li>
                <a class="text-white hover:underline" href="tel:044936311690"
                  >(44) 9 3631-1690</a
                >
                - Atendimento presencial com hora marcada
              </li>
              <li>
                <a class="text-white hover:underline" href="04498800099"
                  >(44) 99880-0099</a
                >
                - Nilsara
              </li>
              <li>
                <a class="text-white hover:underline" href="44988249073"
                  >(44) 98824-9073</a
                >
                - Ana Paula
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mb-4">Siga nossas redes</h3>
            <ul class="text-white/50 flex flex-col gap-3">
              <li>
                <a
                  href="http://www.facebook.com/nlviagensnilsara"
                  target="_blank"
                  >Facebook</a
                >
              </li>
              <li>
                <a
                  href="https://instagram.com/nlviagenseturismo"
                  target="_blank"
                  >Instagram</a
                >
              </li>
            </ul>
          </div>
        </div>
        <p>
          Copyright &copy; {{ year }}. Nilsara Coelho Viagens e Turismo - NL
          Viagens. CNPJ: 10.979.197/0001-06.
        </p>
        <div class="mt-20 flex items-center">
          <span class="text-xs text-white/50 mr-4 -mt-1">Desenvolvido por:</span
          ><a href="https://marknet.com.br" target="_blank"><MarknetLogo /></a>
        </div>
      </div>
    </div>
  </footer>
</template>
