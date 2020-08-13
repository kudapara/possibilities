<template>
  <Layout>
    <div class="min-h-screen pb-14 bg-right bg-cover">

      <div class="bg-teal-100 p-6 border-b-2 border-teal-500 text-base md:text-lg">
      <nav class="container mx-auto flex items-center justify-between flex-wrap">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src="logo.svg" class="h-16" />
        </div>
      
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="hidden md:block font-bold lg:flex-grow">
            <a href="#about-us" class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-600 hover-underline mr-8">About Us</a>

            <a href="#how-it-works" class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-600 hover-underline mr-8">How it works</a>

            <a href="#programs" class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-600 hover-underline mr-8">Our programs</a>

            <a href="#philosophy" class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-600 hover-underline mr-8">Philosophy</a>

            <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-600 hover-underline">Contact Us</a>
          </div>
        </div>
      </nav>
      </div>

      <!--Main-->
      <div
        class="container pt-8 text-base md:text-2xl md:pt-18 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <!--Left Col-->
        <div class="flex flex-col  w-full xl:w-3/5 justify-center lg:items-start">
          <h1
            class="my-4 text-3xl md:text-6xl text-teal-800 font-black leading-tight text-center md:text-left slide-in-bottom-h1"
          >Possibilities Cognitive Skills Development Center</h1>
          <p
            class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle"
          >We believe that cognitive skills training is about excercing the brain to think faster and learn easily.</p>

          <div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
            <button class="bg-teal-600 text-white py-4 px-6">Register for an assessment</button>
          </div>
        </div>

        <!--Right Col-->
        <div class="w-full xl:w-2/5 py-6 overflow-y-hidden bg-red -mt-16  md:mt-auto">
          <img class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="fatherhood.svg" />
        </div>

        <!-- New quotes -->
        <div class="md:-ml-10 p-24l mt-16 md:mt-32 flex flex-col justify-cepnter items-center w-full">
          <div
            class="max-w-6xl mx-auto relative"
            x-data="{ activeSlide: 1, slides: [1, 2, 3, 4, 5] }"
          >
            <!-- Slides -->
            <div v-for="slide in slides" :key="slide">
              <div
                v-show="activeSlide === slide"
                class="px-10 md:px-24 py-8 md:py-16 flex flex-col justify-center font-bold text-5xl bg-pink-500 text-white rounded-lg carousel-shell"
              >
                <h1 class="text-xl md:text-lg md:text-6xl font-black">"{{ quotes[slide].text }}"</h1>
                <div class="flex items-center max-w-3xl">
                  <div class="h-1 bg-white mr-4 flex-1">&nbsp;</div>
                  <span class="text-lg md:text-3xl font-bold">{{ quotes[slide].author }}</span>
                </div>
              </div>
            </div>
            <!-- Prev/Next Arrows -->
            <div class="absolute inset-0 flex">
              <div class="flex items-center justify-start w-1/2">
                <button
                  class="flex items-center justify-between border-border-teal-700 shadow bg-white text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-6 md:w-12 h-6 md:h-12 ml-2 md:ml-8"
                  @click="activeSlide = activeSlide === 0 ? slides.length - 1 : activeSlide - 1"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-left w-4 md:w-8 h-4 md:h-8">
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex items-center justify-end w-1/2">
                <button
                  class="flex items-center justify-between border-border-teal-700 shadow bg-white text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-6 md:w-12 h-6 md:h-12 mr-2 md:mr-8"
                  @click="activeSlide = activeSlide === slides.length - 1 ? 0 : activeSlide + 1"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-right w-4 md:w-8 h-4 md:h-8">
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Buttons -->
            <div class="absolute w-full flex items-center justify-center px-4">
              <div v-for="slide in slides" :key="slide">
                <button
                  class="flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg"
                  :class="{ 
                      'bg-orange-600': activeSlide === slide,
                      'bg-teal-300': activeSlide !== slide 
                  }"
                  @click="activeSlide = slide"
                ></button>
              </div>
            </div>
          </div>
        </div>
        <!-- Enf of new quote -->

        <!-- About us -->
        <div class="w-full mt-12 md:mt-24" id="about-us">
          <div class="flex items-center">
            <div class="flex items-center justify-center h-16 w-16 md:h-24 md:w-24 bg-teal-200 rounded-full mr-2">
              <svg
                class="w-6 h-6 md:h-12 md:w-12 text-teal-500"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="text-lg md:text-6xl font-black">About Us</h3>
            <div class="h-2 bg-black ml-4 flex-1">&nbsp;</div>
          </div>

          <div class="flex items-center justify-between flex-wrap mt-6 border-b-4 border-black pb-16 mb-16">
            <div class="w-full md:w-1/2 md:pr-16">
              <p
                class="mb-6"
              >We believe that cognitive skills training is about exercising the brain to think faster and learn easily.</p>
              <p>Different children have different needs that is why our programs target the areas that need strengthening whether it be memory, auditory processing, visual processing, attention, working memory, processing speed or logic and reasoning.</p>
            </div>

            <div class="flex justify-end md:w-1/2 mt-8 mb:mt-0">
              <div class="md:-mt-16 px-6 py-8 bg-gray-900 text-white border-b-4 border-teal-600">
                <div>
                  <h3 class="font-bold text-3xl">Esther Moyo</h3>
                  <p class="text-gray-200 text-base mb-6">Founder and CEO</p>
                  <p
                    class="mb-2"
                  >Esther Moyo majored in Clinical Psychology and has been working with children since 2011.</p>
                  <p
                    class="mb-2"
                  >Her experience ranges from being a Denominational Conference Children's Ministries Director, Certified Brain Trainer as well as a Student Counselor in International Schools in the Middle East.</p>
                  <p
                    class="mb-2"
                  >Her passion lies in seeing possibilities in every child and adult becoming reality. She believes that the brain has neuroplasticity characteristics, therefore, the ability to learn or strengthen those areas that are deemed weak.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- How it works -->
        <div class="flex justify-between flex-wrap w-full mt-16" id="how-it-works">
          <div class="max-w-lg">
            <h3 class="text-3xl font-bold">How it all works</h3>
            <div class="flex flex-col items-start mt-8">
              <div class="flex">
                <div
                  class="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full border-2 border-teal-500 mr-4"
                >
                  <svg class="h-6 w-6 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span>Register for an assessment</span>
              </div>

              <div class="h-10 w-1 bg-teal-500 ml-4 -mt-1">&nbsp;</div>

              <div class="flex">
                <div
                  class="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full border-2 border-teal-500 mr-4"
                >
                  <svg class="h-6 w-6 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span>Go through our programs</span>
              </div>

              <div class="h-10 w-1 bg-teal-500 ml-4 -mt-1">&nbsp;</div>

              <div class="flex">
                <div
                  class="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full border-2 border-teal-500 mr-4"
                >
                  <svg class="h-6 w-6 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span>
                  Enjoy your new found abilities and
                  continue on your path of exploring
                  more possibilities
                </span>
              </div>
            </div>

            <button class="bg-teal-600 text-white py-4 px-6 mt-6">Register for an assessment</button>
          </div>

          <div class="mt-8 md:mt-0 border-4 border-black bg-teal-100 p-8 flex flex-col justify-between max-w-xl">
            <p>Our training is Diagnostic, individual and developmental. Our trainers are qualified and experienced to deliver timely, systematic and effective interventions.</p>

            <p>All our programs are research based and international.</p>
          </div>
        </div>

        <!-- Our programs -->
        <div class="flex justify-between w-full mt-12 md:mt-24" id="programs">
          <div class="max-w-2xl">
            <h3 class="text-3xl font-bold">Our programs</h3>
            <p
              class="mb-4 mt-8"
            >Reading Possibilities Programs focus on the Auditory Processing Cognitive Skill which is a fundamental literacy and reading skill. This program is suitable for all abilities.</p>
            <p
              class="mb-4"
            >Our Reading programs not only assess efficiency, but also measure and increase motivation and comprehension. Clients are given choice and control to practice at their own pace with a program that uses adaptive technology in a truly meaningful way.</p>
            <p
              class="mb-4"
            >These are web-based programs that build upon the foundational skills of phonics and phonemic awareness to develop silent reading fluency, comprehension (deeper understanding), and re-engaging reluctant readers.</p>
            <p class="mb-4">
              The training approach is diagnostic, individualised and developmental. Each person is initially assessed in
              terms of relative strengths and possible weaknesses in a variety of skill areas, according to age and
              standard norms.
            </p>
            <p>An individualised program is then applied, employing appropriately graded training material.</p>
          </div>
        </div>

        <!-- Pricing -->
        <div class="child-w-full bg-teal-500 py-24 mt-24 relative">
          <div
            class="container text-base md:text-2xl md:pt-18 px-0 md:px-6 mx-auto flex flex-wrap flex-col md:flex-row"
          >
            <div class="w-full md:w-1/3 mt-4 md:mt-0 px-4" v-for="course in courses" :key="course.title">
              <div class="border-4 border-black bg-white h-full flex flex-col justify-between">
                <div>
                  <div class="flex justify-between p-4">
                    <span class="font-black">${{ course.price }}</span>
                    <!-- <span class="text-base text-white bg-black p-2 rounded">monthly</span> -->
                  </div>

                  <p class="font-bold mt-2 mb-4 px-4">{{ course.title }}</p>

                  <div class="w-24 h-1 bg-black mb-6">&nbsp;</div>

                  <p class="px-4">
                    {{ course.description }}
                  </p>
                </div>

                <div class="px-4">
                  <button class="bg-black text-white py-4 px-6 mt-6 mb-4 w-full">Add to cart</button>
                </div>
              </div>
            </div>
          </div>

          <div class="absolute bottom-0 left-0 w-full -mb-8">
            <div class="container mx-auto w-64 md:w-auto md:px-10">
              <button
                class="w-full md:w-auto bg-pink-600 text-white py-4 px-6 border-4 border-white"
              >Proceed to checkout</button>
            </div>
          </div>
        </div>

        <!-- Philosophy -->
        <div class="w-full mt-24 md:mt-48" id="philosophy">
          <div class="flex items-center">
            <div class="flex items-center justify-center h-16 w-16 md:h-24 md:w-24 bg-teal-200 rounded-full mr-2">
              <svg class="h-12 w-12 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-lg md:text-6xl font-black">Philosophy</h3>
            <div class="h-2 bg-black ml-4 flex-1">&nbsp;</div>
          </div>

          <div class="flex justify-between flex-wrap mt-8 md:mt-16">
            <div>
              <h3 class="text-2xl md:text-3xl font-bold">Values</h3>
              <ul class="mt-4">
                <li class="flex items-center mb-4">
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-teal-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Respect
                </li>
                <li class="flex items-center mb-4">
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-teal-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Integrity
                </li>
                <li class="flex items-center mb-4">
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-teal-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Systematic Interventions
                </li>
                <li class="flex items-center">
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-teal-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Effective Interventions
                </li>
              </ul>
            </div>

            <div class="max-w-xl mt-8 md:mt-0">
              <h3 class="text-2xl md:text-3xl font-bold">Vision</h3>
              <p class="mb-8">
                To develop individuals who strive to achieve their highest potential in schools, communities
                and at home.
              </p>

              <h3 class="text-2xl md:text-3xl font-bold">Mission</h3>
              <p class="mb-8">
                PCS Development Center seeks to help individuals realise their unique possibilities
                undiscovered.
              </p>
            </div>
          </div>
        </div>

        <!-- About us -->
        <div class="w-full mt-12 md:mt-24" id="contact">
          <div class="flex items-center">
            <div class="flex items-center justify-center h-16 w-16 md:h-24 md:w-24 bg-teal-200 rounded-full mr-2">
              <svg class="h-12 w-12 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
             <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
            </div>
            <h3 class="text-lg md:text-6xl font-black">Contact us</h3>
            <div class="h-2 bg-black ml-4 flex-1">&nbsp;</div>
          </div>

          <div class="flex justify-between flex-wrap mt-8 md:mt-16">
            <div>
              <h3 class="text-base uppercase tracking-wide text-gray-700 mb-2">Phone Number</h3>+971 555829884
            </div>
            <address class="mt-8 md:mt-0">
              <h3 class="text-base uppercase tracking-wide text-gray-700 mb-2">Physical Address</h3>18985 69 Avenue, Surrey
              British Columbia
              Canada
              V4N 5K1
            </address>
          </div>
        </div>

        <!--Footer-->
        <div
          class="w-full flex justify-center md:justify-between flex-wrap text-gray-700 py-8 md:py-16 -6 text-sm text-center md:text-left fade-in border-t mt-8 md:mt-16"
        >
          <a
            class="no-underline hover:no-underline"
            href="#"
          >&copy; Possibilities Cognitive Skills Development Center 2020</a>

          <div>
            Designed and coded with ❤️ by
            <a
              href="https://progic.co"
              target="_blank"
              class="mt-6 md:mt-0 inline-block text-indigo-600 hover:underline"
            >Progic</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Accordion from "@/components/Accordion";
