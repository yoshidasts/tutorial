## How to Use
1. Download this project to your local computer
2. Download depended libraries using `npm install` on the project folder.
3. Run the programm with `npm start`.
4. Access to `http://localhost:3000/`.

## How I did create this project
1. Command `exopress tutorial -e`. `-e` option means "Use EJS as a view engine".
2. Add "express-session" library to the project. `npm install express-session --save".
3. Add codes to handle session.
4. Create input form to `views/index.ejs`.
5. Create confirm page to `views/confirm.ejs`.
6. Create complete page to `views/complete.ejs`.
7. Create `model` folder which is stored business logic modules.
8. Implement `model/user.js` which register user data to databse.
9. Implement `/` logic on `route/index.js`.
10. Implement `/confirm` logic on `route/index.js`.
11. Implement `/complete` logic on `route/index.js`.


