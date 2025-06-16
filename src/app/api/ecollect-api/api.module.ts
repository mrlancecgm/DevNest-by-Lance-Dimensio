import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { BranchService } from './api/branch.service';
import { CollectionService } from './api/collection.service';
import { IdentityService } from './api/identity.service';
import { ItineraryService } from './api/itinerary.service';
import { LoanDetailsService } from './api/loanDetails.service';
import { LoanTypeService } from './api/loanType.service';
import { MemberService } from './api/member.service';
import { RemarksService } from './api/remarks.service';
import { StandardEntriesService } from './api/standardEntries.service';
import { UsersService } from './api/users.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    BranchService,
    CollectionService,
    IdentityService,
    ItineraryService,
    LoanDetailsService,
    LoanTypeService,
    MemberService,
    RemarksService,
    StandardEntriesService,
    UsersService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
