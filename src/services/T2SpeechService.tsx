import T2SpeechDTO from "../models/T2SpeechDTO";
import Mode from "../models/Mode";

interface T2SpeechService {
    convertToSpeech: (dto: T2SpeechDTO, mode: Mode) => Promise<Blob>,
}

export default T2SpeechService;

