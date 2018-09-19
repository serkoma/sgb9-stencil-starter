import { createProviderConsumer } from '@stencil/state-tunnel';

export interface SiteState {
  isLeftSidebarIn: boolean,
  isHilfeAn: boolean,
  toggleLeftSidebar: () => void
}

export default createProviderConsumer<SiteState>({
    isLeftSidebarIn: false,
    isHilfeAn: true,
    toggleLeftSidebar: () => {}
  },
  (subscribe, child) => <context-consumer subscribe={subscribe} renderer={child} />
);