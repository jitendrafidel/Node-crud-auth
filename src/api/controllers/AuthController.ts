
import { Response } from 'express';
import {
    Body,
    Get,
    HttpCode, JsonController, Post, Res,
} from 'routing-controllers';
import { Service } from 'typedi';
import { AuthService } from '../services/AuthService';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { UserLoginRequest } from './Request/UserLoginRequest';
import { User } from '../models/user';


@JsonController('/auth')
export class AuthController {

    constructor(@Logger(__filename) private logger: LoggerInterface, private authService: AuthService) { }

    @Post('/login')
    @HttpCode(200)
    public async login(@Body() body: UserLoginRequest, @Res() response: Response): Promise<any> {
        return response.status(200).send(await this.authService.login(body));
    }

    @Post('/register')
    @HttpCode(201)
    public async register(@Body() body: User, @Res() response: Response): Promise<any> {
        return response.status(201).send(await this.authService.register(body));
    }

    @Get('/hello')
    @HttpCode(200)
    public async hello(@Res() response: Response): Promise<any> {
        return response.status(200).send('hello');
    }


}
