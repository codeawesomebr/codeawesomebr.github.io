$(function(){
	$(".solicita-orcamento-show").on('click', mostraEmailOrcamento);
	deleteElements();
	function mostraEmailOrcamento(event){
		event.preventDefault();
		$('#eapps-contact-form-1 > div').addClass('eapps-contact-form-show');
	};
});

function deleteElements(){
	setInterval(function(){
		var elementButtonToggle = $('.eapps-contact-form-toggle');
		var elementLinkToggle = $('[href="https://apps.elfsight.com/?utm_source=websites&utm_medium=clients&utm_content=contact-form&utm_term=undefined&utm_campaign=free-widget"]');
		elementButtonToggle.remove();
		elementLinkToggle.remove();
	}, 0);	
}


