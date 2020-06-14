function date() {
    const currentTime = new Date()
    alert(`Today's date is:` + currentTime);
    console.log('day:', currentTime.getDate());
    console.log('month:', currentTime.getMonth() + 1);
    console.log('year:', currentTime.getFullYear());

    const oneDay = 24 * 60 * 60 * 1000; 
    const travelDate = new Date(2020, 7, 14);
    const actualDate = new Date(currentTime.getFullYear(),currentTime.getMonth() + 1, currentTime.getDate() );

    const diffDays = Math.round(Math.abs((travelDate - actualDate) / oneDay));
    console.log(diffDays);
};

export { date };