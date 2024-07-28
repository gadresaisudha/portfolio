Steps to host your website on github:
first create repository and push all the changes
now on terminal >>>> npm install gh-pages --save-dev
Then in package.json add: ---ur username along with repository
 "homepage": "https://gadresaisudha.github.io/my-portfolio ",
 under scripts add this:
 "predeploy": "npm run build",
 "deploy" : "gh-pages -d build",
After this commit all changes and push it to the repository
Finally run the command on terminal >>> npm run deploy
You can go to repository of github webiste and check that you have two branches master and gh-pages
when you run npm run deploy it creates version of our github repository to be hosted publicly
Now go to github into your repository then go to settings