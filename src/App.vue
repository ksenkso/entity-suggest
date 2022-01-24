<template>
  <div>
    <EntitySuggestions
      v-model="entities"
      multiple
      required
      :max-selected="3"
    />
  </div>
</template>

<script>
import EntitySuggestions from "@/components/EntitySuggestions/EntitySuggestions.vue";

export default {
  name: 'App',
  components: {
    EntitySuggestions,
  },
  data() {
    return {
      entities: [],
    };
  }
};
</script>
<style>
pre {
  max-width: 100%;
  overflow: auto;
  padding: 4px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #f0f0f0;
}
</style>
