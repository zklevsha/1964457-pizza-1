<template>
  <div class="additional-list__wrapper">
    <div class="counter additional-list__counter">
      <button
        type="button"
        class="counter__button counter__button--minus"
        :disabled="disabled"
        @click="decrease"
      >
        <span class="visually-hidden">Меньше</span>
      </button>
      <input
        type="text"
        name="counter"
        class="counter__input"
        :value="item.count"
        readonly="readonly"
      />
      <button
        type="button"
        class="counter__button counter__button--plus counter__button--orange"
        @click="increase"
      >
        <span class="visually-hidden">Больше</span>
      </button>
    </div>

    <div class="additional-list__price">
      <b> {{ price }} ₽</b>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartAdditionalItemCounter",
  props: {
    min: {
      type: Number,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    price() {
      return this.item.price * this.item.count;
    },
    disabled() {
      return this.item.count <= this.min;
    },
  },
  methods: {
    decrease() {
      this.$emit("decrease");
    },
    increase() {
      this.$emit("increase");
    },
  },
};
</script>
