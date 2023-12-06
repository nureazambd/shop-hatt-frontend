<template>
  <div>

    

      <section class="pt-20 pb-48 bg-white">
        <div class="container mx-auto px-2">
          <div class="flex flex-wrap justify-center text-center mb-14">
            <div class="w-full lg:w-6/12 px-1">
              <h2 class="text-4xl font-semibold text-blueGray-700">Here are our Heros</h2>
              <p class="text-lg leading-relaxed m-4 text-blueGray-500">
                We have a dedicated team of skilled developers, creative designers and program managers with vast 
                expertise of the market which makes the right balance between innovative ideas, 
                industry standards and end user’s expectations.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="team1"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-blueGray-600 text-xl font-bold">Ryan Tompson</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-500 uppercase font-semibold"
                  >
                    Web Developer
                  </p>
                  
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="team2"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-blueGray-600 text-xl font-bold">Romina Hadid</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-500 uppercase font-semibold"
                  >
                    Marketing Specialist
                  </p>
                 
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="team3"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-blueGray-600 text-xl font-bold">Alexa Smith</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-500 uppercase font-semibold"
                  >
                    UI/UX Designer
                  </p>
                 
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  :src="team4"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl text-blueGray-600 font-bold">Jenna Kardi</h5>
                  <p
                    class="mt-1 text-sm text-blueGray-500 uppercase font-semibold"
                  >
                    Founder and CEO
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       
     
  </div>
</template>
<script>

import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";

export default {
  data() {
    return {
      team1,
      team2,
      team3,
      team4,
    };
  },
  components: {

  },
};
</script>
