<template>
  <div
    v-click-outside="hideDropdown"
    class="suggest"
  >
    <div class="label">
      <slot name="label">
        <span
          v-if="required"
          class="asterisk"
        >
          *
        </span>
        <label :for="id">
          {{ label }}
        </label>
      </slot>
    </div>
    <div :class="inputContainerClass">
      <Tag
        v-for="(item, index) in modelValue"
        :key="index"
        @remove="remove(index)"
      >
        <slot
          name="tag"
          :item="item"
          :index="index"
        />
      </Tag>
      <input
        :id="id"
        v-model="query"
        type="text"
        class="input"
        :disabled="maxReached"
        v-bind="$attrs"
        @focus="hasFocus = true"
        @blur="hasFocus = false"
      >
    </div>
    <div
      v-show="showDropdown && !maxReached"
      class="dropdown__container"
    >
      <div class="dropdown">
        <DropdownItem
          v-for="(item, index) in options"
          :key="getOptionKey(item, index)"
          @select="select(item)"
        >
          <slot
            name="dropdown-item"
            :item="item"
            :index="index"
          />
        </DropdownItem>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/SuggestionsList/Tag.vue';
import DropdownItem from '@/components/SuggestionsList/DropdownItem.vue';

export default {
  name: 'SuggestionsList',

  components: { DropdownItem, Tag },

  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    required: {
      type: Boolean,
    },
    id: {
      type: String,
      default: 'suggest',
    },
    label: {
      type: String,
      default: '',
    },
    minCharacters: {
      type: Number,
      default: 3,
    },
    dropdownDisplayCount: {
      type: Number,
      default: 4,
    },
    options: {
      type: Array,
      required: true,
    },
    optionKey: {
      type: String,
      required: true,
    },
    multiple: {
      type: Boolean,
    },
    maxSelected: {
      type: Number,
      default: NaN,
    }
  },

  emits: [
    'input',
    'search',
    'update:modelValue',
  ],

  data () {
    return {
      query: '',
      showDropdown: false,
      hasFocus: false,
    };
  },

  computed: {
    shouldSearch () {
      return this.query.length >= this.minCharacters && !this.maxReached;
    },

    inputContainerClass () {
      return ['input-container', this.hasFocus && 'input-container_focus'];
    },

    maxReached () {
      return this.multiple && this.maxSelected === this.modelValue.length;
    }
  },

  watch: {
    query (query) {
      this.$emit('input', query);

      if (this.shouldSearch) {
        this.$emit('search', query);
      }
    },

    options (value) {
      if (value.length) {
        this.showDropdown = true;
      }
    }
  },

  methods: {
    getOptionKey (item, index) {
      return this.optionKey ? item[this.optionKey] : index;
    },

    select (item) {
      if (this.itemSelected(item)) return;

      const value = this.multiple ? this.modelValue.concat(item) : [item];
      const maxSelectedReached = this.multiple && this.maxSelected === value.length;

      this.$emit('update:modelValue', value);

      if (!this.multiple || maxSelectedReached) {
        this.showDropdown = false;
      }
      this.query = '';
    },

    itemSelected (item) {
      return !!this.modelValue.find((option) => option[this.optionKey] === item[this.optionKey]);
    },

    remove (index) {
      this.$emit('update:modelValue', this.modelValue.filter((_, i) => i !== index));
    },

    hideDropdown () {
      this.showDropdown = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/styles/_mixins.scss";

.suggest {
  position: relative;
}

.label {
  font-weight: bold;
}

.asterisk {
  color: #ef9288;
}

.input-container {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  color: #444444;
  border: 1px solid #d4dbdd;
  border-radius: 3px;
  padding: 0 4px;
  width: 100%;
  min-height: 40px;
  min-width: 40px;
  align-items: center;

  &_focus {
    outline: 2px solid lighten($brand-color, 20%);
  }
}

.input {
  border: none;
  height: 38px;
  flex: 1;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  @include font;

  &::placeholder {
    color: #cacaca;
  }
}

.dropdown {
  display: flex;
  flex-direction: column;
  width: 100%;


  &__container {
    top: calc(100% + 12px);
    left: 0;
    min-width: 240px;
    max-width: 100%;
    position: absolute;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 12px rgb(0 0 0 / 16%);
    color: #333;
    display: inline-flex;
    margin-top: 12px;
    white-space: normal;
  }
}
</style>
