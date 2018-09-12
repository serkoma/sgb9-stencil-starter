import '@stencil/router';
import { Component, Prop, Listen, State } from '@stencil/core';
//import SiteProviderConsumer, { SiteState } from '../../global/site-provider-consumer';
import SiteProviderConsumer, { SiteState } from '../../global/site-provider-consumer';

const MODULNAME: string = 'ElanRoot: '; 

@Component({
  tag: 'elan-root',
  styleUrl: 'elan-root.css'
})
export class ElanRoot {
  
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;

  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */
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

  @State() isLeftSidebarIn: boolean;
  toggleLeftSidebar = () => {
  }



  render() {
    const siteState: SiteState = {
      isLeftSidebarIn: this.isLeftSidebarIn,
      toggleLeftSidebar: this.toggleLeftSidebar
    };
    return (
      <SiteProviderConsumer.Provider state={siteState}>
      <site-header />
      <div class="root">
        <div class="container">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="elan-home" exact={true} />
              <stencil-route url="/profile/:prof" component="elan-profile" componentProps={{'name': 'elan-bla'}}/>
              <stencil-route url="/profile1" component="elan-profile1" />
              <stencil-route url="/start/:strMode" component="elan-start"  componentProps={{'strMode': '0'}}/>
              <stencil-route url="/demos" component="demos-page" />
              <stencil-route url="/pwa" component="pwas-page" />
              <stencil-route url="/resources" component="resources-page" />
              <stencil-route component='notfound-page'></stencil-route>
            </stencil-route-switch>
          </stencil-router>
        </div>
        <footer>
          <div class="container">
            <div class="footer__open-source">Copyright 2000-2019 IW Köln. (from root)</div>
          </div>
        </footer>
      </div>
    </SiteProviderConsumer.Provider>
    );
  }

  componentDidLoad() {
    console.log(MODULNAME + "componentDidLoad")
    this.isLeftSidebarIn = false;
  }


}
