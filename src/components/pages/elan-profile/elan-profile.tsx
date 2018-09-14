import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { sayHello } from '../../../helpers/utils';

const MODULNAME: string = 'ElanProfile: '; 

@Component({
  tag: 'elan-profile',
  styleUrl: 'elan-profile.css'
})
export class ElanProfile {
 
  @State() state = false;
  @Prop() match: MatchResults;

  render() {
    return [
      <site-header>
        <stencil-route-link url="/" exact={true} activeClass="link-active" >
          Home
        </stencil-route-link>
      </site-header>,

      <div class="main">
        <p>
          {sayHello()}! {this.match.params.prof} is passed! My name was passed in through a route
          param!
        </p>

        <ion-item>
          <ion-label>Setting ({this.state.toString()})</ion-label>
          <ion-toggle checked={this.state} onIonChange={(ev) => this.state = ev.detail.checked} />
        </ion-item>

      </div>
    ];
  }

  componentDidLoad() {
    console.log(MODULNAME + "componentDidLoad");
    console.log("this.prof = ", this.match);
  }

}
