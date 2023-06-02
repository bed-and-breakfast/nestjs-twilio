import { Test } from '@nestjs/testing';
import { TwilioModule } from './twilio.module';
import { TwilioService } from './twilio.service';
import TwilioType from 'twilio/lib/rest/Twilio';

describe('CatsController', () => {
  let twilioService: TwilioService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        TwilioModule.forRoot({
          accountSid: 'AC1234',
          authToken: '1234',
        }),
      ],
    }).compile();

    twilioService = moduleRef.get(TwilioService);
  });

  describe('TwilioService', () => {
    it('should be instance of TwilioService', async () => {
      expect(twilioService).toBeInstanceOf(TwilioService);
    });

    it('should be instance of TwilioService', async () => {
      expect(twilioService.client).toBeInstanceOf(TwilioType);
    });
  });
});
