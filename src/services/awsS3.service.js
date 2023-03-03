const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");

const BucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_KEY_ID;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

class AwsS3Service {
  //upload file to s3
  async uploadFile(file, bucketName = BucketName) {
    console.log('file',file);
    // const fileStream = fs.readFileSync(file.path);
    // if(!fileStream) throw new MyError("File not exists");

    const uploadParams = {
      Bucket: bucketName,
      Body: file,
      Key: `cinema_${Date.now()}_${file.name}`,
    };

    const { type } = file;
    if (
      type === "image/jpeg" ||
      type === "image/png" ||
      type === "image/gif" ||
      type === "video/mp3" ||
      type === "video/mp4" ||
      type === "video/x-ms-wmv"
    )
      uploadParams.ContentType = type;

    try {
      const result = await s3.upload(uploadParams).promise();
      return result.Location;
    } catch (error) {
      console.log(error);
        throw Error(error,'Error in upload file to s3');
    
    }
  }

  //delete file in s3
  // static async deleteFile(key) {
  //     if (!key) throw new MyError('Key not exists');

  //     const deleteParams = {
  //         Bucket: bucketName,
  //         Key: key,
  //     };

  //     const result = await s3.deleteObject(deleteParams).promise();

  //     return result;
  // }
}

module.exports = new AwsS3Service();