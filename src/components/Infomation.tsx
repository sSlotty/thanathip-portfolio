import React from 'react'

type Props = {
    match: {
        params: {
            id: string
        }
    }
}

const Infomation = (props: Props) => {

    console.log(props)
    const { id } = props.match.params
    return (
        <div>infomation { id }</div>
    )
}

export default Infomation