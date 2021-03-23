const request = new XMLHttpRequest()




function draw(data){
  var newDiv=document.createElement("div")
  var newContent=document.createTextNode(`Tittel: ${data.title}`)
  newDiv.appendChild(newContent)
  document.body.appendChild(newDiv)
}



request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function(){
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      data.forEach((movie) => {
        draw(movie)
        console.log(movie)
      })
    } else {
      console.log('error')
    }
}

request.send()