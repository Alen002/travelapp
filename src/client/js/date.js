function date(date) {
    const currentTime = new Date()
    console.log('current day:', currentTime.getDate());
    console.log('current month:', currentTime.getMonth() + 1);
    console.log('current year:', currentTime.getFullYear());
    
    const oneDay = 24 * 60 * 60 * 1000; 
    let dateArray = date.split('');
    console.log(dateArray);
    let actualYear  = dateArray.slice(0, 4).map((x) =>parseInt(x)).join('');
    let actualDay  = dateArray.slice(8, 10).map((x) =>parseInt(x)).join('');
    // convert for instance 06 into 6 
    let actualMonth = dateArray.slice(5,7)
    if (actualMonth[0] == 0) {
        actualMonth = actualMonth[1];
    } else {
        actualMonth = actualMonth.map((y) =>parseInt(y)).join('');
    };

    console.log('year schedule: ', actualYear);
    console.log('day schedule: ', actualDay);
    console.log('month schedule: ', actualMonth);

    const travelDate = new Date(actualYear, actualMonth, actualDay); 
    const actualDate = new Date(currentTime.getFullYear(),currentTime.getMonth() + 1, currentTime.getDate());

    const diffDays = Math.round(Math.abs((travelDate - actualDate) / oneDay));
    console.log('Days diff actual s. planned: ',diffDays);
    const departure = document.getElementById('city-date').value;
    document.getElementById('info-departure').innerHTML = `Departing: ${departure}`;
    

    return diffDays;
};

export { date };