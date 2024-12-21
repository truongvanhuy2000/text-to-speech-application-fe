import {GetProp, message, Upload, UploadProps} from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

interface UploadFileProps {
    setUploadedFile: (file: File) => void;
}
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];


function UploadFile({ setUploadedFile }: UploadFileProps) {
    const props: UploadProps = {
        name: 'file',
        multiple: false,
        maxCount: 1,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        customRequest: async (options: any) => {
            const { file, onSuccess, onError} = options;
            setUploadedFile(file)
            onSuccess()
        },
        beforeUpload(file: File) {
            // Check file type
            console.log(file.type)
            const isValidType = file.type === 'audio/mpeg' || file.type === 'audio/wav' || file.type === "audio/x-wav";
            if (!isValidType) {
                message.error('You can only upload MP3 or WAV files!');
                return Upload.LIST_IGNORE; // Ignore the file upload
            }

            // Check file size (limit to 10 MB)
            const isSmallEnough = file.size / 1024 / 1024 < 10; // size in MB
            if (!isSmallEnough) {
                message.error('File must be smaller than 10MB!');
                return Upload.LIST_IGNORE; // Ignore the file upload
            }

            return true; // Proceed with the upload
        }
    };

    return (
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                File size must be smaller than 10 MB
            </p>
        </Dragger>
    )
}

export default UploadFile;