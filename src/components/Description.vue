<template>
  <div>
    <input id="description" v-model="inputText" @input="handleInput" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
      message: "",
      balancedMessage: "The text is balanced.",
      unbalancedMessage: "The text is not balanced.",
      timeoutId: null,
    };
  },
  methods: {
    debounce(func, wait) {
      return (...args) => {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => func.apply(this, args), wait);
      };
    },
    isBalanced() {
      const stack = [];
      const pairs = {
        "(": ")",
        "[": "]",
        "{": "}",
      };

      for (let char of this.inputText) {
        if (pairs[char]) {
          stack.push(char);
        } else if (Object.values(pairs).includes(char)) {
          const last = stack.pop();
          if (pairs[last] !== char) {
            this.message = this.unbalancedMessage;
            return;
          }
        }
      }

      this.message =
        stack.length === 0 ? this.balancedMessage : this.unbalancedMessage;
    },
    handleInput() {
      this.debounce(this.isBalanced, 300)();
    },
  },
};
</script>
