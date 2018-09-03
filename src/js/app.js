/*!
* Moonkake 6.0.3
*
* https://github.com/detectiveshelby/moonkake
*/

import Utils from './components/utils';
import './components/tabs';
import './components/toggler';
import './components/popup';
import './components/carousel';
import './components/inputmask';

$(function() {

	Utils.hello();

	/* SCROLL
	-------------------------------------------------- */

	$('[data-scroll-to]').on('click', function(event) {
		event.preventDefault();

		var to = $(this).data('scroll-to-target');
		var offset = $(this).data('scroll-to-offset') || 0;

		Utils.scrollTo($(to), '', offset);
	});

	/* TABLES
	-------------------------------------------------- */

	//$('article table').wrap('<div class="table"></div>');

});
