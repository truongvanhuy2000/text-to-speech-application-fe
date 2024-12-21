import {Flex, Typography} from "antd";

const { Title, Paragraph, Text, Link } = Typography;

function IconText({children, text}) {
    return (
        <Flex gap={'10px'} align={'center'} justify={'center'}>
            {children}
            <Text strong>{text}</Text>
        </Flex>
    )
}

export default IconText;