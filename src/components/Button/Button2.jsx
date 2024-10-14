import { useState } from "react";
import './style.css';
import { classNames } from '../../utils';

function Button2(props) {
    const { title, isDanger, isPrimary, m, l, onClick } = props;
    const [counter, setCounter] = useState(0)
    const [style1, setStyle] = useState(false)


    console.log('render Button')
    // const classes = isDangerous ? 'btn dangerous' : 'btn'
    let style = ''
    console.log(props)


    return <button className={classNames('btn', { dangerous: isDanger, primary: isPrimary, 'btn_m': m, 'btn_l': l, temp: style1 }, ['color-red'])}
        onClick={() => {
            onClick()
            setCounter((prevState) => prevState + 1)
            setStyle((prevState) => !prevState)
        }}>{`${title}-кликнули: ${counter} раз`}</button>

}

export default Button2

