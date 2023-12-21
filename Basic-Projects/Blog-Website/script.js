for (let postId = 1; postId <= 5; postId++) {
  const commentForm = document.getElementById(`commentForm${postId}`);
  if (commentForm) {
    commentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      addComment(postId);
    });
  }
}

function addComment(postId) {
  const name = document.getElementById(`name${postId}`).value;
  const message = document.getElementById(`message${postId}`).value;
  const commentList = document.getElementById(`commentList${postId}`);
  
  const comment = document.createElement("div");
  comment.classList.add("comment");
  comment.innerHTML = `<strong>${name}:</strong> ${message}`;
  commentList.appendChild(comment);
  
  document.getElementById(`name${postId}`).value = "";
  document.getElementById(`message${postId}`).value = "";
}

