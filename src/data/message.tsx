// Filename: './data/message.tsx'

import { createProviderConsumer } from '@stencil/state-tunnel';

export interface ElanState {
  helpState: boolean,
  helpId: string,
  message: string,
  classDef1: string,
  classDef2: string,
  toggleHelp: () => void,
//  setHelpId?: (hilfeId) => void,
  setHelpId: (hilfeId: string) => void,
//  getHelpState: () => Promise<boolean>
  getHelpState: () => boolean
}

export default createProviderConsumer<ElanState>({
  helpState: true,
  helpId: '10011',
  message: 'Hello!',
  classDef1: "sgb9-center-withhelp",
  classDef2: "sgb9-help",
  toggleHelp: () => {},
  setHelpId: () => {},
//  getHelpState: () => Promise.resolve(true),
  getHelpState: () => true,
},
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);