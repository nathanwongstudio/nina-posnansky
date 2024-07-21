function lazy() {
	var lazyImages = document.querySelectorAll("img[loading=lazy]"),
		notLazy = document.querySelectorAll("img:not([loading=lazy])");

	setTimeout(() => {
		for (var img of notLazy) {
			img.parentNode.classList.remove("is-loading");
		}

		if ("loading" in HTMLImageElement.prototype) {
			for (var img of lazyImages) {
				if (!img.complete) {
					img.addEventListener("load", lazyImageLoad, false);
					img.addEventListener("error", lazyImageError, false);
				} else {
					img.parentNode.classList.remove("is-loading");
				}
			}

			function lazyImageLoad(e) {
				e.currentTarget.parentNode.classList.remove("is-loading");
			}

			function lazyImageError(e) {
				var parent = e.currentTarget.parentNode;
				parent.classList.remove("is-loading");
				parent.classList.add("is-empty");
				setTimeout(function () {
					parent.classList.add("img-is-empty");
				}, 60);
			}
		} else {
			// if 'loading' supported, else

			for (var img of lazyImages) {
				img.classList.remove("is-loading");
			}
		} // if 'loading' supported
	}, "200");
}
