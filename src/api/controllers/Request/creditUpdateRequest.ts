import { IsNotEmpty, IsNumber } from "class-validator";

export class CreditUpdateRequest {
    @IsNumber()
    @IsNotEmpty()
    public monthlyLimit: number;
}