function addPost() {
    // Get the post details from form inputs
    var title = document.getElementById('post-title').value;
    var date = document.getElementById('post-date').value;
    var content = document.getElementById('post-content').value;

    // Create a new div for the post
    var postDiv = document.createElement('div');
    postDiv.classList.add('blog-post');

    // Add HTML content to the post div
    postDiv.innerHTML = '<h3>' + title + '</h3>' + 
                        '<small>' + date + '</small>' + 
                        '<p>' + content + '</p>';

    // Append the new post to the blog posts section
    document.getElementById('blog-posts').appendChild(postIdv);

    // Clear the input fields
    document.getElementById('post-title').value = '';
    document.getElementById('post-date').value = '';
    document.getElementById('post-content').value = '';
}
