import { FeatherService } from './feather.service';
import { Injectable } from '@angular/core';


@Injectable()
export class MailService {

  mailService: any;

  constructor(private featherService: FeatherService) {
    this.mailService = featherService.service('emails')
  }

  public create(input) {
    return this.mailService.create(input)
  }

  public find(input) {
    return this.mailService.find(input)
  }

}