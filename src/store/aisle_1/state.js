import sampleData from '../../../sampleData.json'
// let newData = JSON.parse(sampleData)
// let dData = Object.keys()
console.log(sampleData.profile);

export default {
  // all:dData,
  profile: sampleData.profile.data.data,
  role: sampleData.role.data[0]
}
