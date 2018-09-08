var container = $("body");

container.on("click", "[name='clone']", clone);
container.on("click", "[name='remove']", remove);

ItemCounter = 0;

function clone() {
  var btn = $(this),
    form = btn.closest("form"),
    formHTML = form.html(),
    forms = $("form").length;
  $(".card-content").append("<form class='form'>" + formHTML + "</form>");
  //re-initialize drop down menu
  $(document).ready(function() {
    $("select").material_select();
  });
}

function remove() {
  var btn = $(this),
    form = btn.closest("form");
  form.remove();
}

// Getting jQuery references to the post body, title, form, and category select
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
