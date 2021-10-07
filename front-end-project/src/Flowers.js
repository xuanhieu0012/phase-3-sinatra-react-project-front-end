
import { useEffect } from "react";

function Flowers() {
    useEffect(() => {
        fetch("http://localhost:9292/flowers")
        .then(response => response.json())
        .then(flowerArray => {
            console.log(flowerArray)
        })
    }, [])
    return <div> "Flowers are colorful"</div>
}

export default Flowers