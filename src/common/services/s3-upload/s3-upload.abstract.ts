// import { FileUpload } from 'graphql-upload';

export abstract class AbstractS3Upload {
  abstract uploadFiles(files): Promise<string[]>
}