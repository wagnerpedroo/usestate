import { useState } from "react"

import styles from "./Count.module.css"

export default function Count() {
    
    const [count, setCount] = useState(0);

    return(
        <div className={styles.container}>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count + 1)}>add</button>
            <button onClick={()=> setCount(0)}>reset</button>
            <button onClick={()=> setCount(count - 1)}>subtract</button>
        </div>
    )
}