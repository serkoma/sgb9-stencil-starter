import 'sgb9-components'; 
import { Component, Prop, State, Element, Listen } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

//import ContextConsumer from '../../../global/site-provider-consumer';
import Tunnel from '../../../data/message';

//import { ElanHilfe } from '../../elan-hilfe/elan-hilfe';

const MODULNAME: string = 'ElanPage: '; 

const DUMMY: string = 'kjdfg asdfadsfafasafd adsf asd fas fsa fas f sadf asdf asd f erf   fq fa f af asf as df a f';

@Component({
  tag: 'elan-page',
  styleUrl: 'elan-page.scss'
})
export class ElanPage {
  @Element() el;
  @Prop() history: RouterHistory;
  @Prop() isHilfeAn : boolean;
  @Prop() setHelpId: (hilfeId: string) => void;
  @Prop() getHelpState: () => Promise<boolean>;
  @State() reported: any = [];

  @Listen('setNewHelp')
  setNewHelpHandler(event: CustomEvent) {
    console.log(MODULNAME + 'Received the custom checkHilfeChange event: ', event);
    console.log(event.detail);
    this.setHelpId(event.detail.helpId);
  }



  setHelp1 = () => {
    this.setHelpId('10181');
  }
  setHelp2 = () => {
    this.setHelpId('10051');
  }

    render() {
      console.log(MODULNAME);
      console.log(this.getHelpState());
    return [
      <div class="main">
        <div class="sgb9-left">
        {DUMMY}
      </div>  
      <Tunnel.Consumer>
      {({ classDef1, classDef2, message, helpId}) => (
        <span>
        <div class={classDef1}>
          <div class="elan-part-tab">
            <p><sgb9-input label="Arbeitgebername" helpId="10031" force={true} name="field1" idValue="id1"></sgb9-input></p>
            <p><sgb9-input label="Arbeitgebername2" helpId="10041" name="field2" idValue="id2"></sgb9-input></p>
            <p><sgb9-input label="Arbeitgebername3" helpId="10051" name="field3" idValue="id3"></sgb9-input></p>
            <p><sgb9-input name="field4" idValue="id4"></sgb9-input></p>
            <p><sgb9-input name="field5" idValue="id5"></sgb9-input></p>

            <p>{classDef1}</p>
            <p>{message}</p>
            <p><button onClick={ this.setHelp1 }>Set helpId 1</button></p>
            <p><button onClick={ this.setHelp2 }>Set helpId 2</button></p>
          </div>
        </div>  
        <div class={classDef2}>
         <elan-hilfe hilfeIdValue={helpId}></elan-hilfe>
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
//    console.log(this.hilfePage);
    

//    console.log(ContextConsumer);
//    console.log(ContextConsumer.injectProps(ElanPage,['isHilfeAn']));
//    console.log(ContextConsumer.injectProps(ElanPage,['isHilfeAn']));
  }

//  ContextConsumer.injectProps(ElanPage,['isHilfeAn']);
  
//  ContextConsumer.context
//  ContextConsumer.injectProps(ElanPage, ['toggleLeftSidebar']);
//  SiteProviderConsumer.injectProps(ElanPage, ['isHilfeAn']);
}
Tunnel.injectProps(ElanPage, ['setHelpId', 'getHelpState']);
