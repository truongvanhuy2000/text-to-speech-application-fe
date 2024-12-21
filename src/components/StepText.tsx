import {Flex, Typography} from "antd";

const { Title, Paragraph, Text, Link } = Typography;

function StepText({number, text}) {
    return (
        <Flex gap={'10px'} align={'center'} justify={'center'}>
            <div style={{
                background: 'linear-gradient(104deg, rgba(114,46,209,1) 30%, rgba(188,117,224,1) 100%)',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: '1/1',
                width: '30px'
            }}>
                <Text style={{color: 'white'}} strong>{number}</Text>
            </div>
            <Text strong>{text}</Text>
        </Flex>
    )
}

export default StepText;