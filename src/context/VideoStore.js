import React, {useState} from 'react'
import VideoContext from './VideoContext'

function VideoStore({children}) {
    const [isVisible,
        setIsVisible] = useState(true)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    // Pass down the state and the onToggleLight action
    return (
        <VideoContext.Provider
            value={{
            isVisible,
            onToggleVisibility: toggleVisibility
        }}>
            {children}
        </VideoContext.Provider>
    )
}

export default VideoStore