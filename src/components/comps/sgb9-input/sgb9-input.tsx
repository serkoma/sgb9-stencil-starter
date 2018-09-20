import { Component, Prop, Event, EventEmitter } from '@stencil/core';

const MODULNAME: string = 'Sgb9Input: '; 

@Component({
  tag: 'sgb9-input',
  styleUrl: 'sgb9-input.scss',
  host: {
    theme: 'sgb9-input sgb-form-field-can-float sgb-form-field-hide-placeholder sgb-form-field-type-sgb-input sgb-input-container sgb-primary',
  }

})
export class Sgb9Input {
  @Event() setNewHelp: EventEmitter;
  setNewHelpHandler() {
    console.log(MODULNAME + "setNewHelp emitted! " + this.helpId)
    this.setNewHelp.emit({"helpId": this.helpId});
  }    

  @Prop() label: string;
  @Prop() helpId: string;
  @Prop() force: boolean;
  @Prop() name: string;
  @Prop() idValue: string;
  
  @Prop() isHilfeAn : boolean;
//  @Prop() setHelpId: (hilfeId: string) => void;
// @Prop() getHelpState: () => Promise<boolean>;
  
  focusGained(evt) {
//    console.log(MODULNAME + "focusGained", evt);
//    console.log(evt.path);
    evt.path[4].classList.add("sgb-form-field-should-float");
    evt.path[4].classList.add("sgb-focused");
    this.setNewHelpHandler();
    //    if(this.getHelpState()) {
//      this.setHelpId(this.helpId);
//    }
  }
  focusLost(evt) {
//    console.log(MODULNAME + "focusLost", evt);
//    console.log(evt.path);
//    console.log(evt.srcElement);
    console.log(evt.srcElement.value);
    if(!evt.srcElement.value) {
      evt.path[4].classList.remove("sgb-form-field-should-float");
    }
    evt.path[4].classList.remove("sgb-focused");
  }

  render() {
    return(
      <div class="sgb9-input-field-wrapper">
          <div class="sgb9-input-field-flex">
            <div class="sgb9-input-field-infix">
              <input class="sgb9-input-element" onBlur={ (evt) => { this.focusLost(evt); } } onFocus={ (evt) => { this.focusGained(evt); } } type="text" id="sgb-input-0" aria-invalid="false" aria-required="false"/>
              <span class="sgb9-input-field-label-wrapper">
                <label class="sgb-form-field-label sgb-input-placeholder sgb-form-field-placeholder sgb-form-field-empty" aria-owns="sgb-input-0">
                <span class={this.force==true? 'sgb9-bold' :''}>{this.label}</span>
                </label>
              </span>
            </div>
          </div>
          <div class="sgb-input-underline sgb-form-field-underline">
            <span class="sgb-input-ripple sgb-form-field-ripple">
            </span>
          </div>
          <div class="sgb-input-subscript-wrapper sgb-form-field-subscript-wrapper">
            <div class="sgb-input-hint-wrapper sgb-form-field-hint-wrapper ng-tns-c9-0 ng-trigger ng-trigger-transitionMessages ng-star-inserted">
              <div class="sgb-input-hint-spacer sgb-form-field-hint-spacer">
              </div>
            </div>
          </div>
        </div>
          );
        }

//          <!-- element.style { opacity: 1; transform: translateY(0%); } -->
      
      
  componentWillLoad() {
    console.log(MODULNAME + 'The component will load');
    console.log(this.helpId)
  }
      
  componentDidLoad() {
    console.log(MODULNAME + 'The component did load');
  }
}  
//Tunnel.injectProps(Sgb9Input, ['setHelpId', 'getHelpState']);


    
