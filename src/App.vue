<template>
  <div>
    <EntitySuggestions
      v-model="entities"
      required
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
