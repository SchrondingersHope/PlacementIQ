This is how the app was set-up:
1) Create root folder: git init
-- add dist, .env and node_modules to .gitignore

2) Create frontend folder: npm create vite@latest frontendFolder
*) npm install   ( install all dependencies )
*) npm run dev

3) Create backend folder: npm init -y 
-- install all dependencies such as express body-parser bcrypt dotenv cors mongoose nodemon jsonwebtoken multer etc etc

// gridfs-stream for files larger than 16mb, allows bigger files and streaming lol. Also add multer-gridfs-storage
// helmet: ensures req safety and security, morgan: logging, 
//multer: multipart/form-data

4) In root, *) git add .  *) git commit -m "commitmsg" 

-) To run frontend, npm run dev, 
-) To run backend, node/nodemon backendIndexFile.js