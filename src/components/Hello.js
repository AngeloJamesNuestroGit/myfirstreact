
import { useEffect, useState } from "react";
import helloServices from "../services/helloServices";

const Hello = () => {

    //react hooks
    const[hello, setHello] = useState("")
    

    //react hooks use effect
    useEffect ( () =>{
        helloServices.getHello()
        .then(response => {
            setHello(response.data)
        })
        .catch(err => {
            console.log("something went wrong")
        })
    } 
    )

    return hello;

}
    
    export default Hello