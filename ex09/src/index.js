function myFunction(myObj, checkProp) {
    //

   var mySong = {
    
    title: "Titanic", 
    song: "My Heart Will Go On",
    genere: "Drama"

   };

   mySong.hasOwnProperty("title");
   mySong.hasOwnProperty("song");
   mySong.hasOwnProperty("genere");
   mySong.hasOwnProperty("actor");
   return "Not Found";

}

module.exports = myFunction;