import findAncestor from './helpers/findAncestor';

module.exports = class {

	constructor() {
		//
	}

	bind(element, callback, autoUnbind = false) {
		this.el = element;
		this.callback = callback;
		this.autoUnbind = autoUnbind;

		this.onClick = this.onClick.bind(this);

		window.addEventListener('click', this.onClick, true);
	}

	unbind() {
		window.removeEventListener('click', this.onClick, true);
	}

	onClick(event) {
		if (event.target !== this.el && !findAncestor(this.el, event.target)) {

			// registered click outside the target element, run the callback!
			if (typeof this.callback === 'function') {
				this.callback();

				if (this.autoUnbind) {
					this.unbind();
				}
			} else {
				throw `Expected "callback" to be a function, instead got ${(typeof this.callback)}`;
			}
		}
	};

};