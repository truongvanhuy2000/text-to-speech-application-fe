import {Image} from 'antd';
import {Suspense} from "react";
import "./RoundImage.css"

function RoundImage({src, isSelected, onClick}) {
    return (
        <div className={"round-image"}
             onClick={onClick}
             style={{
                 width: 80, height: 80, borderRadius: '50%', overflow: 'hidden',
                 border: isSelected ? "4px solid #6b00ff": "1px dashed transparent",
                 transform: isSelected ? `scale(1.1)` : `none`,
                 color: "#"
             }}>
            <Suspense>
                <Image
                    src={src} // Replace with your image URL
                    width={'100%'} // Ensure the width matches the container
                    height={'100%'} // Ensure the height matches the container
                    preview={false} // Disable the preview if not needed
                />
            </Suspense>
        </div>
    )
}

export default RoundImage;