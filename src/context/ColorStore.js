import React, {useState} from 'react'
import MenuColorContext from './MenuColorContext'

function ColorStore({children}) {
    const [isLit,
        setLit] = useState(false)
    const toggleLight = () => {
        setLit(!isLit)
    }

    // Pass down the state and the onToggleLight action
    return (
        <MenuColorContext.Provider
            value={{
            isLit,
            onToggleLight: toggleLight
        }}>
            {children}
        </MenuColorContext.Provider>
    )
}

export default ColorStore