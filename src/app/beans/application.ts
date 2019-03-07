import {Customer} from './customer';
import {Department} from './department';

export class Application {
  appId: number;
	appName: string;
	appAliasName: string;
	appPath: string;
	md5Checksum: string;
	sha2Checksum: string;
	customer: Customer;
	department: Department;
	adplAppId: number;
	protocol: number;
	pid: number;
	compliance: string;
	isRegistered: boolean;
	isAdplEnabled: boolean;
	isMalware: boolean;
	appImageId: number;
	managementIP: string;
  _createdOn: string;
  _updatedOn: string;

  set createdOn (createdOn: string){
    this._createdOn = createdOn;
  }

  get createdOn(): string {
    return this._createdOn;
  }


}
