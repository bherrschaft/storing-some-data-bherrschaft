// An object representing a photo slideshow.
const photoSlideShow = {
    // An array containing the list of photo filenames.
    photoList: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'],
    // A variable to track the current index of the photo being shown.
    currentPhotoIndex: 0,
    
    // Method to go to the next photo in the slideshow.
    nextPhoto() {
        // Check if the current photo index is less than the last index in the photoList.
        if (this.currentPhotoIndex < this.photoList.length - 1) {
            // Increment the current photo index.
            this.currentPhotoIndex++;
            // Log the current photo to the console.
            console.log(this.getCurrentPhoto());
        } else {
            // If at the last photo, log "End of slideshow" to the console.
            console.log("End of slideshow");
        }
    },
    
    // Method to go to the previous photo in the slideshow.
    prevPhoto() {
        // Check if the current photo index is greater than 0.
        if (this.currentPhotoIndex > 0) {
            // Decrement the current photo index.
            this.currentPhotoIndex--;
            // Log the current photo to the console.
            console.log(this.getCurrentPhoto());
        } else {
            // If at the first photo, log "Beginning of slideshow" to the console.
            console.log("Beginning of slideshow");
        }
    },
    
    // Method to get the current photo being shown.
    getCurrentPhoto() {
        // Return the photo at the current photo index from the photoList array.
        return this.photoList[this.currentPhotoIndex];
    }
};

// Log the current photo to the console (initially the first photo).
console.log(photoSlideShow.getCurrentPhoto());

// Go to the next photo and log it to the console.
photoSlideShow.nextPhoto(); // photo2.jpg
photoSlideShow.nextPhoto(); // photo3.jpg
photoSlideShow.nextPhoto(); // photo4.jpg
photoSlideShow.nextPhoto(); // End of slideshow

// Go to the previous photo and log it to the console.
photoSlideShow.prevPhoto(); // photo3.jpg
photoSlideShow.prevPhoto(); // photo2.jpg
photoSlideShow.prevPhoto(); // photo1.jpg
photoSlideShow.prevPhoto(); // Beginning of slideshow
photoSlideShow.prevPhoto(); // Beginning of slideshow (no change)
