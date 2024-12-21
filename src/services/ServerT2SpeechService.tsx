import T2SpeechService from "./T2SpeechService";
import T2SpeechDTO from "../models/T2SpeechDTO";
import Mode from "../models/Mode";
import axios from "axios";

async function convertText(dto: T2SpeechDTO): Promise<Blob>  {
    const formData = new FormData();

    // Append data to FormData (you can append any key-value pair)
    formData.append('text', dto.text);
    formData.append('speaker-id', 'p225');
    formData.append('language-id', 'en');
    formData.append('to', dto.celeb);

    try {
        let response = await axios.post<Blob>(`/text-conversion`, formData, {
            responseType: 'blob',
        })
        return response.data
    } catch (e) {
        console.error(e);
        throw Error("Cant convert text");
    }
}

async function convertFile(dto: T2SpeechDTO): Promise<Blob> {
    const formData = new FormData();

    // Append data to FormData (you can append any key-value pair)
    formData.append('text_input', dto.celeb);
    formData.append('source_wav', dto.file);

    try {
        let response = await axios.post<Blob>(`/conversion-to`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            responseType: 'blob',
        })
        return response.data
    } catch (e) {
        console.error(e);
        throw Error("Cant convert text");
    }
}

// function convertOggToMp3(oggBlob) {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//
//         reader.onload = function(event) {
//             const arrayBuffer = event.target.result;
//             // @ts-ignore
//             const wavData = new Int8Array(arrayBuffer);
//
//             // Initialize Lame encoder with settings
//             const encoder = new lamejs.Mp3Encoder(1, 44100, 128); // Mono, 44.1kHz, 128kbps
//
//             // Encoding the WAV data to MP3
//             let mp3Data = [];
//             const samples = new Int16Array(wavData.buffer);
//
//             let remaining = samples.length;
//             let offset = 0;
//             const maxSamplesPerFrame = 1152;
//
//             while (remaining >= maxSamplesPerFrame) {
//                 const chunk = samples.subarray(offset, offset + maxSamplesPerFrame);
//                 const mp3Chunk = encoder.encodeBuffer(chunk);
//                 mp3Data.push(new Int8Array(mp3Chunk));
//                 remaining -= maxSamplesPerFrame;
//                 offset += maxSamplesPerFrame;
//             }
//
//             // Finalizing the encoding process
//             const mp3End = encoder.flush();
//             mp3Data.push(new Int8Array(mp3End));
//
//             // Creating the final MP3 Blob from the data
//             const mp3Blob = new Blob(mp3Data, { type: 'audio/mp3' });
//
//             // Resolve with the MP3 Blob
//             resolve(mp3Blob);
//         };
//
//         reader.onerror = function(error) {
//             reject(error);
//         };
//
//         // Read the OGG Blob as an ArrayBuffer
//         reader.readAsArrayBuffer(oggBlob);
//     });
// }
//
const blobToFile = (blob: Blob, fileName: string): File => {
    return new File([blob], fileName, { type: blob.type });
};

const ServerT2SpeechService: T2SpeechService = {
    async convertToSpeech(dto: T2SpeechDTO, mode: Mode): Promise<Blob> {
        if (mode === Mode.TEXT) {
            return await convertText(dto)
        } else if (mode === Mode.FILE) {
            return await convertFile(dto)
        } else if (mode === Mode.AUDIO) {
            dto.file = blobToFile(dto.audio, "audio.ogg");
            return await convertFile(dto)
        }
    }

}

export default ServerT2SpeechService;