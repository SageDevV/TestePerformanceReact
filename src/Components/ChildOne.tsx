import { memo } from "react"

const ChildOne = (() => {
    console.log('ChildOne')
    return(<div>ChildOne</div>)
})

export default memo(ChildOne)