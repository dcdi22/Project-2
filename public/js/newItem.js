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

// Getting jQuery references

var itemName = $("#item_name");
var brandName = $("#brand_name");
var itemPrice = $("#item_price");
var itemPhoto = $("#itemPhoto");
var purchaseUrl = $("#purchase_url");

$("#cmsForm").on("click", function(event) {
    event.preventDefault();

    var newItem = {
        brand: brandName.val().trim(),
        name: itemName.val().trim(),
        purchaseUrl: purchaseUrl.val(),
        photoUrl: itemPhoto.val(),
        price: itemPrice.val()
    };
  
    console.log(newItem);
  
    submitPost(newItem);
  });
  
  // Submits a new post and brings user to blog page upon completion
  function submitPost(Post) {
    console.log("ajax");
    $.post("/new/item", Post, function() {
    window.location.href = "/browse/styles/all";
});
}