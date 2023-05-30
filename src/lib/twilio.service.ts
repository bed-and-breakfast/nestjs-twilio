import {Inject, Injectable} from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN } from './twilio.module-definition';
import { TwilioModuleOptions } from './twilio.module';
import Twilio from 'twilio';
import TwilioType from 'twilio/lib/rest/Twilio';

@Injectable()
export class TwilioService {
  private readonly twilioSdk: TwilioType;

  constructor(@Inject(MODULE_OPTIONS_TOKEN) options: TwilioModuleOptions) {
    this.twilioSdk = new Twilio.Twilio(
      options.accountSid,
      options.authToken,
      options
    );
  }

  public get client(): TwilioType {
    return this.twilioSdk;
  }
}
