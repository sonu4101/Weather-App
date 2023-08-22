const request = require('request')
const geocode= (address,callback)=>{
    const url ='http://api.openweathermap.org/geo/1.0/direct?q=' + (address) +'&limit=1&appid=7ba4fd48c50caf7c9af7171a8a02e68b'
    request({url,json:true},(error,{body})=>{
     if(error){
        callback('Unable to connect to location services!',undefined)
     }
     else if(body.length===0){
        callback('Oops!!Unable to find the co-ordinates. Try another Search.',undefined)
     }
     else{
        callback(undefined,{
          latitude:  body[0].lat,
          longitude: body[0].lon,
          location:  body[0].name
        })
     }
    })
    }
    module.exports = geocode