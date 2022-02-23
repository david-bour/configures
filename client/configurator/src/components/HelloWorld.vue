<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<script lang="ts">
import { defineComponent } from "vue"
import ConfigureDataServices from "@/services/ConfigureServices"

export default defineComponent({
  name: "config-component",
  data() {
    return {
      configs: ""
    }
  },
  methods: {
    getConfigs() {
      ConfigureDataServices.get().then(response => this.configs = response.data).catch(e => console.log(e))
    }
  },
  mounted() {
    this.getConfigs();
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Yo this be a prop {{ configs }}
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
