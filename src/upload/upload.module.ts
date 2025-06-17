import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config'
import { UploadController } from "./presentation/controllers/UploadController";

@Module({
  imports: [ConfigModule],
  controllers: [UploadController]
})
export class UploadModule {}