import * as util from './util.js'

setInterval(() => {

    // Getting time data from date object....
    let date = new Date();
    let hour = date.getHours();
    hour = (hour < 10) ? '0' + hour : hour;
    let minute = date.getMinutes();
    minute = (minute < 10) ? '0' + minute : minute;
    let sec = date.getSeconds();
    sec = (sec < 10) ? '0' + sec : sec;
    let fulldate = date.toDateString();
    let day;
    let week;

    const dead_line = {
        month: 6,
        day: 24
    }
    const days_of_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // Utility Functions.....
    let updateDigital = () => {
        hour = 24 - hour
        minute = 60 - minute
        sec = 60 - sec

        if (dead_line.month == date.getMonth() + 1) {
            week = Math.floor((dead_line.day - date.getDate()) / 7)
            day = (dead_line.day - date.getDate()) % 7
        } else {
            // logic is not completed here will work only for back to back two months....
            week = Math.floor((days_of_month[date.getMonth()] - date.getDate() + dead_line.day) / 7)
            day = (days_of_month[date.getMonth()] - date.getDate() + dead_line.day) % 7
        }
        let hour_left = util.eleID('reamin_hr')
        let minute_left = util.eleID('reamin_min')
        let sec_left = util.eleID('reamin_sec')
        let days_left = util.eleID('reamin_days')
        let weeks_left = util.eleID('reamin_week')

        hour_left.innerText = hour
        minute_left.innerText = minute
        sec_left.innerText = sec
        days_left.innerText = day
        weeks_left.innerText = week

        // console.log(hour+':'+minute+':'+sec)
        // d_time.innerHTML = hour + ':' + minute + ':' + sec;

    }



    //Updating the clocks...
    updateDigital();

});