
import { Response } from 'express';
import {
    Body,
    Delete,
    Get,
    HttpCode, JsonController, Params, Post, Put, QueryParams, Req, Res, UseBefore,
} from 'routing-controllers';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { CreditCardService } from '../services/CreditCardService';
import { CreditCard } from '../models/CreditCard';
import { validateToken } from '../../../src/utils/commonUtil';
import { CreditUpdateRequest } from './Request/creditUpdateRequest';

@UseBefore(validateToken)
@JsonController('/credit')
export class CreditCardController {

    constructor(@Logger(__filename) private logger: LoggerInterface, private creditCardService: CreditCardService) { }

    @Post()
    @HttpCode(200)
    public async create(@Body() body: CreditCard, @Res() response: Response): Promise<any> {
        return response.status(200).send(await this.creditCardService.create(body));
    }

    @Put('/:id')
    @HttpCode(201)
    public async update(@Body() body: CreditUpdateRequest, @Res() response: Response, @Params() params: any): Promise<any> {
        return response.status(201).send(await this.creditCardService.update(params.id, body));
    }

    @Get('/:id')
    @HttpCode(200)
    public async findCreditCard(@Res() response: Response, @Params() params: any): Promise<any> {
        return response.status(200).send(await this.creditCardService.find(params.id, params));
    }
    @Get()
    @HttpCode(200)
    public async findAllCreditCard(@Res() response: Response, @Req() request: any, @QueryParams() queryParams: any): Promise<any> {
        return response.status(200).send(await this.creditCardService.findAll(queryParams));
    }

    @Delete('/:id')
    public async deleteCreditCard(@Res() response: Response, @Params() params: any): Promise<any> {
        return response.status(201).send(await this.creditCardService.deleteCreditCard(params.id));
    }



}
