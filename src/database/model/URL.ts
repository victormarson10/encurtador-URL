import { prop, Typegoose } from '@hasezoey/typegoose'

export class URL extends Typegoose {
    @prop({ require: true })
    hash: string

    @prop({ require: true})
    originURL: string

    @prop({ require: true})
    shortURL: string
}

export const URLModel = new URL ().getModelForClass(URL)