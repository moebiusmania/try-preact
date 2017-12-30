'use strict';

export default class GithubUser extends HTMLElement {

  set name(input) {
    this.setAttribute('name', input);
    this.searchUser(input);
  }

  constructor() {
    super();
    this.SD = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    console.log('<github-user> added to the DOM');
  }

  searchUser(name) {
    fetch(`https://api.github.com/users/${name}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        const str = JSON.stringify(data, null, 2);

        this.SD.innerHTML = `
          <style>
            pre{ padding: 20px; border: 1px dashed gray }
          </style>
          <pre>${str}</pre>
        `;
      });
  }

  clear() {
    this.SD.innerHTML = null;
  }

}

customElements.define('github-user', GithubUser);