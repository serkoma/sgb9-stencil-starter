import { Component, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { sayHello } from '../../../helpers/utils';

const MODULNAME: string = 'ElanProfile1: '; 

@Component({
  tag: 'elan-profile1',
  styleUrl: 'elan-profile1.css'
})
export class ElanProfile1 {
 
  @State() state = false;
  @Prop() history: RouterHistory;

  render() {
    return [
      <site-header>
        <stencil-route-link url="/" exact={true} activeClass="link-active" >
          Home
        </stencil-route-link>
      </site-header>,

      <div class="main">
        <p>
          {sayHello()}! {this.history.location.state.name} is passed! My name was passed in through a route
          param! ({this.history.location.state.value})
        </p>

      </div>
    ];
  }

  componentDidLoad() {
    console.log(MODULNAME + "componentDidLoad");
    console.log("this.prof = ", this.history.location.state);
  }

}
