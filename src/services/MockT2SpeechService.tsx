import T2SpeechService from "./T2SpeechService";
import T2SpeechDTO from "../models/T2SpeechDTO";
import Mode from "../models/Mode";
import MockAudioFile from "../assets/TrumpMakeAmeriaGreatAgain.mp3"

const MockT2SpeechService: T2SpeechService = {
    async convertToSpeech(dto: T2SpeechDTO, mode: Mode): Promise<Blob> {
        const response = await fetch(MockAudioFile); // Fetch the imported audio file
        const audioBlob = await response.blob(); // Convert to Blob
        return audioBlob;
    },
};

export default MockT2SpeechService;