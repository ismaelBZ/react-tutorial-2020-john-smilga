import {useState} from 'react'

const ShowHide = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <h2>Something hide above!</h2>
      {isActive && <h3>I'm not hide anymore</h3>}
      <button className='btn' onClick={() => setIsActive(!isActive)}>{isActive ? 'Hide' : 'Show'}</button>
    </>
  )
}

export default ShowHide