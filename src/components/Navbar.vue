<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
      <li><router-link to="/description">Description</router-link></li>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
  padding: 1.5rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style: none;

    li {
      margin-right: 1.5rem;
    }
  }
}
</style>
