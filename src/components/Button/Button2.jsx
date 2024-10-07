import './style.css'

function Button2(props) {
    const { title, type } = props
    // const classes = isDangerous ? 'btn dangerous' : 'btn'
    let style = ''
    console.log(props)
    switch (type) {
        case 'isDangerous':
            style = 'btn dangerous'
            break;
        case 'isPrimary':
            style = 'btn primary'
            break;
        default:
            style = 'btn'
    }
  
    return <button className={style} onClick={() => console.log(props.title)}>{title}</button>

}



export default Button2