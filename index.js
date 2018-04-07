const speedometer = document.querySelector(".speed")
const compassPointer = document.querySelector(".img")

const defaultData = {
    coords: {
        latitude: "85.3",
        longitude: "33.4",
        heading: 50
    }
}

navigator.geolocation.getCurrentPosition(updateCompassView, updateCompassView, {timeout: 5000})

function updateCompassView(data) {
    console.log(data)
    console.log("AYYYYY LMOA")
    if (!data.coords) {
        data = defaultData
    }
    
    let { latitude, longitude, heading } = data.coords

    heading = heading | Math.floor(Math.random() * 360)

    speedometer.textContent = `Lat: ${ formatCoordinate(latitude) }, Long: ${ formatCoordinate(longitude) }`
    compassPointer.style.transform = `rotate(${ heading }deg)`
}
function formatCoordinate(coordinate) {
    coordinate = String(coordinate)
    const hasDecimal = decimalIndex = coordinate.indexOf(".")

    if (hasDecimal) {
        return coordinate.substr(0, decimalIndex + 3)
    }

    return coordinate
}
// setInterval(getAndSetSpeedometersSpeed, 2000)