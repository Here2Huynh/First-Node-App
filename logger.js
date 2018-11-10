// module wrapper function, this is what the function that runs the module looks like
// (function (exports, require, module, __filename, __dirname) {

//     console.log(__filename)
//     console.log(__dirname)
//     var url = 'http://mylogger.io/log'

//     function log (message) {
//         // send an HTTP request
//         console.log(message)
//     }

//     module.exports = log  // makes this function public 


 

// })



// console.log(__filename)
// console.log(__dirname)

var url = 'http://mylogger.io/log'

const EventEmitter = require('events') 

class Logger extends EventEmitter {
    log (message) {
        // send an HTTP request
        console.log(message)
    
        // raise event
        this.emit('logging', { id: 1, url: 'http://'})
    }
}



module.exports = Logger  // makes this function public 


