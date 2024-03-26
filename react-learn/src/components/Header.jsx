import React,{memo} from 'react'

const Header = memo(function Header({title}){
  return <div>{title}</div>
})

// const SomeComponent = memo(function SomeComponent(props) {
//   // ...
// });

export default Header;