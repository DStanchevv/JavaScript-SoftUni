function attachEvents() {
    document.getElementById("btnLoadPosts").addEventListener("click", getPosts);
    document.getElementById("btnViewPost").addEventListener("click", getComments)
}
async function getPosts() {
    const selectOp = document.getElementById("posts");
    const url = `http://localhost:3030/jsonstore/blog/posts`;
    selectOp.innerHTML = "";

    const response = await fetch(url);
    const data = await response.json();
    
    Object.values(data).forEach(post => {
        const op = document.createElement("option");
        op.value = post.id;
        op.textContent = post.title;
        selectOp.appendChild(op);
    })
}

async function getComments() {
    const postsURL = `http://localhost:3030/jsonstore/blog/posts`;
    const commentsURL = `http://localhost:3030/jsonstore/blog/comments`;

    const selectedOp = document.getElementById("posts").selectedOptions[0].value;
    const titleElement = document.getElementById("post-title");
    const postBodyElement = document.getElementById("post-body");
    const postULElement = document.getElementById("post-comments");
    postULElement.innerHTML = "";

    const postResponse = await fetch(postsURL);
    const postData = await postResponse.json();

    const commentsResponse = await fetch(commentsURL);
    const commentsData = await commentsResponse.json();

    const selectedPost = Object.values(postData).find(post => post.id == selectedOp);
    titleElement.textContent = selectedPost.title;
    postBodyElement.textContent = selectedPost.body;

    const comments = Object.values(commentsData).filter(c => c.postId === selectedOp);
    comments.forEach(c => {
        const li = document.createElement("li");
        li.textContent = c.text;
        postULElement.appendChild(li);
    })
}

attachEvents();