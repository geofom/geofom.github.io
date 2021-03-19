const request = new XMLHttpRequest()

request.open("GET", "https://binaryjazz.us/wp-json/genrenator/v1/story/", true)

request.onload = function(){
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      data.forEach((movie) => {
        console.log(movie)
      })
    } else {
      console.log('error')
    }
}

request.send()