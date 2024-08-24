import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import fs from 'fs'


cloudinary.config({ 
    cloud_name:  process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret:  process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async(localFilePath) =>{
    try {
        if(!localFilePath) return null
        // Upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath);
        //  file has been uploaded successfully for checking purpose
        console.log("File is iploaded on cludonary ",response.url);
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath)   // remove the locally saved temporary file as the upload operation got failed.
        return null;
    }
}


export {uploadOnCloudinary}
