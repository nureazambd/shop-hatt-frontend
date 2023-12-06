<template>
  <!-- class="text-black font-roboto" -->
  <nav :class="headerClassList" class="fixed top-0 z-30 w-full font-roboto">
    <div
      class="container flex flex-wrap items-center justify-between w-full py-1 mx-auto mt-0"
    >
      <div class="flex items-center pl-4">
        <logo :isStickable="true" :isSticky="isSticky" />
      </div>
      <div class="block pr-4 lg:hidden">
        <button
          class="flex items-center p-1 text-orange-800 hover:text-gray-900"
          @click.prevent.stop="onToggleClick"
        >
          <svg
            class="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        :class="navContentClassList"
        class="z-20 flex-grow hidden w-full p-4 mt-2 lg:flex lg:items-center lg:w-auto lg:block lg:mt-0 lg:bg-transparent lg:p-0"
      >
        <ul class="items-center justify-end flex-1 list-reset lg:flex">
          <li class="mr-3">
            <!-- <a
              class="inline-block px-4 py-2 font-semibold text-white no-underline uppercase hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
              href="/"
              >Home
            </a> -->
            <nuxt-link to="/"
            class="inline-block px-4 py-2 text-base font-medium no-underline rounded-md font-roboto hover:text-blue-900 hover:text-underline"  
            :class="navList">Home</nuxt-link>
          </li>
          <li class="mr-3">
            <!-- <a
              class="inline-block px-4 py-2 font-semibold text-white no-underline uppercase hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
              href="/technologies"
              >How It Works
            </a> -->
            <nuxt-link to="/technologies"
            class="inline-block px-4 py-2 text-base font-medium no-underline hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
            >
              How It Works
            </nuxt-link>
          </li>
          <li class="mr-3">
             
            <nuxt-link to="/services"
            class="inline-block px-4 py-2 text-base font-medium no-underline hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
            >
              Services
            </nuxt-link>
          </li>
          
          <li class="mr-3">
            <!-- <a
              class="inline-block px-4 py-2 font-semibold text-white no-underline uppercase hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
              href="/pricesdetails"
              >Prices</a
            > -->
            <nuxt-link to="/pricesdetails"
            class="inline-block px-4 py-2 text-base font-medium no-underline hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
            >
              Prices
            </nuxt-link>
          </li>
          <li class="mr-3">
            
            <nuxt-link to="/team"
            class="inline-block px-4 py-2 text-base font-medium no-underline hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
            >
              Team
            </nuxt-link>
          </li>
          <li class="mr-3">
            <nuxt-link to="/company"
            class="inline-block px-4 py-2 text-base font-medium no-underline hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
            >
              Company
            </nuxt-link>
          </li>
          <li class="mr-3">
            <nuxt-link to="/contact"
            class="inline-block px-4 py-2 text-base font-medium no-underline hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
            >
            Contact
            </nuxt-link>
          </li>
        </ul>

      </div>

      <div
        :class="navContentClassList_1"
        class="z-20 flex-grow block w-full p-4 mt-2 lg:flex lg:items-center lg:w-auto lg:hidden lg:mt-0 lg:bg-transparent lg:p-0"
      >
        <ul class="items-center justify-end flex-1 list-reset lg:flex">
          <li class="mr-3">
            <!-- <a
              class="inline-block px-4 py-2 font-semibold text-white no-underline uppercase hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
              href="/"
              >Home
            </a> -->
            <nuxt-link to="/"
            class="inline-block px-4 py-2 text-base font-medium no-underline rounded-md font-roboto hover:text-blue-900 hover:text-underline"  
            :class="navList">Home</nuxt-link>
          </li>
          <li class="mr-3">
            <!-- <a
              class="inline-block px-4 py-2 font-semibold text-white no-underline uppercase hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
              href="/technologies"
              >How It Works
            </a> -->
            <nuxt-link to="/technologies"
            class="inline-block px-4 py-2 text-base font-medium no-underline hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
            >
              How It Works
            </nuxt-link>
          </li>
          <li class="mr-3">
             
            <nuxt-link to="/services"
            class="inline-block px-4 py-2 text-base font-medium no-underline hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
            >
              Services
            </nuxt-link>
          </li>
          
          <li class="mr-3">
            <!-- <a
              class="inline-block px-4 py-2 font-semibold text-white no-underline uppercase hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
              href="/pricesdetails"
              >Prices</a
            > -->
            <nuxt-link to="/pricesdetails"
            class="inline-block px-4 py-2 text-base font-medium no-underline hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
            >
              Prices
            </nuxt-link>
          </li>
          <li class="mr-3">
            
            <nuxt-link to="/team"
            class="inline-block px-4 py-2 text-base font-medium no-underline hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
            >
              Team
            </nuxt-link>
          </li>
          <li class="mr-3">
            <nuxt-link to="/company"
            class="inline-block px-4 py-2 text-base font-medium no-underline hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
            >
              Company
            </nuxt-link>
          </li>
          <li class="mr-3">
            <nuxt-link to="/contact"
            class="inline-block px-4 py-2 text-base font-medium no-underline hover:text-gray-800 hover:text-underline font-roboto"  :class="navList"
            >
            Contact
            </nuxt-link>
          </li>
        </ul>

      </div>

    </div>
    <hr class="py-0 my-0 border-b border-gray-100 opacity-25" />
  </nav>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheHeader',
  components: {
    logo: Logo
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false
    }
  },
  computed: {
    isSticky() {
      return this.scrollY > 10
    },
    headerClassList() {
      return this.isSticky ? 'bg-white text-gray-800 shadow' : ''
    },
    navActionClassList() {
      return this.isSticky ? 'gradient text-white' : 'bg-white text-black'
    },
     navList() {
      return this.isSticky ? 'text-black' : ''
    },
    navContentClassList() {
      let classList = this.isSticky ? 'text-white' : ''
      if (!this.isOpen) {
        classList += ` hidden`
      }
      return classList
    },

    navContentClassList_1() {
      let classList = this.isSticky ? 'text-white' : 'bg-emerald-500 text-white'
      if (!this.isOpen) {
        classList += ` hidden`
      }
      return classList
    }

  },
  methods: {
    onClick() {
      this.isOpen = false
    },
    onScroll() {
      this.scrollY = window.scrollY
    },
    onToggleClick() {
      this.isOpen = !this.isOpen
    }
  },
  mounted() {
    this.scrollY = window.scrollY
    document.addEventListener('click', this.onClick)
    document.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClick, true)
    document.removeEventListener('scroll', this.onScroll, true)
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
</style>
