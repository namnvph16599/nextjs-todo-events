import Link from 'next/link'
import classes from './button.module.css'

const ButtonExplore = (props: any) => {
    return (
        <Link href={props.link}>
            <a className={classes.btn}>{props.children}</a>
        </Link>
    )
}

export default ButtonExplore