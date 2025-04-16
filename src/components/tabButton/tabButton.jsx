/* export default function TabButton({children}) {
function handlerClick() {
    console.log("Click the button");
    
}

    return (
        <li className="btn">
            <button onClick={handlerClick} >{children}</button>
        </li>
    );
}
 */
export default function TabButton({children , onSelect}) {
  
        return (
            <li className="btn">
                <button onClick={onSelect} >{children}</button>
            </li>
        );
    }
    