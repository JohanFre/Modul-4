// fetch the posts and show directly on feed when page loads
fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((res) => res.json())
  .then((data) => {
    let posts = "<h2>Posts</h2>";
    data.forEach(function (post) {
      posts += `
      <div class="post">
        <h3 class="post-title">${post.title}</h3>
        <div class="post-body">${post.body}</div>
        <button class="comment-button" onclick="comment()">Read comments</button>
        <button class="author-button" onclick="author()" >Author info</button>
        <ul class="comments" id="commentz"></ul>
        
      </div>
    `;
    });
    document.getElementById("posts").innerHTML = posts;
  });

// Onclick -- fetching author info API and posting it on webpage.
function author(e) {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((res) => res.json())
    .then((data) => {
      let usercontainer = "<h2>Author</h2>";
      data.forEach(function (users) {
        usercontainer += `<div class="user">
                <div>${users.name}</div>
                <br/>
                <div>${users.email}</div>
                <br/>
                <div>Phone: ${users.phone}</div>
                <br/>
            </div>`;
      });
      document.getElementById("user").innerHTML = usercontainer;
    });
}
// Onclick -- fetching comments API and posting it on webpage
function comment() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
      let comments = "";
      data.forEach(function (users) {
        comments += `<ul class="comment">
                <div>${users.email}</div>
                <div>${users.body}</div>
                  </ul>`;
      });
      document.getElementById("commentz").innerHTML = comments;
    });
}

/*  Tanken var att lägga data-userid="${user.id} från fetchen i posts och
    använda i funktionerna author/comment men fick ej ihop det,
    därav hämtar den allt den kan från api/author, api/comment

    Kunde inte lista ut hur man enbart kom åt rätt ID i fetchen. 
*/
