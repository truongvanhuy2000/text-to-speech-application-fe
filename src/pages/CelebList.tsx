import {Card, Flex, Tooltip, Typography} from "antd";
import RoundImage from "../components/RoundImage";
import StepText from "../components/StepText";
import {useContext, useState} from "react";
import Celebrity from "../models/Celebrity";
import trumpAudioFile from "../assets/donald-trump-died-like-a-dog.mp3"
import bidenAudioFile from "../assets/biden-skill-issue.mp3"
import elonMuskAudioFile from "../assets/ElonMusk.mp3"
import kamala from "../assets/kamala-harris-do-not-come.mp3"
import {T2SpeechDTOContext} from "./T2Speech";

interface CelebrityProps {
    name: string,
    field: Celebrity,
    imageLink: string,
    audio: any
}

const celebList: CelebrityProps[] = [
    {
        name: "Donald Trump",
        field: Celebrity.DONALD_TRUMP,
        imageLink: "https://imgcdn.stablediffusionweb.com/2024/10/11/9211037f-5d8a-46d8-9cd0-7d96173c552b.jpg",
        audio: trumpAudioFile
    },
    {
        name: "Joe Biden",
        field: Celebrity.JOE_BIDEN,
        imageLink: "https://imgcdn.stablediffusionweb.com/2024/9/24/de3d64e6-f4ad-441d-9ee2-3960c0558782.jpg",
        audio: bidenAudioFile
    },
    {
        name: "Elon Musk",
        field: Celebrity.ELON_MUSK,
        imageLink: "https://imgcdn.stablediffusionweb.com/2024/9/16/70b82384-33c2-4928-a48a-ff01c582fb42.jpg",
        audio: elonMuskAudioFile
    },
    {
        name: "Kamala Haris",
        field: Celebrity.KAMALA,
        imageLink: "https://imgcdn.stablediffusionweb.com/2024/7/26/095bcbce-e5fb-4d26-adb2-e9dad5cdcb71.jpg",
        audio: kamala
    }
]

const title = "Select a celebrity voice you want"

function CelebList() {
    const [selected, setSelected] = useState(null);
    const {t2SpeechDTO, setT2SpeechDTO} = useContext(T2SpeechDTOContext)

    const handlePlayAudio = (audioFile: any) => {
        const audio = new Audio(audioFile);
        audio.play();
    };

    const handleSelect = (index: number) => {
        handlePlayAudio(celebList[index].audio)
        setT2SpeechDTO({...t2SpeechDTO, celeb: celebList[index].field})
        setSelected(index);
    };

    return (
        <Card title={<StepText text={title} number={1}/>}
              style={{maxWidth: "1000px", width: "80%", boxShadow: "0px 0px 15px -2px rgba(191,162,207,0.5)"}}>
            <Flex wrap={true} justify="center" align="center" gap={'20px'}
                  style={{maxHeight: "300px", minHeight: '100px', overflow: "auto"}}>
                {celebList.map((value, index) => {
                    return (
                        <RoundImage onClick={() => handleSelect(index)} key={index}
                                    isSelected={selected === index}
                                    src={value.imageLink}/>

                    )
                })}
            </Flex>
        </Card>

    )
}

export default CelebList;