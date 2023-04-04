import { memo } from "react"

const ChildTwo = (() => {
    console.log('ChildTwo')
    return(<div>ChildTwo</div>)
})

export default memo(ChildTwo)