export class User {
  constructor(public firstName = '',
              public lastName = '',
              public email = '',
              public needDelivery = false,
              public addressType = 'home',
              public street?: string,
              public country = '',
              public city?: string,
              public zip?: string) {
  }
}
