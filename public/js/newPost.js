var container = $('body');

container.on('click', '[name="clone"]', clone);
container.on('click', '[name="remove"]', remove);
	
function clone() {
	var btn = $(this),
  		form = btn.closest('form'),
      formHTML = form.html(),
      forms = $('form').length;
 $(".card-content").append('<form class="form">' + formHTML + '</form>');
 $(document).ready(function() {
    $('select').material_select();
  });
}
function remove() {
	var btn = $(this),
  		form = btn.closest('form');
 form.remove();
}