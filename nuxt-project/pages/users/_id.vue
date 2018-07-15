<template>
  <div>
    <h1>{{ user.name }}</h1>
    <img :src="user.avatar_url">
  </div>
</template>

<script>
  export default {
    async asyncData({ params, app }) {
      const { id } = params
      const user = await app.$axios.$get(
        `https://api.github.com/users/${id}`
      )
      return { user }
    }
  }
</script>
