const fstream = require("fs");
fstream.writeFile("secondfile.txt","Hii",(error)=>{
    if (error) throw error;
   console.log("File Sucessfully Written")
})
fstream.readFile("secondfile.txt","utf-8",(error,data)=>{
    if (error) throw error;
    console.log(data)
})