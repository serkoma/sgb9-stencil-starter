import 'sgb9-components'; 
import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

//import ContextConsumer from '../../../global/site-provider-consumer';
import Tunnel from '../../../data/message';

const MODULNAME: string = 'ElanPage: '; 

const DUMMY: string = 'kjdfg asdfadsfafasafd adsf asd fas fsa fas f sadf asdf asd f erf   fq fa f af asf as df a f';

@Component({
  tag: 'elan-page',
  styleUrl: 'elan-page.scss'
})
export class ElanPage {
//  @Element() el : HTMLStencilElement;
  @Prop() history: RouterHistory;
  @Prop() isHilfeAn : boolean;
  @Prop() toggleLeftSidebar: () => void = () => {}

    render() {
      console.log(Tunnel.Consumer);
//      let cl2 = "sgb9-center-withhelp";
//      let cl3 ="sgb9-help";
      if(Tunnel.Consumer) {
//        cl2 = "sgb9-center-withouthelp";
//        cl3 ="sgb9-nohelp";
        }
    return [
      <div class="main">
        <div class="sgb9-left">
        {DUMMY}
      </div>  
      <Tunnel.Consumer>
      {({ classDef1, classDef2, message}) => (
        <span>
        <div class={classDef1}>
          <div class='app-profile'>
            <p>{classDef1}</p>
            <p>{message}</p>
          </div>
        </div>  
        <div class={classDef2}>
          {DUMMY}
        </div> 
        </span> 
      )}
    </Tunnel.Consumer>
    </div>
    ];
  }
/*
      <Tunnel.Consumer>
      {({ helpState, message}) => (
        <div class='app-profile'>
          <p>{message}</p>
          <p>{helpState}</p>
        </div>
      )}
    </Tunnel.Consumer>

*/

  //          <button onClick={toggleHelp}>Increment Num</button>
  

  componentDidLoad() {
    console.log(Tunnel.Consumer);
  //  console.log(Tunnel.Consumer.call(ElanPage, ['message']));
    
    console.log(MODULNAME + "componentDidLoad")


//    console.log(ContextConsumer);
//    console.log(ContextConsumer.injectProps(ElanPage,['isHilfeAn']));
//    console.log(ContextConsumer.injectProps(ElanPage,['isHilfeAn']));
  }

//  ContextConsumer.injectProps(ElanPage,['isHilfeAn']);
  
//  ContextConsumer.context
//  ContextConsumer.injectProps(ElanPage, ['toggleLeftSidebar']);
//  SiteProviderConsumer.injectProps(ElanPage, ['isHilfeAn']);
}
