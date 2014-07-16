$(document).ready(function(){

	$('.accordionContent').nextAll('dd').hide();

	$('.myAccordion').on('click', '.accordionHeader', function(){
		var $this = $(this).next();

			$this.slideDown(400);
			$this.siblings('dd').slideUp(400);
	});

});