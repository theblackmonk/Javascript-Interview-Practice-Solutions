function Backdrop(props){
    //props.onClick is a custom prop name we are passing down for a custom component
    return <div className='backdrop' onClick={props.onClick}/>
}

export default Backdrop