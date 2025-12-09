function checkCityCount(data, city) {
    let count = 0
    data.forEach((d) => {
        if (d.city.toUpperCase() === city.toUpperCase()) {
            count++
        }
    })

    return count;
}

export default checkCityCount;

 

module.exports = checkCityCount;