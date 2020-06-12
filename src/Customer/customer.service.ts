import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {

    customers: Array<Customer> = [];


    constructor() {
    }

    findAll(){
        return this.customers;
    }


    save(customer: Customer){
        this.customers.push(customer);
    }
}