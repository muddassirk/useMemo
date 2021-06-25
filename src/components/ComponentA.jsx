import React, {useEffect} from 'react'
let intialValue = 0

const ComponentA = () => {

    useEffect(()=>{
        return(
            intialValue ++
        )
    })

    return (
        <div>
            <p>ComponentA is : {intialValue}</p>
        </div>
    )
}

export default ComponentA
