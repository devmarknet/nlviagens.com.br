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
  <footer class="bg-darkest-blue text-white text-sm py-24">
    <div
      class="container mx-auto max-w-7xl flex items-stretch justify-between gap-20"
    >
      <img
        :src="require('~/assets/images/footer-logo.png')"
        alt="Footer Logo NL Viagens Nilsara"
      />
      <div class="flex-1 flex flex-col">
        <div class="flex flex-1 justify-between">
          <div>
            <h3 class="mb-4">Fale com um de nossos acessores</h3>
            <ul class="text-white/50 flex flex-col gap-3">
              <li>(44) 9 9983-2345 - Juliana</li>
              <li>(44) 9 9983-2345 - Juliana</li>
              <li>(44) 9 9983-2345 - Juliana</li>
            </ul>
          </div>
          <div>
            <h3 class="mb-4">Siga nossas redes</h3>
            <ul class="text-white/50 flex flex-col gap-3">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Pinterest</li>
            </ul>
          </div>
          <div>
            <h3 class="mb-4">Institucional</h3>
            <ul class="text-white/50 flex flex-col gap-3">
              <li>A empresa</li>
              <li>Notícias</li>
              <li>Galeria</li>
              <li>Contato</li>
            </ul>
          </div>
          <div>
            <h3 class="mb-4">Acesse</h3>
            <ul class="text-white/50 flex flex-col gap-3">
              <li>Promoções</li>
              <li>Serviços</li>
            </ul>
          </div>
        </div>
        <p>Copyright &copy; {{ year }}. NL Viagens Nilsara.</p>
      </div>
    </div>
  </footer>
</template>
