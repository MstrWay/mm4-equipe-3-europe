window.addEventListener('DOMContentLoaded', () => {

    const finalDate = new Date('2019-05-26T20:00:00')
    const updateCountdown = () => {
        const date = new Date()
        const countdown = new Date(+finalDate - +date)
        const [days, hours, minutes, seconds] = [countdown.getUTCDate(), countdown.getUTCHours(), countdown.getUTCMinutes(), countdown.getUTCSeconds()]
        document.querySelector('#countdown_day').innerHTML = days.toString().padStart(2, '0')
        document.querySelector('#countdown_hour').innerHTML = hours.toString().padStart(2, '0')
        document.querySelector('#countdown_min').innerHTML = minutes.toString().padStart(2, '0')
        document.querySelector('#countdown_sec').innerHTML = seconds.toString().padStart(2, '0')

    }

    setInterval(updateCountdown, 1000)
})