// Sample JavaScript to handle like, comment, and dislike buttons (No actual functionality)
const likeButtons = document.querySelectorAll('.like-btn');
const commentButtons = document.querySelectorAll('.comment-btn');
const dislikeButtons = document.querySelectorAll('.dislike-btn');

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('You liked this meme!');
  });
});

commentButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('You commented on this meme!');
  });
});

dislikeButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('You disliked this meme!');
  });
});
