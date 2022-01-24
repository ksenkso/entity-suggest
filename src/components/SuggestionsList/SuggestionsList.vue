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
    <div
      ref="inputContainer"
      :class="inputContainerClass"
    >
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
        autocomplete="off"
        @focus="onFocus"
        @blur="hasFocus = false"
        @keyup.up="moveSelection(-1)"
        @keyup.down="moveSelection(1)"
        @keyup.enter="select(options[activeItemIndex])"
      >
    </div>
    <div
      v-show="showDropdown"
      ref="dropdownContainer"
      class="dropdown__container"
      :class="dropdownClass"
      :style="dropdownStyle"
    >
      <Loader
        v-if="loading"
        :delay="200"
      />
      <slot
        v-if="error"
        name="error"
      >
        <Error :error="error" />
      </slot>
      <slot
        v-if="!loading && !error && !options.length"
        name="not-found"
      >
        <NotFound />
      </slot>
      <div
        ref="dropdown"
        class="dropdown"
      >
        <DropdownItem
          v-for="(item, index) in options"
          :key="item[optionKey]"
          :active="item[optionKey] === activeItemKey"
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
import { nextTick } from 'vue';
import Loader from '@/components/Loader.vue';
import Error from '@/components/SuggestionsList/Error.vue';
import NotFound from '@/components/SuggestionsList/NotFound.vue';
import { debounce } from '@/lib/utils.js';

const DROPDOWN_MARGIN = 12;

export default {
  name: 'SuggestionsList',

  components: { NotFound, Error, Loader, DropdownItem, Tag },

  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
    },
    error: {
      type: Object,
      default: null,
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
    debounce: {
      type: Number,
      default: 300,
    },
    dropdownDisplayCount: {
      type: Number,
      default: 3,
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
    },
  },

  emits: [
    'input',
    'search',
    'update:modelValue',
  ],

  data () {
    return {
      query: '',
      forceDropdown: false,
      hasFocus: false,
      dropdownHeight: 'auto',
      dropdownClass: '',
      activeItemIndex: -1,
      firstVisibleItemIndex: 0,
    };
  },

  computed: {
    showDropdown () {
      return (this.loading || this.error || this.forceDropdown) && !this.maxReached;
    },

    shouldSearch () {
      return this.query.length >= this.minCharacters && !this.maxReached;
    },

    inputContainerClass () {
      return ['input-container', this.hasFocus && 'input-container_focus'];
    },

    maxReached () {
      return this.multiple && this.maxSelected === this.modelValue.length;
    },

    dropdownStyle () {
      return {
        maxHeight: this.dropdownHeight,
      };
    },

    activeItemKey () {
      return this.options[this.activeItemIndex]?.[this.optionKey];
    }
  },

  watch: {
    query (query) {
      this.$emit('input', query);

      if (this.shouldSearch) {
        this.emitSearch(query);
      }

      if (!query) {
        this.forceDropdown = false;
      }
    },

    async options () {
      this.forceDropdown = true;
      await nextTick();
      this.recalculateDropdownHeight();
    },

    async showDropdown (shouldShow) {
      if (shouldShow) {
        this.recalculateDropdownPosition();
        await nextTick();
        this.$refs.dropdownContainer.scrollTo(0, 0);
      }
    },
  },

  created () {
    this.emitSearch = debounce(this.emitSearch, this.debounce);
  },

  mounted () {
    window.addEventListener('resize', this.recalculateDropdownPosition);
    document.addEventListener('scroll', this.recalculateDropdownPosition);
  },

  beforeUnmount () {
    window.removeEventListener('resize', this.recalculateDropdownPosition);
    document.removeEventListener('scroll', this.recalculateDropdownPosition);
  },

  methods: {
    emitSearch (query) {
      this.$emit('search', query);
    },

    select (item) {
      if (!item || this.itemSelected(item)) return;

      const value = this.multiple ? this.modelValue.concat(item) : [item];
      const maxSelectedReached = this.multiple && this.maxSelected === value.length;

      this.$emit('update:modelValue', value);

      if (!this.multiple || maxSelectedReached) {
        this.forceDropdown = false;
        this.query = '';
      }
    },

    moveSelection (shift) {
      const rotate = (amount, from, mod) => (amount + from + mod) % mod;

      this.activeItemIndex = rotate(shift, this.activeItemIndex, this.options.length);
      const isVisible = this.activeItemIndex >= this.firstVisibleItemIndex && this.activeItemIndex < this.firstVisibleItemIndex + this.dropdownDisplayCount;
      if (!isVisible) {
        this.$refs.dropdown.children.item(this.activeItemIndex).scrollIntoView(shift < 0);
        this.firstVisibleItemIndex = rotate(shift, this.firstVisibleItemIndex, this.dropdownDisplayCount + 1);
      }
    },

    itemSelected (item) {
      return !!this.modelValue.find((option) => option[this.optionKey] === item[this.optionKey]);
    },

    remove (index) {
      this.$emit('update:modelValue', this.modelValue.filter((_, i) => i !== index));
    },

    hideDropdown () {
      this.forceDropdown = false;
    },

    onFocus () {
      this.hasFocus = true;
      if (this.shouldSearch) {
        this.forceDropdown = true;
      }
    },

    recalculateDropdownHeight () {
      if (isFinite(this.dropdownDisplayCount) && this.$refs.dropdown.childElementCount) {
        const numberOfItemsToShow = Math.min(this.dropdownDisplayCount, this.$refs.dropdown.childElementCount);
        let height = 0;
        for (let i = 0; i < numberOfItemsToShow; i++) {
          height += this.$refs.dropdown.children[i].clientHeight;
        }
        this.dropdownHeight = `${height}px`;
      } else {
        this.dropdownHeight = 'auto';
      }
    },

    recalculateDropdownPosition () {
      const inputRect = this.$refs.inputContainer.getBoundingClientRect();
      const bottomSpace = window.innerHeight - (inputRect.bottom + DROPDOWN_MARGIN);
      const topSpace = inputRect.top - DROPDOWN_MARGIN;

      this.dropdownClass = topSpace > bottomSpace
        ? 'dropdown__container_top'
        : 'dropdown__container_bottom';
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
  margin-bottom: 4px;
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
  border-radius: $border-radius-small;
  padding: 4px;
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
  height: 30px;
  flex: 1;
  min-width: 30px;
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
    min-height: 64px;
    position: absolute;
    overflow-y: auto;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 12px rgb(0 0 0 / 16%);
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
    white-space: normal;

    &_top {
      top: initial;
      bottom: calc(100% + 12px);
    }
  }
}

.loader {
  width: 32px;
  height: 32px;
  margin: 0 auto;
}
</style>
