
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';
import { CustomerDto } from './customer.dto';
import { plainToClass } from "class-transformer";

@Controller('/costumers')
export class CustomerController {

    constructor(private readonly service: CustomerService) {
    }

    @Get()
    findAll(){
        return this.service.findAll();
    }


    @Post()
    save(@Body() customerDto: CustomerDto) {
        const customer = plainToClass(Customer, customerDto);
        return this.service.save(customer);
    }

}