import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import path, { join } from 'path';
import { createReadStream } from 'fs';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) { }


  @Get('avatar/:id')
  findOne(@Param('id') id: string, @Res() res: any) {
    const file = createReadStream(join(process.cwd(), `uploads/avatars/avatar-img--${id}.webp`));
    file.pipe(res);
  }

  @Get()
  findAll() {
    return this.fileService.findAll();
  }

  @Post()
  create(@Body() createFileDto: CreateFileDto) {
    return this.fileService.create(createFileDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    return this.fileService.update(+id, updateFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileService.remove(+id);
  }
}
