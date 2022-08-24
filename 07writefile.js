let fs = require('fs')

let message = 'I am scheduled to fly to Pluto tomorrow using the new file at the speed of light! See you all from Pluto by end of the day! Tomorrows good night will be from Pluto!'

fs.writeFile("flymetopluto.txt", message, (error)=>{
    if(error){
        throw error
    }

    console.log("file write is success!")
})