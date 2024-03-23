// Example array of posts (can be obtained from server or local storage)
const posts = [
    { type: "Story", title: "Story Title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero vel risus finibus porta." },
    { type: "Poet", title: "Poet Title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero vel risus finibus porta." },
    { type: "Blog", title: "Blog Title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero vel risus finibus porta." },
    { type: "Comics", title: "Comics Title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero vel risus finibus porta." }
  ];
  
  // Function to display posts
  function displayPosts() {
    const postsContainer = document.getElementById('posts-container');
  
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content.substring(0, 50)}...</p>
      `;
      postElement.addEventListener('click', () => redirectToPost(post.type));
      postsContainer.appendChild(postElement);
    });
  }
  
  // Function to redirect to appropriate HTML file based on post type
  function redirectToPost(type) {
    switch (type) {
      case "Story":
        window.location.href = "story.html";
        break;
      case "Poet":
        window.location.href = "poet.html";
        break;
      case "Blog":
        window.location.href = "blog.html";
        break;
      case "Comics":
        window.location.href = "comic.html";
        break;
      default:
        console.error("Invalid post type");
    }
  }
  
  window.onload = displayPosts;

  