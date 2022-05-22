var app = {isTouch: (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))}
var pullable = document.querySelector('#container_pull');
var pullOptions = {
	appendAfterSelector: '.titleVisualizationContainer'
}
pullToRefresh(pullable, pullOptions);

	function pullToRefresh(pullContainer, options) {
		//default options
		options.appendAfterSelector = (options.appendAfterSelector)? options.appendAfterSelector : null;
		options.refreshDistance = (options.refreshDistance)? options.refreshDistance : 140;
		options.pullHardness = (options.pullHardness)? options.pullHardness : 4;
		
		var touchY = 0;
		var startTouchY = 0;
		var refreshReady = false;
		var mouseDown = app.isTouch ? 'touchstart' : 'mousedown';
		var mouseOut = app.isTouch ? 'touchcancel' : 'mouseout';
		var mouseLeave = app.isTouch ? 'touchcancel' : 'mouseleave';
		var mouseUp = app.isTouch ? 'touchend' : 'mouseup';
		var mouseMove = app.isTouch ? 'touchmove' : 'mousemove';

		var pullRefresh = pullContainer.querySelector(".pull-refresh");

		if (pullRefresh) {
			//there is already a pull refresh
			var refreshArrowContainer = pullRefresh.querySelector('.arrow-container');
		} else {
			//there is no pull refresh, so create elements
			pullRefresh = document.createElement("div");
			pullRefresh.classList.add("pull-refresh");
			var arrowContainer = document.createElement("div");
			arrowContainer.classList.add("arrow-container");
			pullRefresh.appendChild(arrowContainer);
			var arrowElement = document.createElement("i");
			arrowContainer.appendChild(arrowElement);
			arrowElement.classList.add("material-icons");
			arrowElement.innerHTML = "arrow_downward";

			var appendAfterElement = pullContainer.querySelector(options.appendAfterSelector);
			var pullRefreshOrder = (appendAfterElement) ? appendAfterElement.style.order * 1 + 1 : 0;
			pullRefresh.style.order = pullRefreshOrder;

			var appendBeforeElement = (appendAfterElement) ? appendAfterElement.parentElement.childNodes[0] : pullContainer.childNodes[0];

			//append pullContainer
			appendBeforeElement.parentElement.insertBefore(pullRefresh, appendBeforeElement);
		}

		pullContainer.addEventListener(mouseDown, function(ev) {
			if (pullContainer.scrollTop == 0) {
				//only if the container is scrolled to the top
				touchY = ev.pageY;
				startTouchY = touchY;
				pullContainer.addEventListener(mouseMove, moveBlock);
				pullContainer.addEventListener(mouseUp, tryToRefresh);
				pullContainer.addEventListener(mouseLeave, tryToRefresh);
			}
		});

		function moveBlock(e) {
			if (e.pageY > touchY) {
				//it's a pull down
				var d = e.pageY - startTouchY;
				if (d >= options.refreshDistance) {
					//the mouse was pulled beyond active
					refreshReady = true;
					arrowContainer.style.transform = "rotate(-180deg)";
				} else if (refreshReady) {
					//the mouse was moved back up
					refreshReady = false;
					arrowContainer.style.transform = "rotate(0deg)";
				}
				pullRefresh.style.height = d / options.pullHardness + 'px';
			}
		}

		function tryToRefresh() {
			pullContainer.removeEventListener(mouseMove, moveBlock);
			pullContainer.removeEventListener(mouseUp, tryToRefresh);
			pullContainer.removeEventListener(mouseLeave, tryToRefresh);
			if (refreshReady) {
				pullRefresh.style.height = '0px';
				refreshReady = false;
				//refresh function here
                //alert("refreshing...");
                loading.show();
				window.location.href='';
			} else {
				//cancelled before reaching active pull
				pullRefresh.style.height = '0px';
			}
		}
	}