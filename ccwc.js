#!/usr/bin/env node        
console.log("Script started");




const fs=require("fs");

const args=process.argv;

const flags={
    line:args.includes("-l"),
    word:args.includes("-w"),
    char:args.includes("-c"),
}

let filename =args[args.length-1];

fs.readFile(filename,"utf-8",(err,file)=>{
    if(err){
        console.log("there was some error",err);
        return;
    };
    let lineCount=file.split("\n").length;
    let wordCount=file.split(/\s+/).filter(word=>word).length;
    let charCount=file.length;
    if(!flags.line && !flags.word && !flags.char){
        console.log(`${lineCount} ---- ${wordCount} ---- ${charCount}`);
        
    }else{
        if(flags.line){
            console.log(lineCount);
            
        }
        else if(flags.word){
            console.log(wordCount);
            
        }else if(flags.char){
            console.log(charCount);
            
        }
    }
    
})