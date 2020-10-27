import axios from "axios";
// 1231123143242342
export async function role({ commit }){
  axios
    .get('https://5f97072911ab98001603b6c7.mockapi.io/api/role')
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
    .get('https://5f97072911ab98001603b6c7.mockapi.io/api/profile')
      .then(response => {
        commit('profile', response.data.data.data)
        localStorage.setItem('profile', JSON.stringify(response.data.data.data))
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

