import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path/posix';

/* the file fields are picture and resume */

// provides the absolute URL of the current module file, enabling context-specific operations like resolving relative paths,
// allows for reliable relative file loading 
// here, for a small app, saving locally, use file storage(eg. amazon s3 for prod apps)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/* FILE STORAGE */
const storage = multer.diskStorage({
  // here instead of public/assets you can set the destination to your db address or maybe cloud storage too
    destination: (req,file,cb) => {
        if(file.fieldname === "resume"){
            cb(null, "public/assets/pdfs/");
        } else {
            cb(null, "public/assets/images/");
        }   
    },
    filename: (req,file,cb) => {
        cb(null,Date.now()+"-"+file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
  if (file.fieldname === "resume") { // if uploading resume
    if (
      file.mimetype === 'application/pdf' ||
      file.mimetype === 'application/msword' ||
      file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) { // check file type to be pdf, doc, or docx
      cb(null, true);
    } else {
      cb(null, false); // else fails
    }
  } else { // else uploading image
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) { // check file type to be png, jpeg, or jpg
      cb(null, true);
    } else {
      cb(null, false); // else fails
    }
  }
};

const upload = multer({storage,limits:5*1024*1024, fileFilter}).fields([{name:"picture", maxCount:1},{name:"resume", maxCount: 1}]);
const uploadCompany = multer({storage,limits:5*1024*1024, fileFilter}).single("picture");

export { upload, uploadCompany };