import { IconSquareCheck } from '@tabler/icons-react'

export default function Filters(){
    return(
        <div>
            <div id="filter_categ">
                <h2>Categorías</h2>
                <ul>
                    <li>
                        <input type="checkbox" className="sr-only peer"/>
                        <span>
                            <IconSquareCheck className=""/>
                        </span>
                        Muebles de hogar
                    </li>
                </ul>
            </div>
                
        </div>
    )
}