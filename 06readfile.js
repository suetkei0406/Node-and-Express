//fs is the package needed for basic file interaction
let fs = require('fs')


fs.readFile("myfile.txt", (error, data)=>{
    if(error){
        throw error
    }
    console.log("file read is success...");
    console.log("Be default, all data will be a hexadecimal code")
    console.log("contents of the file is as below: ");
    console.log(data)
    console.log("convert hexadecimal content to readable format.");
    console.log(data)
    console.log("convert hexadecimal content to readable format:")
    console.log(data.toString())
})