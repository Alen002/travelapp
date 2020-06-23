/* Trip within one week, then use current weather, data[0]
   Trip more than one week in future, then use the forecast, data[7]
   Trip more than sixteen days in the future, then use latest forecast from the API, data[15]  */
function forecast(data) {
    console.log('dateResult: ', data);
    let i = 0;
    if (data >= 0 && data <= 7) {
        i = 0;
    } else if (data > 7 && data < 16) {
        i = 7;
    } else if (data > 16) {
        i = 15;
    };
    return i;
};

export { forecast };