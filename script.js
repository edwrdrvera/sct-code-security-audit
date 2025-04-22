import { api_key } from "/external.js"; // Imports API key

const photoGallery = document.getElementById('photo-gallery');
const loadButton = document.getElementById('load-button');

/**
 * Fetches photos from NASA's Mars Rover Photos API
 * 
 * @async
 * @param   {string} date - The Earth date for which to fetch photos (YYYY-MM-DD format)
 * @returns {Array<Object>} - An array of photo objects OR an empty array if no photos
 *                          are found.
 */
async function fetchPhotos(date) {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`+ 
    `?api_key=${api_key}`+
    `&earth_date=${date}`+
    `&page=1`+
    `&per_page=3`;

    try {
        // Fetch data from NASA's Mars Rover Photos API
        const response = await fetch(url);
        if (!response.ok) { 
            throw new Error("Could not fetch data");
        }

        const dataObject = await response.json();
        let photoArray = []; // An array of photo objects

        // Checks if there is any data
        if (dataObject.photos.length > 0) {
            for (let i = 0; i < dataObject.photos.length; i++) {
                const photoData = dataObject.photos[i];
                const {
                    /**
                     * @type {number} The Martian day on which the photo was taken.
                     */
                    sol,

                    /**
                     * @type {Object} Object containing information about the camera used.
                     * @property {string} full_name - The full name of the camera.
                     */
                    camera: { full_name },

                    /**
                     * @type {string} Image source URL
                     */
                    img_src,

                    /**
                     * @type {string} The Earth date on which the photo was taken.
                     */
                    earth_date
                } = photoData; 
                photoArray.push(photoData); // Add photo object into the array
            }
        }
        return photoArray; // Returns array
    } catch(error) {
        console.error(error);
        return []; // Return an empty array in case of an error
    }
};

/**
 * Loads and displays photos from an initial date 
 * 
 * @async
 */
async function loadInitialPhotos() {
    const initialDate = '2015-09-28';
    const photos = await fetchPhotos(initialDate);
    displayPhotos(photos, `Discovery of Water on Mars (${initialDate})`); 
};


/**
 * Displays photos in the photo gallery.
 *
 * @param   {Array<object>} photos - An array of photo objects to display.
 * @param   {string} description - A description for each photo taken
 */
function displayPhotos(photos, description) {
    photoGallery.innerHTML = ''; // Clears the photo gallery.

    // Display an error message if array is empty
    if (photos.length === 0){
        const errorMessage = document.createElement('h2');
        errorMessage.id = 'error-message';
        errorMessage.textContent = "No photos on this date.";
        photoGallery.appendChild(errorMessage);
        return;
    }

     // Add a header for the date
    const headerElement = document.createElement('h2');
    headerElement.textContent = description;
    photoGallery.appendChild(headerElement);

     // Add each photo and description into the gallery
    photos.forEach(photo => {
        // Create an img element
        const imgElement = document.createElement('img');
        imgElement.src = photo.img_src;
        // Creates an alt text for accessibility
        imgElement.alt = `Photo on Mars taken by ${photo.camera.full_name} on sol ${photo.sol}`;
        photoGallery.appendChild(imgElement);

        // Creates a paragraph element for the description under each image
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = `Taken by ${photo.camera.full_name} on sol ${photo.sol}`;
        photoGallery.appendChild(descriptionElement);
    });
};

// Event listener for the load photos button
loadButton.addEventListener('click', (event) => {
    photoGallery.innerHTML = '';  
    const earthDateInput = document.getElementById('earth-date').value;
    const maxDate = new Date('2023-12-01'); // Max allowed date for any data.
    const landingDate = new Date('2012-08-06');
    const earthDate = new Date(earthDateInput); // Date input 
    let description = `Photos from (${earthDate})`; 

    // Check if date input is valid (Not empty and earlier than max date)
    if (earthDateInput != "" && earthDate <= maxDate && earthDate >= landingDate) {
        // Fetch and display photos for the selected date
        fetchPhotos(earthDateInput)
          .then(photos => {
            displayPhotos(photos, description);
          });
        } else {
            // Display an error message if no date is entered
            const errorMessage = document.createElement('h2');
            errorMessage.id = 'error-message';
            errorMessage.textContent = "Enter a valid date. (2012-08-6 to 2023-12-01)";
            photoGallery.appendChild(errorMessage);
    }
});

// Loads initial photos on page load
loadInitialPhotos();
