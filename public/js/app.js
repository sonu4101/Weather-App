
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne=  document.querySelector('#message-1')
const messageTwo=  document.querySelector('#message-2')

messageOne.textContent = 'Loading....'
messageOne.textContent =  ''
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    fetch('http://localhost:3000/weather?address='+ location).then((response)=>{
    response.json().then((data)=>{
     if(data.error){
    //   console.log(data.error)
      messageOne.textContent = error
     }
     else{
        // console.log(data.location)
        // console.log(data.forecast)
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
     }
        
    })
})
})