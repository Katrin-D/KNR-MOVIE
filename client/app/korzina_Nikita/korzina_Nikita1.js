$(document).ready(function() {
	$(document).on('click', '.remove', function() {
		$(this).parent().parent().remove();
	});
})