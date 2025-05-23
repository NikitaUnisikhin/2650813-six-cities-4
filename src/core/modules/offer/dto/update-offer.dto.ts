import {City} from '../../../../types/city.enum.js';
import {Housing} from '../../../../types/housing.enum.js';
import {Convenience} from '../../../../types/convenience.enum.js';
import {User} from '../../../../types/user.type.js';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsMongoId,
  IsNumber, IsOptional,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';
import {CreateOfferMessages} from './create-offer-messages.js';

export default class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, {message: CreateOfferMessages.name.minLength})
  @MaxLength(100, {message: CreateOfferMessages.name.maxLength})
    name?: string;

  @IsOptional()
  @MinLength(20, {message: CreateOfferMessages.name.minLength})
  @MaxLength(1024, {message: CreateOfferMessages.name.maxLength})
    description?: string;

  @IsOptional()
  @IsDateString({}, {message: CreateOfferMessages.date.invalidFormat})
    date?: Date;

  @IsOptional()
  @IsString({message: CreateOfferMessages.city.invalidFormat})
    city?: City;

  @IsOptional()
  @IsString({message: CreateOfferMessages.previewImage.invalidFormat})
    previewImage?: string;

  @IsOptional()
  @IsArray({message: CreateOfferMessages.images.invalidFormat})
    images?: string[];

  @IsOptional()
  @IsBoolean({message: CreateOfferMessages.isPremium.invalidFormat})
    isPremium?: boolean;

  @IsOptional()
  @IsBoolean({message: CreateOfferMessages.isFavourite.invalidFormat})
    isFavourite?: boolean;

  @IsOptional()
  @IsNumber({}, {message: CreateOfferMessages.rating.invalidFormat})
    rating?: 1 | 2 | 3 | 4 | 5;

  @IsOptional()
  @IsString({message: CreateOfferMessages.housing.invalidFormat})
    housing?: Housing;

  @IsOptional()
  @IsInt({message: CreateOfferMessages.roomsCount.invalidFormat})
    roomsCount?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  @IsOptional()
  @IsInt({message: CreateOfferMessages.peopleCount.invalidFormat})
    peopleCount?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  @IsOptional()
  @IsNumber({}, {message: CreateOfferMessages.price.invalidFormat})
    price?: number;

  @IsOptional()
  @IsString({message: CreateOfferMessages.conveniences.invalidFormat})
    convenience?: Convenience;

  @IsOptional()
  @IsMongoId({message: CreateOfferMessages.author.invalidId})
    author?: User;

  @IsOptional()
    commentsCount?: number;

  @IsOptional()
  @IsArray({message: CreateOfferMessages.coordinates.invalidFormat})
    coordinates?: number[];
}
