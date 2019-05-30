class Booking {
  constructor(data) {
    this.data = data
  }

  findByDate(date) {
    return this.data.filter(dayObj => dayObj.date === date)
  }

  findById(id) {
    return this.data.filter(dayObj => dayObj.userID === id)
  }

  getTotalByDate() {
    return this.data.reduce(function(acc, day) {
      !acc[day.date] ? acc[day.date] = 1 : acc[day.date]++
      return acc
    }, {})
  }

  mostPopularDate() {
    let days = this.getTotalByDate()
    let maxDays = Math.max(...Object.values(days))
    return Object.keys(days).find(day => days[day] === maxDays)
  }
}

export default Booking;