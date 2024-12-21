import {AudioRecorder} from "react-audio-voice-recorder";
import "./CustomAudioRecorder.css"
import {Flex, Typography} from "antd";
import {useState} from "react";
import trumpAudioFile from "../../assets/donald-trump-died-like-a-dog.mp3"
import CustomAudioPlayer from "../CustomAudioPlayer";

interface CustomAudioRecorderProps {
    setUploadedAudio: (blob: Blob) => void;
}

function CustomAudioRecorder({setUploadedAudio}: CustomAudioRecorderProps) {
    const [currentAudio, setCurrentAudio] = useState<Blob>(null);


    function onRecordingComplete(blob: Blob) {
        setUploadedAudio(blob);
        setCurrentAudio(blob);
    }

    return (
        <Flex vertical={true} gap={'10px'}>
            {currentAudio &&
                <CustomAudioPlayer allowDelete src={URL.createObjectURL(currentAudio)} onDelete={() => {
                    setCurrentAudio(null)
                    setUploadedAudio(null)
                }}/>
            }

            <Flex className={"audio-container"} style={{width: '100%', height: '200px'}} gap={'20px'} vertical={true}
                  justify={'center'} align={'center'}>
                <AudioRecorder
                    onRecordingComplete={onRecordingComplete}
                    audioTrackConstraints={{
                        noiseSuppression: true,
                        echoCancellation: true,
                    }}
                    downloadFileExtension="mp3"
                />
                <Typography.Text>10 ~20 seconds of speaking is advisable.</Typography.Text>
            </Flex>
        </Flex>
    )
}

export default CustomAudioRecorder;