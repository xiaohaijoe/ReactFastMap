import React from 'react';
import './Loading.css';

const Loading = props => {
  const { style, className, value } = props;
  return (
    <div
      style={style}
      className={['fast-map-loading__container', !value ? '' : 'hidden', className]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={'fast-map-loading__animation'}></div>
    </div>
  );
};

export default Loading;
