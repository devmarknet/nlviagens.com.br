<script>
import LogoComponent from '@/components/Logo.vue'
import LogoDarkComponent from '@/components/LogoDark.vue'
export default {
  name: 'NavBarComponent',
  components: {
    LogoComponent,
    LogoDarkComponent,
  },
  data() {
    return {
      scrolled: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 36) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    })
  },
}
</script>

<template>
  <nav
    :class="`z-50 w-full top-0 transition-all duration-200 flex items-center ${
      scrolled
        ? 'bg-white fixed shadow-lg shadow-black/5 h-20 pt-0'
        : 'absolute bg-transparent h-32 pt-9'
    }`"
  >
    <div class="mx-auto container max-w-7xl flex items-center justify-between">
      <ul class="flex w-40">
        <li>
          <NuxtLink to="/">
            <LogoDarkComponent v-if="scrolled" />
            <LogoComponent v-else />
          </NuxtLink>
        </li>
      </ul>
      <ul
        :class="`hidden xl:flex gap-10 w-full flex-1 justify-center items-center  ${
          scrolled
            ? 'text-dark-blue border-dark-blue'
            : 'text-white border-white'
        }`"
      >
        <li class="item">
          <NuxtLink class="link" to="/">Home</NuxtLink>
        </li>

        <li class="item">
          <NuxtLink class="link" to="/promocoes">Promoções</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink class="link" to="/servicos">Serviços</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink class="link" to="/galeria">Galeria de Fotos</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink class="link" to="/a-empresa">A Empresa</NuxtLink>
        </li>
        <!--
        <li class="item">
          <NuxtLink class="link" to="/galeria">Galeria</NuxtLink>
        </li> -->
      </ul>
      <ul class="flex w-40 justify-end">
        <li class="flex">
          <a
            class="py-4 text-center px-6 bg-blue rounded-lg w-full text-white font-bold"
            href=""
            >Contate-nos</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
.item {
  & .link {
    @apply opacity-50;
  }

  & .nuxt-link-exact-active {
    @apply opacity-100;
  }
}
</style>
