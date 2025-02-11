import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: string;
  size?: 's' | 'm' | 'l';
}
