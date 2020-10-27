// import sampleData from '../../../sampleData.json'
// localStorage.setItem('sampleData', JSON.stringify(sampleData))
export default {
  profile:{} || JSON.parse(localStorage.getItem('profile')).data.data,
  role:{} || JSON.parse(localStorage.getItem('role')).data[0]
}
