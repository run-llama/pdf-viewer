import React from 'react';
import clsx from 'clsx';
import './index.css';

type TestProps = {
  a: string;
};

export const Test: React.FC<TestProps> = ({ a }) => {
  return <div className={clsx('test')}>{a}123123</div>;
};

export default Test;
