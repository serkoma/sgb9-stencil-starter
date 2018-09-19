// Filename: './data/message.tsx'

import { createProviderConsumer } from '@stencil/state-tunnel';

export interface ElanState {
  helpState: boolean,
  message: string,
  classDef1: string,
  classDef2: string,
  toggleHelp?: () => void
}

export default createProviderConsumer<ElanState>({
  helpState: true,
  message: 'Hello!',
  classDef1: "sgb9-center-withhelp",
  classDef2: "sgb9-help"
},
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);