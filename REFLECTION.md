 ## 1. **Can I explain what my code does?**
Describe the functionality of your code and its components. How do your code segments work together to meet the project's objectives?

* The functionality of the code is to fetch and display images from NASA's Mars Rover Photos API. The page initially loads a date with the photos taken on that specific date. The user can choose a date and the page will load specific images taken on that date (if there are any). 
    * script.js
        * `fetchPhotos(date)` Sends a request to the NASA API using the data parameter. Destructures the photos data and returns an array of photo objects.
        * `loadInitialPhotos` Loads photos for a the default date (2015-08-28)
        * `displayPhotos(photos, description)` Takes the array of photo objects and the decscription. Adds the image and paragraph elements to the photo gallery container to display the photos on the page.
        * `.addEventListener('click', ...)` When the button is clicked, it gets the user's date input then fetches the data for that date. It will display an error message if there is no date entered.

 
 ## 2. **What was my coding process?**
Reflect on your approach from planning to execution. How did you organize your work, and what strategies did you employ?

* My approach for this assignment goes the same for all my past assignments. I usually go follow the instructions, making sure I get all details so that I don't miss anything. After I finish a section in the instructions, I make a commit and push it to corresponding branch.I believe that I don't necessarily have a plan with my instructions, and that is what I should work on for upcoming assignments. As for troubleshooting, I typically use console.log() to know what data value I'm actually retrieving and to check if certain conditions are returning the way I suspect/want them to. 

 ## 3. **What challenges did I have?**
Identify and describe any obstacles you encountered while working on this project. How did you address or overcome these challenges?
What would I do differently now?

* A challenge that really had tested me was figuring out how to destructure the object. Specifically, within the fetchPhotos function. I believe it took me around a day or two to finally understand what was happening, and another day to make it work the way I wanted it to. I overcame this obstacle through trial and error, figuring out how destructuring works, and determining what actual data I am handling. I definitely had to read back on the notes to see if I was doing things right, and also had to resort to researching online resources once I reached mental blocks.

 ## 4. **What would I do differently now?**
Given what you have learned through this project, what changes would you make to your approach or your code if you were to start over?

One thing I would do differently now is to stop trying to brute force the code and coding what I think should work, but rather try to understand the what I'm trying to do and what I want to accomplish with it. If I were to start over, I would probably give more time towards understanding the documentation and syntax on the specific tasks I'm trying to accomplish. This would be destructuring data, and understanding Promises more. Because the way the course was structured, there was really no "practice" heading towards this assignment and also because there is almost not enough time to be familiar with the concepts. This made it extremely difficult to understand why things were doing this and what not. I believe that more understanding would definitely help a lot and would have reduced the time it took to finally get things working. Moreover, I think that my code is not efficient enough, I believe that there could be more ways to speed up the image loading, but I feel like that is way too advanced for the scope of our course, and would also take a lot of time to learn as well. This is all I would do differently if I were to start over.



