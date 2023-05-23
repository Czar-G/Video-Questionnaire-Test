import { useContext, useState } from "react"
import { VQContext } from '../context/VideoQuestionContext'
const useVideoQuestion = () => {

    let { dataVQ } = useContext(VQContext)
    // let [videoQuestion, setVideoQuestion] = useState([])

    let getDataVQ = () => {
        return dataVQ
    }


    return {
        dataVQ, getDataVQ
    }
}

export default useVideoQuestion