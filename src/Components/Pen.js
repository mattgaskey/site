import React from 'react';
import Codepen from 'react-codepen-embed';

const Pen = (props) => {
  return (
    <Codepen
      hash={props.hash}
      user={props.user}
      defaultTab={props.defaultTab}
      preview={false}
    />
  );
};

export default Pen;
