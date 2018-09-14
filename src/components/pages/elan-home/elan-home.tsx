import 'sgb9-components'; 
import { Component, Prop, Listen, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

import { RADIOTEXTE, RADIOGROUPS } from '../../../global/texte/texte';

const MODULNAME: string = 'ElanHome: '; 

@Component({
  tag: 'elan-home',
  styleUrl: 'elan-home.css'
})
export class ElanHome {
  @State() radioValueG1 : number = 0;
  @State() radioValueG2 : number = 3;
  radioTextG1 : string = RADIOTEXTE[this.radioValueG1];
  radioTextG2 : string = RADIOTEXTE[this.radioValueG2];
  
  @Prop() history: RouterHistory;
  @Listen('checkRadioChange') 
  checkChangeHandler(event: CustomEvent) { 
    console.log(MODULNAME + 'Received the custom checkRadioChange event: ', event);
    console.log(event.detail);
    if(event.detail.group == RADIOGROUPS[0]) {
      this.radioValueG1 = event.detail.value;
      this.radioTextG1 = RADIOTEXTE[this.radioValueG1];
    } else {
      this.radioValueG2 = event.detail.value;
      this.radioTextG2 = RADIOTEXTE[this.radioValueG2];
    }
  }


    render() {
    return [
      <site-header>
        <div class="container">
          Elan 2019
        </div>
      </site-header>,

      <div class="main">
        <p>
        <div class="radio-group">
        <sgb9-radio label={RADIOTEXTE[0]} group={RADIOGROUPS[0]} idValue="elan-radio-0000" value={0} checked={true}></sgb9-radio>
        <sgb9-radio label={RADIOTEXTE[1]} group={RADIOGROUPS[0]} idValue="elan-radio-0001" value={1}></sgb9-radio>
        <sgb9-radio label={RADIOTEXTE[2]} group={RADIOGROUPS[0]} idValue="elan-radio-0002" value={2}></sgb9-radio>
        </div>
        <br />
        <div class="radio-group">
        <sgb9-radio label={RADIOTEXTE[3]} group={RADIOGROUPS[1]} idValue="elan-radio-0003" value={3} checked={true}></sgb9-radio>
        <sgb9-radio label={RADIOTEXTE[4]} group={RADIOGROUPS[1]} idValue="elan-radio-0004" value={4}></sgb9-radio>
        </div>   
        <br />     
        {this.radioTextG1} is selected in first group!<br />
        {this.radioTextG2} is selected in second group!
        </p>

        <stencil-route-link url="/profile/test" activeClass="logo-link">
          Konfigurieren
        </stencil-route-link>
        <button onClick= { ()=> {this.history.push('/profile1', {name: this.radioTextG1, alter: this.radioValueG1 })}}>RouteStateData</button>

      </div>
    ];
  }

  componentDidLoad() {
    console.log(MODULNAME + "componentDidLoad")
  }


}
