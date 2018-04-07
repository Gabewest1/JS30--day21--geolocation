const speedometer = document.querySelector(".speed")

navigator.geolocation.watchPosition((data) => {
    console.log(data)
    speedometer.textContent = data
})