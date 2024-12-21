import {Card, Flex, Typography} from "antd";
import CustomAudioPlayer from "../components/CustomAudioPlayer";

const title = "Result";
function T2SpeechResult({result, setResult}) {
    const src = URL.createObjectURL(result)
    return (
        <Card style={{maxWidth: "1000px", width: "80%", boxShadow: "0px 0px 15px -2px rgba(191,162,207,0.5)"}}>
            <Flex style={{width:'100%'}} align={'center'} gap={'20px'}>
                <Typography.Text>Result</Typography.Text>
                <CustomAudioPlayer allowDelete allowDownload src={src} onDelete={() => setResult(null)}/>
            </Flex>

        </Card>
    )
}

export default T2SpeechResult;