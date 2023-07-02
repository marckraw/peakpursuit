import {FC, ReactNode} from "react";
import clsx from "clsx";
import styles from './brand-highlight.module.scss'

interface BrandHighlightProps {
    children: ReactNode;
    bold?: boolean;
}

export const BrandHighlight: FC<BrandHighlightProps> = (props) => {
    const {children, bold} = props

    return (
        <span className={clsx(
            'peakpursuit',
            styles.brandHighlight,
            bold ? styles.bold : ''
        )}>{children}</span>
    )
}