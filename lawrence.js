class musicCompetition {
    numberOfMusic = 10000;
    artist = ["Davido", "Asake", "Burna-Boy"];
    numberOfStudio = 1000;
    popularArtistOfTheYear = 'Asake'
    musicOfTheYear = 'Joha'
    numberOfFans = 20000000000;

    static secondPosition = 'Burna-Boy'
    // static bangerOfTheYear = 'common person' 

    writtenBy() {
        console.log("Lawrence The common person")
    }

    // Adding displaying features to our code, so that it can display our over written code on the console;
    displayself() {
        console.log(this);
    }
    displaynumberOfMusic() {
        console.log(this.numberOfMusic);

    }
    displayartist() {
        console.log(this.artist);
    }

    displaynumberOfStudio() {
        console.log(this.numberOfStudio);
    }
    displaypopularArtistOfTheYear() {
        console.log(this.popularArtistOfTheYear);
    }
    displaymusicOfTheYear() {
        console.log(this.musicOfTheYear);
    }
    displaynumberOfFans() {
        console.log(this.numberOfFans);
    }
    // Trying to re-write the static component
    // displaysecondPosition(){
    //     console.log(secondPosition);
    // }



}
const musicEp = new musicCompetition()



console.log(musicCompetition, musicEp);
musicEp.numberOfMusic = 50000000;

musicEp.artist = 100;

musicEp.numberOfStudio = 500;

musicEp.popularArtistOfTheYear = 'Davido'

musicEp.musicOfTheYear = 'Electricity'

musicEp.numberOfFans = 10000000000000;


// musicEp.writtenBy();
musicEp.displaynumberOfMusic();
musicEp.displayartist();
musicEp.displaynumberOfStudio();
musicEp.displaypopularArtistOfTheYear();
musicEp.displaymusicOfTheYear();
musicEp.displaynumberOfFans();

// Lets Us Access our Statics


// musicCompetition.accessStatic();
// musicCompetition.displaysecondPosition();