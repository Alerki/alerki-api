import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MasterService } from '../master-service/master-service.model';
import { languages } from '../languages/languages.model';
import { Service } from '../service/service.model';
import { Service_translationsCount } from './service-translations-count.output';

@ObjectType()
export class Service_translations {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    Service_id!: string | null;

    @Field(() => String, {nullable:true})
    languages_id!: string | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [MasterService], {nullable:true})
    MasterService?: Array<MasterService>;

    @Field(() => languages, {nullable:true})
    languages?: languages | null;

    @Field(() => Service, {nullable:true})
    Service?: Service | null;

    @Field(() => Service_translationsCount, {nullable:false})
    _count?: Service_translationsCount;
}
