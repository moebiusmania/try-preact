webpackJsonp([0],{

/***/ "AXXw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("Tv6c");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);




let Profile = class Profile extends __WEBPACK_IMPORTED_MODULE_0_preact__["Component"] {
	constructor(...args) {
		var _temp;

		return _temp = super(...args), this.state = {
			time: Date.now(),
			count: 10
		}, this.updateTime = () => {
			this.setState({ time: Date.now() });
		}, this.increment = () => {
			this.setState({ count: this.state.count + 1 });
		}, _temp;
	}

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// update the current time


	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.profile },
			Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'h1',
				null,
				'Profile: ',
				user
			),
			Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'p',
				null,
				'This is the user profile for a user named ',
				user,
				'.'
			),
			Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				null,
				'Current time: ',
				new Date(time).toLocaleString()
			),
			Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'p',
				null,
				Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'button',
					{ onClick: this.increment },
					'Click Me'
				),
				' ',
				'Clicked ',
				count,
				' times.'
			)
		);
	}
};


/***/ }),

/***/ "Tv6c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"profile":"profile__t2Dqz"};

/***/ })

});
//# sourceMappingURL=route-profile.chunk.1e36a.js.map