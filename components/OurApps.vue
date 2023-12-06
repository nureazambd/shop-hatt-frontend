<template>
    <section class="overflow-y-hidden bg-white">
        <div class="container flex items-center justify-center px-4 py-12 mx-auto md:px-6 2xl:px-0">
            <div class="flex flex-col items-center jusitfy-start">
                <div>
                    <!-- <p class="text-sm leading-4 text-gray-600">Home</p> -->
                </div>
                <div class="mt-3">
                    <h1 class="text-3xl font-semibold leading-8 tracking-tight text-gray-800 lg:text-4xl lg:leading-9">Our Apps</h1>
                </div>
                <div class="mt-4">
                    <!-- <p class="text-2xl leading-6 tracking-tight text-gray-600">03 items</p> -->
                </div>
                <div class="grid grid-cols-1 mt-10 lg:mt-12 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
                    <div class="flex flex-col">
                        <div class="relative">
                            <img class="hidden lg:block" src="../assets/img/Thikana-app-them-01.png" alt="bag" />
                            <img class="hidden sm:block lg:hidden" src="../assets/img/Thikana-app-them-01.png" alt="bag" />
                            <img class=" sm:hidden" src="../assets/img/Thikana-app-them-01.png" alt="bag" />
                            <!-- <button aria-label="close" class="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 text-white hover:text-gray-400">
                            <svg class="fil-current" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 1L1 13" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 1L13 13" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                        
                         </button> -->
                        </div>
                        <div class="items-center justify-between -mt-12 text-center ">
                            <div class="items-center justify-center ml-16 text-center">
                                <p class="text-3xl font-bold tracking-tight text-center text-gray-800">Thikana App</p>
                            </div>
                        </div>
                        
                    </div>
    
                    <div class="flex flex-col">
                        <div class="relative">
                            <img class="hidden lg:block" src="../assets/img/Talika-app-them-01.png" alt="watch" />
                            <img class="hidden sm:block lg:hidden" src="../assets/img/Talika-app-them-01.png" alt="watch" />
                            <img class="sm:hidden" src="../assets/img/Talika-app-them-01.png" alt="watch" />
                            
                        </div>
                        <div class="items-center justify-between -mt-12 text-center ">
                            <div class="items-center justify-center ml-16 ">
                                <p class="text-3xl font-bold leading-6 tracking-tight text-gray-800">Talika App</p>
                            </div>
                            
                        </div>
                        
                    </div>




                    <div class="flex flex-col">
                        <div class="relative">
                            <img class="hidden lg:block" src="../assets/img/Porishodh-app-them.png" alt="watch" />
                            <img class="hidden sm:block lg:hidden" src="../assets/img/Porishodh-app-them.png" alt="watch" />
                            <img class="sm:hidden" src="../assets/img/Porishodh-app-them.png" alt="watch" />
                            
                        </div>
                        <div class="items-center justify-between -mt-12 text-center ">
                            <div class="items-center justify-center ml-16 ">
                                <p class="text-3xl font-bold leading-6 tracking-tight text-gray-800">Porishodh App</p>
                            </div>
                            
                        </div>
                        
                    </div>
    
                    <!-- <div class="flex flex-col">
                        <div class="relative">
                            <img class="hidden lg:block" src="https://i.ibb.co/JqD4MwR/Rectangle-5.png" alt="shoes" />
                            <img class="hidden sm:block lg:hidden" src="https://i.ibb.co/MG7JYJ4/Rectangle-5-1.png" alt="shoes" />
                            <img class="sm:hidden" src="https://i.ibb.co/89gMng3/Rectangle-5.png" alt="shoes" />
                            <button aria-label="close" class="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 text-white hover:text-gray-400">
                                    <svg class="fil-current" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1L1 13" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1 1L13 13" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                        
                                 </button>
                        </div>
                        <div class="flex items-center justify-between mt-6">
                            <div class="flex items-center justify-center">
                                <p class="text-2xl font-semibold leading-6 tracking-tight text-gray-800">EZ sneakers</p>
                            </div>
                            <div class="flex items-center justify-center">
                                <button aria-label="show menu" @click="show2=!show2" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400">
                                            <svg id="chevronUp3" v-if="show2" class="fill-stroke" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L5 1L1 5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <svg id="chevronDown3" v-if="!show2" class=" fill-stroke" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>                                
                                            </button>
                            </div>
                        </div>
                        <div id="menu3" v-if="show2" class="flex flex-col items-start mt-12 jusitfy-start">
                            <div>
                                <p class="text-xs leading-3 tracking-tight text-gray-800">MK617</p>
                            </div>
                            <div class="mt-2">
                                <p class="text-base font-medium leading-4 tracking-tight text-gray-800">Beige brown</p>
                            </div>
                            <div class="mt-6">
                                <p class="text-base font-medium leading-4 tracking-tight text-gray-800">42 size</p>
                            </div>
                            <div class="mt-6">
                                <p class="text-base font-medium leading-4 tracking-tight text-gray-800">$1,000</p>
                            </div>
                            <div class="flex flex-col items-center w-full mt-10 space-y-4 jusitfy-between lg:flex-row lg:space-y-0 lg:space-x-4 xl:space-x-8">
                                <div class="w-full">
                                    <button class="w-full py-4 text-lg leading-4 tracking-tight text-white text-gray-800 bg-white border border-gray-800 focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 hover:bg-gray-300 hover:text-gray-800">More information</button>
                                </div>
                                <div class="w-full">
                                    <button class="w-full py-4 text-lg leading-4 tracking-tight text-white bg-gray-800 border border-gray-800 focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 hover:bg-black">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
    data() {
        return {
            show: true,
            show1: false,
            show2: false,
        }
    },
    methods: {},
    mounted() {},
};
</script>

<style>

</style>
