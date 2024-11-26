export default function TabButton({children,isSelected,...restProps}) {
    
    console.log('redering tabbutton component');

    return (
        <li>
            <button className={isSelected?'active':''} {...restProps}>{children}</button>
        </li>
    )
}
