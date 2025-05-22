import { useForm } from "react-hook-form"
import Form from "../form/Form"
import UpperCards from "../upper-cards/UpperCards"
import { useState } from "react"

const Main = () => {
    
    const [info, setInfo] = useState({})

    return (
        <>
        <UpperCards info={info}/>
        <Form setInfo={setInfo}/>
        </>
    )

}

export default Main