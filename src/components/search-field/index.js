'use strict';

import { h, Component } from 'preact';
import style from './style';
import GithubUser from './../../elements/github-user';

export default class SearchField extends Component {
  state = {
    user: null
  }

  searching(evt){
    if (evt.keyCode === 13) {
      this.setState({ user: evt.currentTarget.value});
      console.log(this.state)
    }
  }
  
  
  render(){
    return(
      <div class={style.search_field}>
        <input type="text" 
          placeholder="Search a GitHub user"
          onKeyUp={this.searching.bind(this)}
          value={this.state.user} />
        <github-user name={this.state.user}></github-user>
      </div>
    )
  }
}