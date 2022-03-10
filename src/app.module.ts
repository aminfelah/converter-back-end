import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Convertion } from './convertions/entities/convertion.entity';
import { ConvertionsModule } from './convertions/convertions.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'converter',
    synchronize: true,
    entities:[Convertion],
    autoLoadEntities:true,
  }),ConvertionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
