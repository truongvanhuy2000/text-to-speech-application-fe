import {Card, Input, Tabs, Upload} from "antd";
import {FaMicrophoneLines} from "react-icons/fa6";
import IconText from "../components/IconText";
import {PiTextTFill} from "react-icons/pi";
import {BiSolidCloudUpload} from "react-icons/bi";
import StepText from "../components/StepText";
import UploadFile from "./UploadFile";
import CustomAudioRecorder from "../components/audioRecorder/CustomAudioRecorder";
import Mode from "../models/Mode";
import {useContext} from "react";
import {T2SpeechDTOContext} from "./T2Speech";

const { TabPane } = Tabs;
const { TextArea } = Input;
const title = "Input text or upload your record bellow"
function UserInputSection({setMode}) {
    const {t2SpeechDTO, setT2SpeechDTO} = useContext(T2SpeechDTOContext)

    function onChangeMode(activeKey: string) {
        switch (activeKey) {
            case "1": setMode(Mode.TEXT); break;
            case "2": setMode(Mode.AUDIO); break;
            case "3": setMode(Mode.FILE); break;
        }
    }

    return (
        <Card title={<StepText text={title} number={2}/>} style={{maxWidth: "1000px", width: "80%", boxShadow: "0px 0px 15px -2px rgba(191,162,207,0.5)"}}>
            <Tabs defaultActiveKey="1" tabPosition="left" onChange={onChangeMode}>
                <TabPane tab={<IconText text={'Text'}><PiTextTFill size='25px'/></IconText>} key="1" >
                    <TextArea
                        onChange={event => setT2SpeechDTO({...t2SpeechDTO, text: event.target.value})}
                        placeholder="Please input your text here"
                        autoSize={{ minRows: 5, maxRows: 6 }}
                    />
                </TabPane>
                <TabPane tab={<IconText text={'Record'}><FaMicrophoneLines size='25px'/></IconText>} key="2">
                    <CustomAudioRecorder setUploadedAudio={(blob: Blob) => setT2SpeechDTO({...t2SpeechDTO, audio: blob})}/>
                </TabPane>
                <TabPane tab={<IconText text={'Upload'}><BiSolidCloudUpload size='25px'/></IconText>} key="3">
                    <UploadFile setUploadedFile={(file: File) => setT2SpeechDTO({...t2SpeechDTO, file: file})}/>
                </TabPane>
            </Tabs>
        </Card>
    )
}

export default UserInputSection;