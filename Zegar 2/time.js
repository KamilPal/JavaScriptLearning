const locations = document.querySelectorAll("section.times div")

const updateTimes = function (){
    locations.forEach(location => {
        const output = location.querySelector("output")
        const timezone = location.getAttribute("data-timezone")

        const now = luxon.DateTime.now().setZone(timezone)

        output.innerHTML = now.toFormat("HH:mm:ss")

        const hour = parseInt(now.toFormat("H"))

        if (hour >= 6 && hour <= 18) {
            location.classList.add("day");
            location.classList.remove("night");
        } else {
            location.classList.add("night");
            location.classList.remove("day");
        }
    })
}

updateTimes()

setInterval(function () {
    updateTimes()
},1000)