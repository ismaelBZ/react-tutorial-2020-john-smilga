

export default function ErrorExample() {

  let data = 2222;
  
  const handleClick = () => {
    console.log(data);
    data = 3333;
    console.log(data);
  }

  return (
    <>
      <button onClick={ () => handleClick()}> {data} </button>
    </>
  );
}
