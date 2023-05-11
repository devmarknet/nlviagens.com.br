<script>
import { gql } from 'nuxt-graphql-request'
import HeaderComponent from '@/components/home/Header.vue'
import ServicesComponent from '@/components/home/Services.vue'
import GaleryComponent from '@/components/home/Galery.vue'
import PromotionsComponent from '@/components/home/Promotions.vue'
import AboutComponent from '@/components/home/About.vue'
import NewsComponent from '@/components/home/News.vue'
import Testimonials from '@/components/home/Testimonials.vue'
import Contact from '@/components/home/Contact.vue'

export default {
  name: 'IndexPage',
  components: {
    HeaderComponent,
    ServicesComponent,
    GaleryComponent,
    PromotionsComponent,
    AboutComponent,
    NewsComponent,
    Testimonials,
    Contact,
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
        news {
          id
          cover {
            id
          }
          title
          slug
          article
        }
        services(filter: { status: { _eq: "published" } }) {
          id
          status
          title
          cover {
            id
          }
          slug
          meta_content
          content
        }
        galery {
          id
          cover {
            id
          }
          slug
          title
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
    <HeaderComponent :header-props="data" />
    <PromotionsComponent />
    <ServicesComponent :items="data.services" />
    <GaleryComponent :items="data.galery" />
    <AboutComponent :about-props="data" />
    <NewsComponent :news="data.news" />
    <Testimonials />
    <Contact />
  </main>
</template>
