<template>
  <div>
    <servicesfeatures />
    <!-- <serviceareas /> -->
    <ThikanaFeatures/>
  </div>
</template>

<script>
import ServicesFeatures from '@/components/ServicesFeatures'
import ThikanaFeatures from '../components/ThikanaFeatures.vue'
// import ServiceAreas from '@/components/ServiceAreas'

export default {
  name: 'LandingPage',
  components: {
    servicesfeatures: ServicesFeatures,
    ThikanaFeatures
},
  head() {
      return {
        title: 'Thikana Page',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'RTC Hubs is a Real-time Communication Hubs. RTC Hubs efficient real time data exchange over the Internet plays a crucial role in the successful application of web and mobile based systems. Hubs Limited is a leading professional services company specializing in web and mobile applications. We have a dedicated team of skilled developers, creative designers and program managers with vast expertise of the market which makes the right balance between innovative ideas, industry standards and end user’s expectations.'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'software development company, custom software development company, it company, it companies near me, it solutions company, android app development company, android app development company near me, ios apps development company, managed it services provider, it services company, web design company, agency web design, web development company, website development company, web development agency, web development services, top web design company, web designing firms, it consulting firms, it support company, it managed services companies, managed it services near me, it support companies near me, web development firm, top 100 software development companies, best software development agency, big software development companies, top 10 software development companies, top it services companies, software engineering company, wordpress development companies, angularjs development company, nodejs development companies, python development company, web application development company, ecommerce development company, reactjs development company, vuejs development company, nuxtjs development company, web app development company, laravel development company, front end development company, php web development company, responsive website development company, web and mobile app development company,'
          }
        ]
      }
    },
}
</script>
