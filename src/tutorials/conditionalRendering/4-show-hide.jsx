import {useState, useEffect} from 'react'

const Item = () => {
  const [size, setSize] = useState('default value');
  const checkSize = () => {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    console.log('Run useEffect')
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('Run return')
      window.removeEventListener('resize', checkSize);
    }
  }, []);
  return (
    <>
     <h2>Window size:</h2>
     <h3>size: {size}</h3>
    </>
  )
}

/* The component is rendered and display the window.innerWidth value from useState('default value') then useEffect is called and added the window event listener to dom, but not change the value, it will just changed when the window is resized and component is displayed on screen. When hide the component, it's destructed the useEffect return function is runned. Showing the component again, it will rerendered and after that useEffect run again */

const ShowHide = () => {  
  const [show, setShow] = useState(false)
  return (
    <>
      <h2>Something hide above!</h2>
      {show && <Item />}
      <button className='btn' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
    </>
  )
}

export default ShowHide