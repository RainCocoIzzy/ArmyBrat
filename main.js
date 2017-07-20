
$('h2.touch-link').click(function() {
	var status = $('div#pop-up').css("display")
	console.log(status)
	if (status === "none") {
		$('div#pop-up').css("display", "block")
	} else {
		$('div#pop-up').css("display", "none")
	}
})