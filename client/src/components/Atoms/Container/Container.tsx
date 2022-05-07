import style from './Container.module.scss';

const Container: React.FC<{
  className?: string;
}> = ({
  children,
  className = '',
}) => <div
  className={ `${ style['Container'] } ${ className }` }
>
  { children }
</div>;

export default Container;
