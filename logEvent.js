const { format } = require('date-fns')
const { v4:uuid } = require('uuid')

const path= require('path')
const fs= require('fs')
const fsPromises = require('fs').promises

const logEvents = async (message,logname) =>{
    const dateitem = `${format(new Date(),'yyyyMMdd\tHH::mm:ss')}`
    const logItem=`${dateitem}\t${uuid()}\t${message}\n`
    console.log(logItem)
    try {
        if(!fs.existsSync('./log')){
         await  fsPromises.mkdir(path.join(__dirname,'log'))
        }
        await fsPromises.appendFile(path.join(__dirname,'log',logname),logItem)

    }catch(err){
        console.log(err)
    }
}

module.exports ={logEvents}