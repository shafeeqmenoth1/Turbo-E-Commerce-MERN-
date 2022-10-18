
const fs = require('fs');

// multer Config 





module.exports = async function(req,res,next){
    try {

        if(!req.files || Object.keys(req.files).length === 0)
            return res.status(400).json({message:"No files were uploaded."});

            const file = req.file
            console.log(file);
            if(file.size > 1024 * 1024){
                removeTmp(file.tempFilePath)
                return res.status(400).json({message:"Size is too large."});
            }

            if(file.mimetype  !== 'image/png' && file.mimetype !== 'image/jpeg'){
                removeTmp(file.tempFilePath)
                return res.status(400).json({message:"File format is not supported"});
            }
        next()
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

const removeTmp = (path)=>{
    fs.unlink(path,err =>{
        if(err) throw err
    })
}