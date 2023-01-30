import { Injectable } from "@nestjs/common";
import { AccountEntity } from "../entities";

@Injectable()
export class AccountRepository {
    private readonly database: Array<AccountEntity>;

    constructor() {
        this.database = new Array<AccountEntity>();
    }

    
}