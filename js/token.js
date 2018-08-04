const xhr = new XMLHttpRequest();
const clima = document.getElementById('icons-time');
let geocoder;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction);
    } 
//Get the latitude and the longitude;
function successFunction(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    codeLatLng(lat, lng)
}


const initialize = ()=>{
    geocoder = new google.maps.Geocoder();
}

const codeLatLng =(lat, lng)=>{
    let latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          console.log(results)
        return cloud(results[0].address_components[2].long_name)
      } 
    });
}

const Request = (method,url) => {
  let promise = new Promise((resolve,reject) => {
      xhr.open(method,url,true);
      xhr.onload = () => {
        if(xhr.status == 200){
          resolve(JSON.parse(xhr.responseText));
        }else{
          reject("Error");
        }
      }
      xhr.send();
  })
  return promise;
}

const cloud = (url)=>{
    Request('GET', `http://api.openweathermap.org/data/2.5/weather?q=${url}&units=metric&APPID=85d5f5109589833b2d4dd5c73fb7baa9`).then((res) => {
    if(res){
        time(res);
        }
        console.log(res)

    })

    const time = (response)=>{
        clima.innerHTML = `
            <span>T: ${response.main.temp}°  H: ${response.main.humidity}%
            </span>
            <i class="fas fa-cloud"></i>
            <p>${response.name}</p>       
        `
    }

}




