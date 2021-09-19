import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ChildEntity } from './ChildEntity';
// import { AppointmentDetailEntity } from './AppointmentDetailEntity';

@Entity({ name: 'credit_card' })
export class CreditCardEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: 'type', nullable: false })
    public type: string;

    @Column({ name: 'number', nullable: true })
    public number: string;

    @Column({ name: 'security_code', nullable: true })
    public securityCode: string;

    @Column({ name: 'expiry_date', nullable: true })
    public expiryDate: Date;

    @Column({ name: 'monthly_limit', nullable: true })
    public monthlyLimit: number;

    @Column({ name: 'child_id' })
    public childId: number;

    @ManyToOne(() => ChildEntity)
    @JoinColumn({ name: 'child_id', referencedColumnName: 'id' })
    public childDetails: ChildEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
