function timeConvertor(time) {
    var PM = time.match('PM') ? true : false
    
    time = time.split(':')
    var min = time[1]
    
    if (PM) {
        var hour = 12 + parseInt(time[0],10)
        var sec = time[2].replace('PM', '')
    } else {
        var hour = time[0]
        var sec = time[2].replace('AM', '')       
    }
    
    console.log(hour + ':' + min + ':' + sec)
}

timeConvertor('7:03:15PM'); // "19:03:15"

timeConvertor('1:53:55AM'); // "1:53:55"