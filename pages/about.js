import React from 'react'

const About = () => {
  return (
    <>
        <section class="bg-gray-100 py-16">
  <div class="container mx-auto px-4">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
      <p class="text-gray-600 mb-8">Discover our mission, values, and expertise.</p>
    </div>
    <div class="flex flex-col lg:flex-row items-center justify-between">
      <div class="lg:w-1/2 mb-8 lg:mb-0">
        <img src="/about.png" alt="About Us" class="w-full rounded-md"/>
      </div>
      <div class="lg:w-1/2 lg:pl-12">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">ABOUT MYSELF</h3>
        <div class="mb-8">
          <h4 class="text-xl font-bold text-gray-800 mb-2">Abu Bakar</h4>
          <p class="text-gray-600">Full Stack Mern Developer.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default About