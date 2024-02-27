import {useState, useEffect} from 'react'

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    window.addEventListener('resize', setSize(window.innerWidth))
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize);
  }, [])
  return (
    <>
     <h2>Window size:</h2>
     <h3>size: {size}</h3>
    </>
  )
}

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