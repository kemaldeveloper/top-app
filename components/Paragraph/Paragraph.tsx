import cn from 'classnames';
import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';

export const Paragraph = ({ children, size = 'm' }: ParagraphProps) => {
  switch (size) {
    case 's':
      return <p className={cn(styles.p, styles.small)}>{children}</p>;
    case 'm':
      return <p className={cn(styles.p, styles.medium)}>{children}</p>;
    case 'l':
      return <p className={cn(styles.p, styles.large)}>{children}</p>;
    default:
      return <></>;
  }
};
