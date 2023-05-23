import { Button } from "@mui/material"
import "./cardVideo.css"
const CardVideo = ({ dataVideo }) => {
    return (
        <div className="video-card">
            <div className="video-card__video">Video</div>
            
                <div className="video-card__question-box">
                    
                        <div className="video-card__question-square"></div>
                        <Button title={dataVideo.question}>
                        {dataVideo.question}
                        {/* <div className="video-card__question-text" title={dataVideo.question}>{dataVideo.question}</div> */}
                        </Button>
                        <div className="video-card__question-square"></div>
                    
                </div>
            
            
        </div>
    )
}

export default CardVideo