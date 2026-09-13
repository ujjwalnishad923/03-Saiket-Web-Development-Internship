// Show post form

function showPostForm() {
    document.getElementById("postForm").style.display = "flex";
}


// Hide post form

function hidePostForm() {
    document.getElementById("postForm").style.display = "none";
}


// Add new post

function addPost() {

    let title = document.getElementById("postTitle").value;
    let content = document.getElementById("postContent").value;

    if (title === "" || content === "") {
        alert("Please fill all fields.");
        return;
    }

    let newPost = document.createElement("article");

    newPost.className = "post";

    newPost.innerHTML = `
        <h3>${title}</h3>
        <p class="date">Today</p>
        <p>${content}</p>
        <button onclick="readPost('${title}')">
            Read More
        </button>
    `;

    document.getElementById("posts").prepend(newPost);

    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";

    hidePostForm();

    alert("Post published successfully!");
}


// Read More

function readPost(title) {
    alert("You are reading: " + title);
}


// Search posts

function searchPosts() {

    let search = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    let posts = document.querySelectorAll(".post");

    posts.forEach(function(post) {

        let title = post
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (title.includes(search)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }

    });
}