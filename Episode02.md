Npm is everything but not a node package manager.
Npmjs
 Npm Init
4, Webpack, parcel, vit , theses are the bundler, are,our whole code needs to be bundled, compressed, , clean, minified,cashed, before it can be sent to production. so that it can be shift to production.
Parcel npm install -D Parcel
6. difference betwwn ~ tild --- major version
and caret - minor version 
package json file - it contains all the dependency with their exact version number 

7. we should not put node modules on Prod. But we can put ,package json and package lock file on the prod. if we have thsi two file we can generate node modules .
8. run command npx parcel index.html , parcel created server for us. provided local host URL.
9. npm means you are installing are something, npz meand you are excuting packages 

#Parcel - 
local Server,
 Dev Build,
HMR - Hot Module Replacement 
file watching algorithm - Written in c++
Caching- Faster Builds
Image Optimization
Minification
Bundling
Compress
Consistency Hashing
Code Splitting
Differential Building - Support Older Brower
HTML
Tree Shaking

10. Parcel Documentation
11.  Production  build - npx parcel build index.html
12. Dev Build - npx parcel index.html
13. if the thing is automatically generated you dont need to put on github. dist , parcel chache we can put on gitignore file.

14. if we have code in our local storage. we push it to on github. in Server where we hosted our code.
Local storgae directly will not connect to server. we will push our code on githuh. and Server will fetch  our code from GitHub. and Hosted

15. We need to tell our code what brower we have to support to run the application .
16. Browserslist -   https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
the code will work of ther browersList also but
if we give the BrowerList configuration in our code it will defenitely work. 

type - last 2 chrome versions 
So many things which makes React Fast 
