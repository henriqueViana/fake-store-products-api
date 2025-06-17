import { Controller, Post, UploadedFile } from "@nestjs/common";
import { S3FileInterceptor } from "../../../common/interceptors/s3-file.interceptor";
import { MulterS3File } from "../../../common/interfaces/multer-s3-file.interface";


@Controller('upload')
export class UploadController {

  @Post('image')
  @S3FileInterceptor('file')
  async uploadImage(@UploadedFile() file: MulterS3File) {
    return {
      url: file.location,
      key: file.key,
    };
  }
}