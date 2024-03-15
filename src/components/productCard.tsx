import { NavLink } from "react-router-dom"
import prod1 from "../assets/products/1.jpg"
import Card from 'react-bootstrap/Card';

export default function ProductCard(){
    return(
        <>
            <NavLink to="/productPage">
                <Card className="w-[10rem] bg-white color-black border-[1px] rounded-lg shadow-md">
                    <Card.Img src={prod1} />
                    <Card.Body className="p-3">
                        <Card.Title>Titulo</Card.Title>
                        <Card.Text className="font-bold">
                            $999.99
                        </Card.Text>
                    </Card.Body>
                </Card>
            </NavLink>
        </>
    )
}