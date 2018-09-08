// Getting jQuery references
var bodyInput = $("#postDescription");
var titleInput = $("#postTitle");
var photoUrl = $("#postPhoto");
// Giving the postCategorySelect a default value

// Adding an event listener for when the form is submitted
$("#cmsForm").on("click", function(event) {
  event.preventDefault();
  console.log("submit");
  // Wont submit the post if we are missing a body or a title
  // //if (!titleInput.val().trim() || !bodyInput.val().trim() || !photoUrl.val().trim()) {
  //   return;
  // }
  // Constructing a newPost object to hand to the database
  var newPost = {
    title: titleInput.val().trim(),
    body: bodyInput.val().trim(),
    photoUrl: photoUrl.val()
  };

  console.log(newPost);

  submitPost(newPost);
});

// Submits a new post and brings user to blog page upon completion
function submitPost(Post) {
  console.log("ajax");
  $.post("/new/post", Post, function() {
    window.location.href = "/browse/styles/all";
  });
}
