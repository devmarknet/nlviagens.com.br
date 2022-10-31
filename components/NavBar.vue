<script>
import LogoComponent from '@/components/Logo.vue'
import LogoDarkComponent from '@/components/LogoDark.vue'
export default {
  name: 'NavBarComponent',
  components: {
    LogoComponent,
    LogoDarkComponent
  },
  mounted () {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 30) {
        this.scrollNav = true
      } else {
        this.scrollNav = false
      }
    })
  },
  data () {
    return {
      scrollNav : ''
    }
  }
}
</script>

<template>
  <nav id="nav" :class="`nav ${scrollNav ? 'bg-white' : 'bg-transparent'}`">
    <div class="container">
      <NuxtLink to="/">
        <LogoDarkComponent v-if="scrollNav" />
        <LogoComponent v-else/>
      </NuxtLink>
      <ul :class="`menu ${scrollNav ? 'text-dark-blue border-dark-blue' : 'text-white border-white'}`">
        <li class="item">
          <NuxtLink class="link" to="/">Home</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink class="link" to="/a-empresa">A Empresa</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink class="link" to="/promocoes">Promoções</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink class="link" to="/servicos">Serviços</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink class="link" to="/galeria">Galeria</NuxtLink>
        </li>
      </ul>
      <a class="button" href="">Contate-nos</a>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
.nav {
  @apply
    z-[55]
    top-0
    fixed
    w-full
    max-xl:h-0
    py-5
    ;
    & .container {
      @apply
        flex
        items-center
        justify-around
        mx-auto
        bg-transparent
      ;

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
          bg-dark-blue
        ;
      }
    }
  & .menu {
    @apply
      py-9
      flex
      w-max
      gap-5
      flex-col
      xl:gap-14
      xl:flex-row
    ;
    & .link {
      @apply
        opacity-50
        duration-100
        transition-opacity
      ;
      &:hover {
        @apply
          opacity-100
        ;
      }
      &.nuxt-link-exact-active {
        @apply
          font-black
          opacity-100
          tracking-wide
          border-b-2
        ;
      }
    }
  }
}
</style>
