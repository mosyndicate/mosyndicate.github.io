// Function to expand the resume container
function expandResume() {
    // Select the element with the class 'resume-container' and set its width to 500px
    document.querySelector('.resume-container').style.width = '500px'; // Set your desired expanded size
}



// Function to open the LinkedIn when the "Contact Me" button is clicked
function redirectToLinkedIn() {
    window.location.href = "https://www.linkedin.com/in/mahamud-osman/";
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

