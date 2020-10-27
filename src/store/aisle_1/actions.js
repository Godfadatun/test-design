import axios from "axios";
// 1231123143242342
export async function role({ commit }){
  axios
    .get(process.env.VUE_APP_MY_API+'role')
      .then(response => {
        commit('role', response.data.data)
        localStorage.setItem('role', JSON.stringify(response.data.data))
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

export async function profile({ commit }){
  axios
    .get(process.env.VUE_APP_MY_API+'profile')
      .then(response => {
        commit('profile', response.data.data.data)
        localStorage.setItem('profile', JSON.stringify(response.data.data.data))
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

