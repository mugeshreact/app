import React from 'react'

const Bootstrap = () => {
  // function clicked(){
    
  // }
  return (
    <div>
     <ul className="nav bg-secondary">
  <li className="nav-item">
    <a className="nav-link active" id='transform-0' aria-current="page" href="#" onClick={
      ()=>clicked()
    }>Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id='transform-1' href="#" onClick={
      ()=>clicked()
    }>Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id='transform-2' href="#" onClick={
      ()=>clicked()
    }>Link-1</a>
  </li>
</ul>

    </div>
  )
}

export default Bootstrap;


{/* <button

onClick={() => setHeaderTabNo(value.id)}

className={

  headerTabNo === value.id

    ? 'activeBtnDT'

    : 'inactiveBtnDT'

}

>

{value.title}{' '}

</button> */}