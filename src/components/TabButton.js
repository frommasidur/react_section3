export default function TabButton({isSelected,onSelect,children}) {
    return (
        <li>
            <button className={isSelected? 'active':null} onClick={onSelect}>{children}</button>
        </li>
    );
}