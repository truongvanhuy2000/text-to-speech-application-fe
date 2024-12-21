import React from "react";
import {Player} from "react-simple-player";
import {Button, Flex} from "antd";
import {DeleteOutlined, DownloadOutlined} from "@ant-design/icons";

interface AudioPlayerProps {
    src: string;
    onDelete?: () => void; // Hook for delete button,
    allowDelete?: boolean;
    allowDownload?: boolean;
}

const CustomAudioPlayer: React.FC<AudioPlayerProps> = ({src, onDelete, allowDelete, allowDownload}) => {
    const handleDownload = () => {
        // Example content for the file
        const fileName = `converted_${new Date()}.mp3`;
        // Create an anchor element to initiate the download
        const link = document.createElement("a");
        link.href = src;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();

        // Clean up the URL and remove the element
        URL.revokeObjectURL(src);
        document.body.removeChild(link);
    };

    return (
        <Flex align={'center'} justify={'center'} gap={'10px'} style={{flexGrow: 1}}>
            <Player src={src} height={40}/>
            {
                allowDelete &&
                <Button
                    type="primary"
                    danger
                    icon={<DeleteOutlined/>}
                    size="small"
                    onClick={onDelete}
                    style={{
                        height: "40px",
                        width: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                />
            }
            {
                allowDownload &&
                <Button
                    type="primary"
                    icon={<DownloadOutlined/>}
                    size="small"
                    onClick={handleDownload}
                    style={{
                        height: "40px",
                        width: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                />
            }
        </Flex>

    );
};

export default CustomAudioPlayer;