import '@stencil/router';
import { Component, State } from '@stencil/core';
//import SiteProviderConsumer, { SiteState } from '../../global/site-provider-consumer';
//import SiteProviderConsumer, { SiteState } from '../../../global/site-provider-consumer';

import Tunnel, { ElanState } from '../../../data/message';

const HILFETEXT = [
  "Hilfe an ",
  "Hilfe aus"
];
const CLASSDEFS1 = [
  "sgb9-center-withhelp",
  "sgb9-center-withouthelp"
];
const CLASSDEFS2 = [
  "sgb9-help",
  "sgb9-nohelp"
];

/*
const HELPIDS = [
  "10011",
  "10190",
  "10021",
  "10181",
  "10031",
  "10041",
  "10051",
  "10061",
  "10171",
  "10071"
];
*/


const MODULNAME: string = 'ElanRoot: '; 

@Component({
  tag: 'elan-root',
  styleUrl: 'elan-root.scss'
})
export class ElanRoot {

  /*
  @Listen('checkHilfeChange')
  checkHilfeChangeHandler(event: CustomEvent) {
    console.log(MODULNAME + 'Received the custom checkHilfeChange event: ', event);
    console.log(event.detail);
    this.isHilfeAn = event.detail.hilfeState;
  }
  */
  @State() isHilfeAn: boolean = true;
  @State() helpId: string = '10011';

//  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;

  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */
/*
  @Listen('window:swUpdate')
  async onSWUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'New version available',
      showCloseButton: true,
      closeButtonText: 'Reload'
    });
    await toast.present();
    await toast.onWillDismiss();
    window.location.reload();
  }
*/

  count: number = 0;
  @State() message: string = HILFETEXT[this.isHilfeAn == true ? 0 : 1];
  aktClassDef1: string = CLASSDEFS1[this.isHilfeAn == true ? 0 : 1];
  aktClassDef2: string = CLASSDEFS2[this.isHilfeAn == true ? 0 : 1];
  
  toggleHelp = () => {
    this.isHilfeAn = !this.isHilfeAn ;
//    this.count = this.count + 1;
    this.message = HILFETEXT[this.isHilfeAn == true ? 0 : 1];
    this.aktClassDef1 = CLASSDEFS1[this.isHilfeAn == true ? 0 : 1];
    this.aktClassDef2 = CLASSDEFS2[this.isHilfeAn == true ? 0 : 1];
    console.log(MODULNAME + this.message);
  }
//  setHelpId = (helpId) => {
  setHelpId = (helpId) => {
    console.log(MODULNAME + "Setting helpId: " + helpId);
//    this.count = this.count+1;
//    this.count = this.count % 10;
//    console.log(MODULNAME + "count: " + this.count);
//    this.helpId = HELPIDS[this.count];
//    console.log(MODULNAME + "Setted helpId: " + this.helpId);
    this.helpId = helpId;
  };
//  getHelpState = async () => {
  getHelpState = () => {
    return this.isHilfeAn;
  }


  render() {
    const siteState: ElanState = {
      helpState: this.isHilfeAn,
      helpId: this.helpId,
      message: this.message,
      classDef1: this.aktClassDef1,
      classDef2: this.aktClassDef2,
      toggleHelp: this.toggleHelp,
      setHelpId: this.setHelpId,
      getHelpState: this.getHelpState,
    }
    console.log(MODULNAME + "render " + siteState.helpState);
    console.log(MODULNAME + "render " + siteState.helpId);

    return (
      <Tunnel.Provider state={siteState}>
      <site-header />
      <div class="root">
        <div class="container">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="elan-home" exact={true} />
              <stencil-route url="/profile/:prof" component="elan-profile" componentProps={{'name': 'elan-bla'}}/>
              <stencil-route url="/profile1" component="elan-profile1" />
              <stencil-route url="/sgb9" component="elan-page" />
              <stencil-route url="/demos" component="demos-page" />
              <stencil-route url="/pwa" component="pwas-page" />
              <stencil-route url="/resources" component="resources-page" />
              <stencil-route component='notfound-page'></stencil-route>
            </stencil-route-switch>
          </stencil-router>
        </div>
        <footer>
          <div class="container">
            <div class="footer__open-source">Copyright 2000-2019 XXX. (from root)</div>
          </div>
        </footer>
      </div>
    </Tunnel.Provider>
    );
  }

  componentDidLoad() {
    console.log(MODULNAME + "componentDidLoad")
  }


}
