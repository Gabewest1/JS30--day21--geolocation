const speedometer = document.querySelector(".speed")
const compassPointer = document.querySelector(".img")

const defaultData = {
    coords: {
        latitude: "85.3",
        longitude: "33.4",
        heading: 50
    }
}

navigator.geolocation.getCurrentPosition((data = defaultData) => {
    console.log(data)
    console.log("AYYYYY LMOA")
    let { latitude, longitude, heading } = data.coords

    heading = heading | Math.floor(Math.random() * 360)

    speedometer.textContent = `Lat: ${ formatCoordinate(latitude) }, Long: ${ formatCoordinate(longitude) }`
    compassPointer.style.transform = `rotate(${ heading }deg)`
}, (err) => console.log(err), {timeout: 5000})

function formatCoordinate(coordinate) {
    coordinate = String(coordinate)
    const hasDecimal = decimalIndex = coordinate.indexOf(".")

    if (hasDecimal) {
        return coordinate.substr(0, decimalIndex + 3)
    }

    return coordinate
}
// setInterval(getAndSetSpeedometersSpeed, 2000)