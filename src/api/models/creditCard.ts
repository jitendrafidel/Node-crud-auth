import { IsNumber, IsString } from "class-validator";

export class CreditCard {
    public id: number;
    @IsString()
    public type: string;
    @IsString()
    public number: string;
    @IsString()
    public securityCode: string;
    @IsNumber()
    public monthlyLimit: number;
    @IsNumber()
    public childId: number;
    public expiryDate: Date;
    public createdAt: Date;
    public updatedAt: Date;
}
