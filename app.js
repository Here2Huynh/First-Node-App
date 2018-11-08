
// function sayHello (name) {
//     console.log('Hello ' + name)
// }

// // sayHello('John')

// var fs = require('fs')


// console.log() // global

// setTimeout()
// clearTimeout()


// setInterval() // repeatedly  call function after a delay
// clearInterval() // stop above 


// console.log === window.console.log  
// js prefixes it automatically 

// var message = 'test'

// global.message

// // everything above is is accessible by the global obj 

// console.log(global.message) // will be undefined, it is scoped to this file due to node's module system 

// var sayHello = function() {

// }

// window.sayHello()

// every node app has a main module 

// console.log(module)

// in node, every file is a module, var and func are scoped on that module 

// const log = require('./logger')


// log('message')

const path = require('path')

var pathObj = path.parse(__filename)

// console.log(pathObj)



const os = require('os')

var uptime = os.uptime()
var totalMemory = os.totalmem()
var freeMemory = os.freemem()
var platform = os.platform()
var type = os.type()

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)
console.log(`Platform: ${platform}`)
console.log(`Type: ${type}`)