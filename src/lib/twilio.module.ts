import { Global, Module } from '@nestjs/common';
import { TwilioService } from './twilio.service';
import { ConfigurableModuleClass } from './twilio.module-definition';
import type { ClientOpts } from 'twilio/lib/base/BaseTwilio';

export type TwilioModuleOptions = {
  accountSid: string | undefined;
  authToken: string | undefined;
  options?: ClientOpts | undefined;
};

@Global()
@Module({
  providers: [TwilioService],
  exports: [TwilioService],
})
export class TwilioModule extends ConfigurableModuleClass {}
