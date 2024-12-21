import Celebrity from "./Celebrity";

interface T2SpeechDTO {
    celeb: Celebrity,
    text?: string,
    file?: File,
    audio?: Blob
}

export default T2SpeechDTO;