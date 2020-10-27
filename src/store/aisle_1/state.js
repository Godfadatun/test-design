// import sampleData from '../../../sampleData.json'
// localStorage.setItem('sampleData', JSON.stringify(sampleData))

export default {
  // all:dData,
  // profile: sampleData.profile.data.data || JSON.parse(localStorage.getItem('sampleData')).profile.data.data,
  // role: sampleData.role.data[0] || JSON.parse(localStorage.getItem('sampleData')).role.data[0]
  // profile: sampleData.profile.data.data || JSON.parse(localStorage.getItem('sampleData')).profile.data.data,
  // role:  JSON.parse(localStorage.getItem('sampleData')).role.data[0]
  // profile: JSON.parse(localStorage.getItem('profile')).data.data,
  // role:  JSON.parse(localStorage.getItem('role')).data[0]
  profile:{} || JSON.parse(localStorage.getItem('profile')).data.data,
  role:{} || JSON.parse(localStorage.getItem('role')).data[0]
}
