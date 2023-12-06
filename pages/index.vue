<template>
  <div>
    <hero />
    <features />
    <OurApps/>
    <!-- <teasers /> -->
    <!-- <teamlists/> -->
     <!-- <prices/> -->
     
    <call-to-action />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import TeamLists from '@/components/TeamLists'
import Prices from '@/components/Prices'
import CallToAction from '@/components/CallToAction'
import OurApps from '../components/OurApps.vue'



export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    features: Features,
    teasers: Teasers,
    teamlists: TeamLists,
    prices: Prices,
    "call-to-action": CallToAction,
    OurApps
}
}
</script>
