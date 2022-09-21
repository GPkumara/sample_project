import { Controller, Get } from '@nestjs/common';

@Controller('student')
export class StudentController {
    @Get()
    get1():String{
        return "hi"
    }
    }

