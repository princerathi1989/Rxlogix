export interface IContact {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const contacts: IContact[] = [
  {
    "name": "Contact AA",
    "email": "c001@email.com",
    "phone": "9898764556",
    "address": "B-1501, Hyde Park, Noida, U.P."
  },
  {
    "name": "Contact AB",
    "email": "c002@email.com",
    "phone": "9898761009",
    "address": "K-1001, AGV-1, Noida, U.P."
  },
  {
    "name": "Contact AC",
    "email": "c003@email.com",
    "phone": "9898711226",
    "address": "C-1701, Amrapali, Noida, U.P."
  },
  {
    "name": "Contact AD",
    "email": "c004@email.com",
    "phone": "9867590056",
    "address": "D-401, Hyde Park, Noida, U.P."
  },
  {
    "name": "Contact AE",
    "email": "c005@email.com",
    "phone": "9800124516",
    "address": "G-801, AGV-2, Noida, U.P."
  },
  {
    "name": "Contact AF",
    "email": "c006@email.com",
    "phone": "9890077512",
    "address": "C-301, Skytech, Noida, U.P."
  }
];

export class Contact {
  name: string;
  email: string;
  phone: string;
  address: string;

  constructor(data?: IContact) {
    this.name = data?.name ? data.name : '';
    this.email = data?.email ? data.email : '';;
    this.phone = data?.phone ? data.phone : '';;
    this.address = data?.address ? data.address : '';;
  }
}
