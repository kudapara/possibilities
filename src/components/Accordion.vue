<style>
/* Tab content - closed */
.tab-content {
  max-height: 0;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}
/* :checked - resize to full height */
.tab input:checked ~ .tab-content {
  max-height: 100vh;
}
/* Label formatting when open */
.tab input:checked + label {
  /*@apply text-xl p-5 border-l-8 border-yellow-brand bg-gray-100 text-indigo*/
  font-size: 1.25rem; /*.text-xl*/
  padding: 1.25rem; /*.p-5*/
  border-left-width: 0.5rem; /*.border-l-8*/
  border-color: #fdd231; /*.border-indigo*/
  background-color: #f8fafc; /*.bg-gray-100 */
  color: #000; /*.text-indigo*/
}
/* Icon */
.tab label::after {
  float: right;
  right: 0;
  top: 0;
  display: block;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.5;
  font-size: 1.25rem;
  text-align: center;
  -webkit-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
}
/* Icon formatting - closed */
.tab input[type="checkbox"] + label::after {
  content: "+";
  font-weight: bold; /*.font-bold*/
  border-width: 1px; /*.border*/
  border-radius: 9999px; /*.rounded-full */
  border-color: #b8c2cc; /*.border-grey*/
}
.tab input[type="radio"] + label::after {
  content: "\25BE";
  font-weight: bold; /*.font-bold*/
  border-width: 1px; /*.border*/
  border-radius: 9999px; /*.rounded-full */
  border-color: #b8c2cc; /*.border-grey*/
}
/* Icon formatting - open */
.tab input[type="checkbox"]:checked + label::after {
  transform: rotate(315deg);
  background-color: #000; /*.bg-indigo*/
  color: #f8fafc; /*.text-grey-lightest*/
}
.tab input[type="radio"]:checked + label::after {
  transform: rotateX(180deg);
  background-color: #fff; /*.bg-indigo*/
  border-color: #fff;
  color: #f8fafc; /*.text-grey-lightest*/
  display: hidden;
  /* hide the toggle from plain sight */
}
</style>
<template>
  <div>
    <div class="w-full md:w-3/5 mx-auto p-8">
      <p class="font-black text-5xl mb-16">
       {{ title }}
      </p>
      <div class="shadow-md">
        <div 
          v-for="(item, i) in items" :key="i"
          class="tab w-full overflow-hidden border-t bg-white text-black mb-8">

          <input class="absolute opacity-0"
           v-model="openFAQ" :value="i" :id="`tab-single-${i}`" type="radio" name="tabs2" />
          <label class="block p-5 leading-normal cursor-pointer font-bold" :for="`tab-single-${i}`">{{ item.title }}
            
          </label>
          <div
            class="tab-content overflow-hidden border-l-8 bg-gray-100 border-yellow-brand leading-normal"
          >
            <div
              class="p-5"
              v-html="paragraphExtractor(item.description)"
            >{{ item.description }}</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

   <script>
/* Optional Javascript to close the radio button version by clicking it again */
// var myRadios = document.getElementsByName("tabs2");
// var setCheck;
// var x = 0;
// for (x = 0; x < myRadios.length; x++) {
//   myRadios[x].onclick = function() {
//     alert('checked')
//     if (setCheck != this) {
//       setCheck = this;
//     } else {
//       this.checked = false;
//       setCheck = null;
//     }
//   };
// }
export default {
  props: ['items', 'title'],
  data () {
    return {
      openFAQ: 0
    }
  },
  methods: {
        paragraphExtractor (text) {
      return text
        .split('\n')
        .map(p => `<p class="mb-4">${p}</p>`)
        .join('')
    },

  }
};
</script>
</html>