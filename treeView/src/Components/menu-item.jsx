import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa'
import './styles.css'


export default function MenuItem({item}){

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]
        })
        console.log(displayCurrentChildren);

    }
    return (
        <li>
            <div className="list-item">
            <p>{item.label}</p>
            {
                item && item.children && item.children.length ? 
                <span onClick={()=>handleToggleChildren(item.label)}>
                    {
                        displayCurrentChildren[item.label] ? 
                        <FaMinus color="white" size={20}/>
                        :
                        <FaPlus color="white" size={20}/>
                    }
                </span>
                : null
            }
            </div>

            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
                <MenuList list={item.children}/>
                : null
            }
        </li>
    )
}