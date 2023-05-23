import { createContext, useState } from "react";



const VQContext = createContext()

const VQProvider = ({ children, data }) => {
    let [dataVQ, setDataVQ] = useState(7)
    return (
        <VQContext.Provider value={{ dataVQ, data }}>
            {children}
        </VQContext.Provider>
    )
}

export { VQContext, VQProvider }