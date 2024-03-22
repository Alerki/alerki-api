import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_settingsMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    project_name?: string;

    @Field(() => String, {nullable:true})
    project_url?: string;

    @Field(() => String, {nullable:true})
    project_color?: string;

    @Field(() => String, {nullable:true})
    project_logo?: string;

    @Field(() => String, {nullable:true})
    public_foreground?: string;

    @Field(() => String, {nullable:true})
    public_background?: string;

    @Field(() => String, {nullable:true})
    public_note?: string;

    @Field(() => Int, {nullable:true})
    auth_login_attempts?: number;

    @Field(() => String, {nullable:true})
    auth_password_policy?: string;

    @Field(() => String, {nullable:true})
    storage_asset_transform?: string;

    @Field(() => String, {nullable:true})
    custom_css?: string;

    @Field(() => String, {nullable:true})
    storage_default_folder?: string;

    @Field(() => String, {nullable:true})
    mapbox_key?: string;

    @Field(() => String, {nullable:true})
    project_descriptor?: string;

    @Field(() => String, {nullable:true})
    default_language?: string;

    @Field(() => String, {nullable:true})
    public_favicon?: string;

    @Field(() => String, {nullable:true})
    default_appearance?: string;

    @Field(() => String, {nullable:true})
    default_theme_light?: string;

    @Field(() => String, {nullable:true})
    default_theme_dark?: string;
}
