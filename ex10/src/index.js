function myFunction() {
var myMusic = {
    001: {
        artist: "Billy Joel",
        title: "Piano Man",
        release_year: 1973,
        formats: {
            1: "CD",
            2: "8T",
            3: "LP"
        },
        gold: true 
    },

    002: {
        artist: "Eminem",
        title: "The Slim Shady",
        release_year: 1999,
        formats: {
            1: "CD",
            2: "LP",
            3: "Cassette"
    },
 
},
};
return myMusic;
}
myFunction()[1];
console.log(myFunction()[1]);
module.exports = myFunction;