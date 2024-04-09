import { NavLink } from "react-router-dom"
import Card from 'react-bootstrap/Card';

export default function Card2(){
    return(
        <>
            <NavLink to="/productPage">
                <Card className="w-[10rem] bg-white color-black border-[1px] rounded-lg shadow-md">
                    <Card.Img src="src\assets\products\2.jpg" />
                    <Card.Body className="p-3">
                        <Card.Title>Titulo</Card.Title>
                        <Card.Text className="font-bold">
                            COP $888.88
                        </Card.Text>
                    </Card.Body>
                </Card>
            </NavLink>
        </>
    )
}