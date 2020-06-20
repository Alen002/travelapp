function date(date) {
    const currentTime = new Date()
    console.log('current day:', currentTime.getDate());
    console.log('current month:', currentTime.getMonth() + 1);
    console.log('current year:', currentTime.getFullYear());
    
    const oneDay = 24 * 60 * 60 * 1000; 
    let dateArray = date.split('');
    console.log(dateArray);
    /* let year = dateArray.splice(0,4); */
    let actualYear  = dateArray.slice(0, 4).map((x) =>parseInt(x)).join('');
    let actualDay  = dateArray.slice(8, 10).map((x) =>parseInt(x)).join('');
    let actualMonth  = dateArray.slice(6).map((y) =>parseInt(y)).join('');
 
    console.log('year schedule: ', actualYear);
    console.log('day schedule: ', actualDay);
    console.log('month schedule: ', actualMonth);

    const travelDate = new Date(actualYear, 7, 15); // Format issues
    const actualDate = new Date(currentTime.getFullYear(),currentTime.getMonth() + 1, currentTime.getDate());

    const diffDays = Math.round(Math.abs((travelDate - actualDate) / oneDay));
    console.log(diffDays);
    return diffDays;
};

export { date };