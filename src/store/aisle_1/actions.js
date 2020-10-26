import axios from "axios";
// 1231123143242342

export async function outbound ({ commit },dataBody){
  console.log('dataBody: ', dataBody)
  // axios
  await axios({
    method: "POST",
    url: `https://echo.apps.verygood.systems/post`,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
    data: dataBody,
    proxy:{
      host: 'https://tnt2nazfvoz.sandbox.verygoodproxy.com',
      port: 8080,
      auth: {
        username: 'USkfTCUojnk8E9wttNoAazZD',
        password: 'd469c9c7-2e3a-4105-85b0-f5f71c6351ef'
      }
    },
    // data: req.body,
    // headers: { Accept: "application/json" },
  })
    // .get(process.env.VUE_APP_MY_API+'carosel-control')
      .then(response => {
        console.log('carosel_control', response.data)
        commit('carreer_header', response.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}


// SINGLE TYPE ENDPOINTS
export async function carosel_control ({ commit }){
  axios
    .get(process.env.VUE_APP_MY_API+'carosel-control')
      .then(response => {
        commit('carosel_control', response.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

export async function carreer_header ({ commit }){
  axios
    .get(process.env.VUE_APP_MY_API+'carreer-header')
      .then(response => {
        commit('carreer_header', response.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

export async function blog_heads ({ commit }){
  axios
    .get(process.env.VUE_APP_MY_API+'blog-heads')
      .then(response => {
        commit('blog_heads', response.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

export async function help_header ({ commit }){
  axios
    .get(process.env.VUE_APP_MY_API+'help-header')
      .then(response => {
        console.log(response.data.results)
        commit('help_header', response.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}


export async function security_header ({ commit }){
  axios
    .get(process.env.VUE_APP_MY_API+'security-header')
      .then(response => {
        commit('security_header', response.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })

}

export async function footer({ commit }){
  axios.get(process.env.VUE_APP_MY_API+'footer')
   .then(response => {
    commit('footer', response.data.data)
  })
  .catch(error=>{
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  })
}

export async function strip({ commit }){
  axios.get(process.env.VUE_APP_MY_API+'strip')
   .then(response => {
     console.log(response.data.data);
    commit('strip', response.data.data)
  })
  .catch(error=>{
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  })
}

export async function strip2({ commit }){
  axios.get(process.env.VUE_APP_MY_API+'strip-2')
   .then(response => {
     console.log(response.data.data);
    commit('strip2', response.data.data)
  })
  .catch(error=>{
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  })
}


// COLLECTION TYPE ENDPOINTS
export async function blog_snipets ({ commit }){
  axios
    .get(process.env.VUE_APP_MY_API+'blog-snipets')
      .then(response => {
        commit('blog_snipets', response.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

export async function carosels ({ commit }){
  axios
    .get(process.env.VUE_APP_MY_API+'carosels')
      .then(response => {
        commit('carosels', response.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

export async function help_expansion ({ commit }){
  axios
    .get(process.env.VUE_APP_MY_API+'help-expansion')
      .then(response => {
        commit('help_expansion', response.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

export async function privacy_cards ({ commit }){
  axios
    .get(process.env.VUE_APP_MY_API+'privacy-cards')
      .then(response => {
        console.log(response.data.results)
        commit('privacy_cards', response.data)
      })
    .catch(err=>{
      console.log('err: ', err)
    })
}

// export async function chargeCardAndVerifyTransaction ({commit, state}) {

//   console.log(state.user.results)
//   commit('sending')

//   try {
//       let res = await axios.post('https://api.paystack.co/charge', {
//           email: state.user.email,
//           amount: '5000',
//           card: {
//               number: state.user.card_number.toString(),
//               cvv: state.user.cvv.toString(),
//               expiry_month: state.user.exp_date.split('/')[0].toString(),
//               expiry_year: state.user.exp_date.split('/')[1].toString()
//           }

//       }, {
//           headers: {
//               'Authorization': 'Bearer sk_live_9bcc0182bd0ddf726b1e17f3a4ff7f714a74195c',
//               'Content-Type': 'application/json'
//           }
//       })

//       if (res.status === false) {
//           console.log('Failed with flying colors')
//           commit('fail')
//           return
//       }

//       await axios.get('https://api.paystack.co/transaction/verify/' + res.data.data.reference, {
//           headers: {
//               'Authorization': 'Bearer sk_live_9bcc0182bd0ddf726b1e17f3a4ff7f714a74195c'
//           }
//       })
//       .then(response => {
//           console.log(response)

//           if (response.status === 200) {
//               commit('authCard')
//               // console.log(state.user.results.formattedNumber)

//               axios.post('https://pass-shop.herokuapp.com/api/v1/auth/signup', {
//                   firstName: state.user.first_name,
//                   lastName: state.user.last_name,
//                   email: state.user.email,
//                   phoneNumber: state.user.phone,
//                   deliveryAddress: state.user.delivery_address,
//                   cardNumber: state.user.card_number,
//                   CVV: state.user.cvv,
//                   month: response.data.data.authorization.exp_month,
//                   year: response.data.data.authorization.exp_year,
//                   authorizationCode: response.data.data.authorization.authorization_code,
//                   id: response.data.data.id
//               })
//               .then(resp => {
//                   console.log(resp)

//                   commit('done')
//               }).catch(
//                   err => {
//                       console.log(err)
//                       commit('fail')
//                   }

//               )
//           }
//       }).catch(
//           err => console.log(err)
//       )

//   } catch (e) {
//       commit('fail')
//       console.log('Mumu failure', e)
//   }

// }

