// Function to expand the resume container
function expandResume() {
    // Select the element with the class 'resume-container' and set its width to 500px
    document.querySelector('.resume-container').style.width = '500px'; // Set your desired expanded size
}

// Function to shrink the resume container back to the preview size
function shrinkResume() {
    // Select the element with the class 'resume-container' and set its width to 100px
    document.querySelector('.resume-container').style.width = '100px'; // Set your desired preview size
}

// Function to redirect to the resume page
function redirectToResumePage() {
    
    window.location.href = 'Resume.pdf';
}


// Function to open the Google Form when the "Contact Me" button is clicked
function openGoogleForm() {
    // Replace 'https://your-google-form-link' with the actual link to your Google Form
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfzyi9vUlynaLieAAtinKM60HbZyAzp11EywB_igqBEWp-zlA/viewform?usp=sf_link';
}






// Function to toggle the visibility of additional blog details
function toggleBlogDetails(blogPostId) {
    // Construct the CSS selector for the blog post details based on its ID
    var blogDetailsSelector = '#' + blogPostId + '-details';

    // Toggle the visibility of the blog post details
    var blogDetailsElement = document.querySelector(blogDetailsSelector);
    if (blogDetailsElement) {
        blogDetailsElement.classList.toggle('visible');
    }
}

// Add event listeners for blog post interactions
document.addEventListener('DOMContentLoaded', function () {
    // Select all blog post elements
    var blogPosts = document.querySelectorAll('.blog-post');

    // Iterate through each blog post and attach event listeners
    blogPosts.forEach(function (blogPost) {
        // Extract the unique ID from the blog post's ID attribute
        var blogPostId = blogPost.id;

        // Attach a click event listener to each blog post
        blogPost.addEventListener('click', function () {
            // Call the function to toggle the visibility of additional blog details
            toggleBlogDetails(blogPostId);
        });
    });
});

