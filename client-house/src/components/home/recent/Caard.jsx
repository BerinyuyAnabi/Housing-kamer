import React from 'react'
import { list } from "../../data/Data"


export default function Caard() {
    return (
        <>
            {list.map((val) => {
                const { id, cover } = val
                return (
                    <div key={id}>
                        <img src={cover} alt="" />
                    </div>
                )
            })}
        </>
    )
}
