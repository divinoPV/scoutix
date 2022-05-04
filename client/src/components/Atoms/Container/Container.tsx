import styles from './Container.module.scss';

const Container: React.FC<{
  className?: string;
}> = ({
  children,
  className = '',
}) => <div
  className={ `${ styles['Container'] } ${ className }` }
>
  { children }
</div>;

export default Container;
