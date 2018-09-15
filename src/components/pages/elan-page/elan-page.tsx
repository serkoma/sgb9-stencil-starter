import 'sgb9-components'; 
import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';


const MODULNAME: string = 'ElanPage: '; 

@Component({
  tag: 'elan-page',
  styleUrl: 'elan-page.css'
})
export class ElanPage {
  @Prop() history: RouterHistory;

    render() {
    return [
      <div class="main">
      </div>
    ];
  }

  componentDidLoad() {
    console.log(MODULNAME + "componentDidLoad")
  }


}
