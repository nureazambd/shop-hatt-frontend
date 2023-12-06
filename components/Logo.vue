<template>
  <a
    :class="classList"
    class="text-2xl font-bold no-underline hover:no-underline lg:text-4xl"
    href="/"
  >
           <!-- <img class="w-40 py-4 z-70" src="~/assets/img/logo-minmall2.png" alt /> -->
            <img class="w-40 py-4 z-70" src="~/assets/img/Shop-Hatt-logo-1.png" alt />

  </a>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isStickable: {
      type: Boolean,
      default: false
    },
    isSticky: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      let classList = ''
      if (this.isStickable) {
        classList = this.isSticky ? 'text-gray-800' : 'text-white'
      } else {
        classList = 'text-orange-600'
      }
      return classList
    }
  }
}
</script>