import { VueMailchimpEmailSignupForm } from "vue-mailchimp-email-signup-form";

export default {
  // <meta charset="UTF-8">
  // <meta name="viewport" content="width=device-width, initial-scale=1.0">
  // <meta http-equiv="X-UA-Compatible" content="ie=edge">
  // <title>Possibilities Cognitive Skills Development Center</title>
  // <meta name="description" content="">
  // <meta name="keywords" content="">

  //   <!-- Font Awesome if you need it
  // <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
  // -->

  // <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css">
  // <!--Replace with your tailwind.css once created-->

  // <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
  metaInfo: {
    title: "Possibilities Cognitive Skills Development Center",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { charset: "UTF-8" },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap",
      },
    ],
  },

  components: {
    Accordion,
    VueMailchimpEmailSignupForm,
  },

  data() {
    return {
      slides: [0, 1, 2, 3, 4, 5],
      activeSlide: 0,
      quotes: [
        {
          text: "Write this down: My life is full of unlimited possibilities.",
          author: "Pablo",
        },
        {
          text: "Explore the possibilities; Transformation happens anywhere.",
          author: "Ayubakhan U",
        },
        {
          text:
            "So many things are possible as long as you know they are impossible.",
          author: "Mildred D. Taylor",
        },
        {
          text: "It's the possibility that keeps me going, not the guarantee.",
          author: "Nicholas Sparks",
        },
        {
          text: "All things are possible until they are proven impossible.",
          author: "Pearl S. Buck",
        },
        {
          text:
            "There is a thin line between the impossible and the possible that is determination.",
          author: "Ogwo David Emenike",
        },
        {
          text: "Every new day begins with possibilities.",
          author: "Ronald Reagan",
        },
        {
          text:
            "Life is about the richness of the infinite possibilities. Just by you being unique contributes to the TRUE beauty of the world we live in.",
          author: "Embellished Minds",
        },
      ],
      selectedPackages: [],
      shownDescription: null,

      courses: [
        {
          title: "Reading Possibilities 1",
          description:
            "Suitable for Kindergarten (5 years) years) through Year 6 (10 years) Covers Phonological Awareness, Phonics, Fluency, Vocabulary building and tests comprehension.",
          price: 250,
        },
        {
          title: "Reading Possibilities 2",
          description:
            "Also works as a booster program. Suitable for Year 6 (10 - 12 years) Focuses on development of grammar, listening skills, comprehension and word study.",
          price: 250,
        },
        {
          title: "Reading Possibilities 3",
          description:
            "Suitable for Year 9 (12 years and older even adults) Focuses on speed (eye movement), fluency, screening and scanning strategies, extensive reading, good for preparing Standardized tests e.g. SAT, IELTS etc.",
          price: 250
        }
      ],
    };
  },

  methods: {
    showDescriptionFor(i) {
      this.shownDescription = i;
    },

    hideDescription() {
      this.shownDescription = null;
    },

    toggleSelectedPackages(pkg) {
      if (this.selectedPackages.includes(pkg)) {
        this.selectedPackages.splice(this.selectedPackages.indexOf(pkg), 1);
      } else {
        this.selectedPackages.push(pkg);
      }
    },
  },
};
</script>


<style>
/* ----------------------------------------------
    * Generated by Animista
    * w: http://animista.net, t: @cssanimista
    * ---------------------------------------------- */

.slide-in-bottom {
  -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slide-in-bottom-h1 {
  -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    0.5s both;
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
}
.slide-in-bottom-subtitle {
  -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    0.75s both;
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.75s
    both;
}
.fade-in {
  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
}
.bounce-top-icons {
  -webkit-animation: bounce-top 0.9s 1s both;
  animation: bounce-top 0.9s 1s both;
}

@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@-webkit-keyframes bounce-top {
  0% {
    -webkit-transform: translateY(-45px);
    transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
    transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
@keyframes bounce-top {
  0% {
    -webkit-transform: translateY(-45px);
    transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
    transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.child-w-full {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

button {
  transition: all 0.2s ease-in;
}

button:hover {
  transform: translateY(-8px) translateX(-4px) scale(1.03);
}

.carousel-shell {
  height: 550px;
}

@media screen and (max-width: 600px){
  .carousel-shell {
    height: 250px;
  }
}
</style>