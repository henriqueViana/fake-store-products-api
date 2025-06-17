
import { applyDecorators, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import * as AWS from 'aws-sdk'
import * as multerS3 from 'multer-s3'

export const S3FileInterceptor = (fieldName: string) => {
  const { 
    AWS_ACCESS_KEY_ID, 
    AWS_SECRET_ACCESS_KEY, 
    AWS_REGION, 
    AWS_S3_BUCKET 
  } = process.env

  const s3 = new AWS.S3({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
  })

  return applyDecorators(
    UseInterceptors(
      FileInterceptor(fieldName, {
        storage: multerS3({
          s3,
          bucket: AWS_S3_BUCKET,
          contentType: multerS3.AUTO_CONTENT_TYPE,
          key: (req, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`
            cb(null, fileName)
          }
        })
      })
    )
  )
}