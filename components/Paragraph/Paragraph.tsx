import cn from 'classnames';
import { JSX } from 'react';
import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';

export const Paragraph = ({ children, size = 'm', className, ...props }: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size === 's',
        [styles.medium]: size === 'm',
        [styles.large]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
