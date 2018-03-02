$.fn.extend({
	zfSelect: function() {
		var $button = $(this).find('.dropdown-toggle');
		var $list = $(this).find('.dropdown-menu');

		$list.on('click', 'li', function() {
			$button.find('.btn_text').text($(this).find('a').text());
		});
	}
});