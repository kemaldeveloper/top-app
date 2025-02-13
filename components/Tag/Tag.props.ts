import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: string;
  size?: 's' | 'm';
  color?: 'ghost' | 'red' | 'green' | 'grey' | 'primary';
  href?: string;
}
