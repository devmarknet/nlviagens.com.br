<script>
import { gql } from 'nuxt-graphql-request'
import HeaderComponent from '@/components/home/Header.vue'
import ServicesComponent from '@/components/home/Services.vue'
import PromotionsComponent from '@/components/home/Promotions.vue'
import AboutComponent from '@/components/home/About.vue'

export default {
  name: 'IndexPage',
  components: {
    HeaderComponent,
    ServicesComponent,
    PromotionsComponent,
    AboutComponent,
  },
  layout: 'web',
  async asyncData({ $graphql }) {
    const query = gql`
      query {
        main_section {
          title
          sub_title
          action_text
          action
          file {
            id
          }
          status
        }
        about {
          title
          text
          image {
            id
          }
        }
      }
    `
    const data = await $graphql.admin.request(query)
    return {
      data,
    }
  },
}
</script>

<template>
  <main>
    <HeaderComponent :headerProps="data" />
    <ServicesComponent />
    <PromotionsComponent />
    <AboutComponent :aboutProps="data" />
  </main>
</template>
