import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

const MODULNAME: string = 'ElanHome: '; 

@Component({
  tag: 'elan-home',
  styleUrl: 'elan-home.css'
})
export class ElanHome {

  @Prop() history: RouterHistory;

  render() {
    return [
      <site-header>
        <div class="container">
          Elan 2019
        </div>
      </site-header>,

      <div class="main">
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url="/profile/test" activeClass="logo-link">
          Konfigurieren
        </stencil-route-link>
        <button onClick= { ()=> {this.history.push('/profile1', {name: "soso", alter: "48" })}}>RouteStateData</button>

      </div>
    ];
  }

  componentDidLoad() {
    console.log(MODULNAME + "componentDidLoad")
  }


}
