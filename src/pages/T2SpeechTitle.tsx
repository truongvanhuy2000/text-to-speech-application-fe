import {Flex, Typography} from 'antd';

const {Title, Text} = Typography;

const title = "Free AI Text To Speech - Become Your Favorite Celebrity"
const description = "Transform your words into realistic celebrity voices with cutting-edge AI technology. Whether for fun, content creation, or professional use, our tool lets you channel the voice of your favorite stars effortlessly. Type, generate, and share – it’s that simple!"

function T2SpeechTitle() {
    return (
        <Flex vertical={true} wrap={true} style={{maxWidth: "1200px"}}>
            <Title level={3}>{title}</Title>
            <Text style={{opacity: "90%", fontSize: "medium"}}>{description}</Text>
        </Flex>
    )
}



export default T2SpeechTitle;