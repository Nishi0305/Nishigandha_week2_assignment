const blogForm = document.getElementById('blogForm');
const blogPosts = document.getElementById('blogPosts');

const apiUrl = 'http://localhost:3000/api/posts';

async function fetchPosts() {
const response = await fetch(apiUrl);
const posts = await response.json();
renderPosts(posts);
}

function renderPosts(posts) {
blogPosts.innerHTML = '';
posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('blog-post');
    postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <button onclick="deletePost('${post.id}')">Delete</button>
    `;
    blogPosts.appendChild(postDiv);
});
}

blogForm.addEventListener('submit', async (e) …