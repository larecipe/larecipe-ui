<template>
  <div class="bg-slate-300 h-2 rounded overflow-hidden my-4">
    <div class="h-full progress-bar" :class="computedClasses" :style="`width: ${value}%;`"></div>
  </div>
</template>

<script>
export default {
  name: "larecipe-progress",
  props: {
    type: {
      type: String,
      default: "success",
      description: "Progress type (e.g danger, primary etc)"
    },
    value: {
      type: Number,
      default: 0,
      validator: value => {
        return value >= 0 && value <= 100;
      },
      description: "Progress value"
    }
  },
  computed: {
    computedClasses() {
      return [{ [`${this.type}`]: this.type }];
    }
  }
};
</script>
