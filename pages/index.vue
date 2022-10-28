<script>
import { gql } from 'nuxt-graphql-request'

export default {
  name: 'IndexPage',
  async asyncData({ $graphql }) {
     const query = gql`
        query {
          main_section {
            title
            sub_title
            action_text
            action
            file
            status
          }
        }
      `
    const data = await $graphql.admin.request(query)
    return {
      data
    }
  }

}
</script>

<template>
  <div>
    <Header :headerProps="data"/>
  </div>
</template>
