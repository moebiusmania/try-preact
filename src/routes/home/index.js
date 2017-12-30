'use strict';

import { h, Component } from 'preact';
import style from './style';
import SearchField from './../../components/search-field';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Integrating Preact & Web Components</h1>
				<SearchField />
			</div>
		);
	}
}
