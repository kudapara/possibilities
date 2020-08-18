console.log('recognisiing the store.js')
export const state = () => ({
  account: {
    name: '',
    phoneNumber: '',
    email: '',
    children: [
      // {
      //   name: "",
      //   grade: "6",
      // },
    ],
    courses: [
      // "5f3afe8b3a3a030007883674"
    ]
  }
})

export const mutations = {
  addToCart(state, payload) {
    state.account.courses.push(course)
  }
}