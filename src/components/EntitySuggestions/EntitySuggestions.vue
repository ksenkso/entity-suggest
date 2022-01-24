<template>
  <SuggestionsList
    v-model="suggestions.value"
    :options="suggestions.options"
    :loading="suggestions.loading"
    :error="suggestions.error"
    option-key="id"
    :multiple="multiple"
    :max-selected="maxSelected"
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
import { watch } from 'vue';

const url = process.env.VUE_APP_SUGGESTIONS_URL;

export default {
  name: 'EntitySuggestions',
  components: { DropdownItem, SuggestionsList },
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
    },
    maxSelected: {
      type: Number,
      default: NaN,
    },
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const { suggestions, search } = useSuggestions({
      initialValue: props.modelValue,
      responseAdapter (body) {
        return body.data.map((entity) => {
          entity.id = `${entity.type}-${entity.alias}`;

          return entity;
        });
      }
    });

    watch(() => suggestions.value, (newValue) => {
      emit('update:modelValue', newValue);
    });

    watch(() => props.modelValue, (newValue) => {
      suggestions.value = newValue;
    });

    const onSearch = (query) =>  {
      const params = new URLSearchParams({ q: query });

      search({
        url: `${url}?${params}`,
        method: 'GET',
      });
    };

    return {
      suggestions,
      onSearch,
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
