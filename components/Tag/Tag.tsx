import cn from 'classnames';
import { JSX } from 'react';
import styles from './Tag.module.css';
import { TagProps } from './Tag.props';

export const Tag = ({ children, size = 's', className, href, color = 'ghost', ...props }: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size === 's',
        [styles.medium]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.grey]: color === 'grey',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
