import React, { useEffect } from 'react';

import { Map } from '@/components';
import styles from './DataV2.module.less';
const { useMap } = Map;

const DataV2 = props => {
  const [map] = useMap();
  useEffect(() => {
    // todo xxx
  }, [map]);
  function onGoDataV2() {
    props.history.push('/demo/data-v2');
  }
  function onGoDataV3() {
    props.history.push('/demo/data-v3');
  }
  return <></>;
};

export default DataV2;
