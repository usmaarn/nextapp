const fecha = require('fecha');

function format(date, format='YYYY-MM-DD hh:mm:ss') {
    return fecha.format(date, format)
}

function parse(date, format='YYYY-MM-DD hh:mm:ss'){
    return fecha.parse(date, format)
}


export default {format, parse}