require("dotenv").config();

const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(fileBuffer, fileName = "image.jpg") {
  if (!fileBuffer) {
    throw new Error("No file buffer provided for upload.");
  }

  const file = await toFile(fileBuffer, fileName);
  const result = await imagekit.files.upload({
    file,
    fileName,
  });

  return result;
}

module.exports = uploadFile;
