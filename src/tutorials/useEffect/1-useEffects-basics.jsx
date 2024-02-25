import {useEffect} from 'react';

export default function UseEffectBasics() {
  useEffect(() => {
    console.log('call useEffect')
  });
  console.log('render component');
  return(
    <>
    </>
  );
}