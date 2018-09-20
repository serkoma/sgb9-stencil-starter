import 'sgb9-components'; 
import { Component, Prop, Element, State } from '@stencil/core';
//import { RouterHistory } from '@stencil/router';

//import { HELPTITEL, HELPTEXT } from '../../global/texte/texte';
import { HelpService, HelpTag } from '../../services/remote/public/help-service';


const MODULNAME: string = 'ElanHilfe: '; 

@Component({
  tag: 'elan-hilfe',
  styleUrl: 'elan-hilfe.scss'
})
export class ElanHilfe {
  @Element() el;
  @Prop() hilfeIdValue: string;
  @State() helpResponse : HelpTag;

  helpService : HelpService;
  isNew: boolean = false;
  constructor() {
    this.helpService = new HelpService();
  }



  render() {
    if(!this.isNew) {
    this.helpService.getHelp(this.hilfeIdValue).then(  
      (value) => {
        this.helpResponse = {_id : value[0]._id, titel: value[0].titel, text:value[0].text };
        console.log("getHelp:value ", value);
        console.log("getHelp:value ", value[0]);
        this.isNew = true;
      }
    ).catch(
      (err) => {
        this.helpResponse = {_id : "unkown", titel: "Fehler", text: [err] };
        console.log("getHelp:value ", err);
        this.isNew = true;
      }
     );
    }
    console.log(MODULNAME);
    this.isNew = false;
    if(this.helpResponse) {
      let inner = "";
      this.helpResponse.text.map( text => { 
        inner += text; 
      });
      return [ 
        <div class="card our-helpcard">
          <div class="hilfe-head">{this.helpResponse.titel}</div>
          <div class="hilfe-body" innerHTML={inner} >
          </div>
        </div>
      ];  
    }
  }
  componentDidLoad() {
    console.log(MODULNAME + "componentDidLoad")
  }
}
