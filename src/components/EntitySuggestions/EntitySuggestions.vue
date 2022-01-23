<template>
  <SuggestionsList
    v-model="suggestions.value"
    :options="suggestions.options"
    label="Пользователь или компания"
    @search="onSearch"
  >
    <template #tag="{ item }">
      {{ alias(item.alias) }}
    </template>
    <template #dropdown-item="{ item }">
      <component
        :is="dropdownItem(item)"
        v-bind="item"
      />
    </template>
  </SuggestionsList>
</template>

<script>
import SuggestionsList from '@/components/SuggestionsList/SuggestionsList.vue';
import { useSuggestions } from '@/composables/useSuggestions.js';
import UserItem from '@/components/EntitySuggestions/UserItem.vue';
import CompanyItem from '@/components/EntitySuggestions/CompanyItem.vue';
import DropdownItem from '@/components/SuggestionsList/DropdownItem.vue';
import { alias } from '@/components/EntitySuggestions/utils.js';

const url = 'https://habr.com/kek/v2/publication/suggest-mention';

export default {
  name: 'EntitySuggestions',
  components: { DropdownItem, SuggestionsList },
  setup () {
    const { suggestions, search, select } = useSuggestions({
      responseAdapter (body) {
        return body.data;
      }
    });

    const onSearch = (query) =>  {
      const params = new URLSearchParams({ q: query });
      console.log(params.toString());

      search({
        url: `${url}?${params.toString()}`,
        method: 'GET',
      });
    };

    return {
      suggestions,
      onSearch,
      select,
      search,
      alias,
    };
  },

  methods: {
    dropdownItem (item) {
      return item.type === 'user' ? UserItem : CompanyItem;
    }
  }
};
</script>
