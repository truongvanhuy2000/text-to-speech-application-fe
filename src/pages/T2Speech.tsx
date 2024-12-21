import {Button, Card, Flex, Modal, Tabs} from "antd";
import CelebList from "./CelebList";
import UserInputSection from "./UserInputSection";
import {SiAudiomack} from "react-icons/si";
import T2SpeechTitle from "./T2SpeechTitle";
import {createContext, useRef, useState} from "react";
import T2SpeechService from "../services/T2SpeechService";
import Mode from "../models/Mode";
import T2SpeechDTO from "../models/T2SpeechDTO";
import MockT2SpeechService from "../services/MockT2SpeechService";
import StepText from "../components/StepText";
import IconText from "../components/IconText";
import {PiTextTFill} from "react-icons/pi";
import {FaMicrophoneLines} from "react-icons/fa6";
import CustomAudioRecorder from "../components/audioRecorder/CustomAudioRecorder";
import {BiSolidCloudUpload} from "react-icons/bi";
import UploadFile from "./UploadFile";
import T2SpeechResult from "./T2SpeechResult";
import ServerT2SpeechService from "../services/ServerT2SpeechService";

const t2SpeechService: T2SpeechService = ServerT2SpeechService;

export interface T2SpeechDTOContextProps {
    t2SpeechDTO: T2SpeechDTO;
    setT2SpeechDTO: (T2SpeechDTO: T2SpeechDTO) => void;
}
export const T2SpeechDTOContext = createContext<T2SpeechDTOContextProps>(null);

function T2Speech() {
    const [loading, setLoading] = useState(false);
    const [mode, setMode] = useState<Mode>(Mode.TEXT);
    const [t2SpeechDTO, setT2SpeechDTO] = useState<T2SpeechDTO>(null);
    const [result, setResult] = useState<Blob>(null);

    async function onClickGenerateButton() {
        setLoading(true);
        try {
            const result: Blob = await t2SpeechService.convertToSpeech(t2SpeechDTO, mode)
            console.log("onClickGenerateButton", result)
            setResult(result)
        } catch (e) {

        } finally {
            setLoading(false)
        }
    }

    const isButtonDisabled = () => {
        if (!t2SpeechDTO) {
            return true
        }
        if (!t2SpeechDTO.celeb) {
            return true
        }
        switch (mode) {
            case Mode.TEXT: {
                return t2SpeechDTO.text == null || t2SpeechDTO.text === '';
            }
            case Mode.AUDIO: {
                return t2SpeechDTO.audio == null;
            }
            case Mode.FILE: {
                return t2SpeechDTO.file == null;
            }
        }
    }

    return (
        <>
            <Flex vertical={true} justify={'center'} align={'center'} gap={'30px'}>
                <T2SpeechDTOContext.Provider value={{t2SpeechDTO, setT2SpeechDTO}}>
                    <T2SpeechTitle/>
                    <CelebList/>
                    <UserInputSection setMode={setMode}/>
                    {
                        result && <T2SpeechResult result={result} setResult={setResult}></T2SpeechResult>
                    }
                    <Button
                        loading={loading}
                        disabled={isButtonDisabled()}
                        type="primary"
                        shape="round"
                        icon={<SiAudiomack size={'30px'}/>}
                        style={{width: "300px", height: "60px"}}
                        onClick={onClickGenerateButton}
                    >
                        Start Generating Voice
                    </Button>
                </T2SpeechDTOContext.Provider>
            </Flex>
        </>

    )
}

export default T2Speech;