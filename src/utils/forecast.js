const request = require("request")

const forecast =(latitude,longitude,callback) =>{
const url = 'http://api.weatherapi.com/v1/current.json?key=da5ed8717d1f4a6d89680707231408&q=' + latitude +',' + longitude +'&aqi=no'
request({url,json:true},(error,{body})=>{  //only using body of the response
    if(error){
        callback('Unable to connect to weather server',undefined)
    }
    else if(body.error){  
        callback('Unable to find location!',undefined)
    }
    else{
        callback(undefined,
            body.current.condition.text + '. It is currently ' +  body.current.temp_c  + ' degrees out. There is a ' + body.current.cloud + ' percentage chances of rain.')
            
        
    }
})

}
module.exports=forecast