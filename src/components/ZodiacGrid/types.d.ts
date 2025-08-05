import { PropsWithChildren } from 'react';

export default interface IZodiacGridProps extends PropsWithChildren {
  onSelectZodiacSign: (sign: string) => void;
}
