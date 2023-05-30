import { ConfigurableModuleBuilder } from '@nestjs/common';
import { TwilioModuleOptions } from './twilio.module';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<TwilioModuleOptions>()
    .setExtras<{
      isGlobal?: boolean;
    }>({ isGlobal: false }, (definition, extras) => ({
      ...definition,
      global: extras.isGlobal,
    }))
    .setClassMethodName('forRoot')
    .build();
