import { PropsWithChildren } from 'react';

export default interface IToggleProps extends PropsWithChildren {
  enableFn?: () => void;
  disableFn?: () => void;
  enabled?: boolean;
}
