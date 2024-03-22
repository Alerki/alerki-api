import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MasterProfile } from '../master-profile/master-profile.model';

@ObjectType()
export class MasterSchedule {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false,defaultValue:'draft'})
    status!: string;

    @Field(() => Date, {nullable:true})
    date_created!: Date | null;

    @Field(() => Date, {nullable:true})
    date_updated!: Date | null;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => Date, {nullable:true})
    startTime!: Date | null;

    @Field(() => Date, {nullable:true})
    endTime!: Date | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    dayOff!: boolean;

    @Field(() => String, {nullable:false})
    masterProfile!: string;

    @Field(() => MasterProfile, {nullable:false})
    MasterProfile?: MasterProfile;
}
