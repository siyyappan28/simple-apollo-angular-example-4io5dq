import { NgModule } from "@angular/core";
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";
// Apollo
import { Apollo } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { InMemoryCache } from "@apollo/client/core";

const uri = "https://fine-monitor-38.hasura.app/v1/graphql";

@NgModule({
  exports: [HttpClientModule]
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    // create Apollo
    apollo.create({
      link: httpLink.create({ uri,headers: new HttpHeaders({
        "x-hasura-admin-secret": "Kathir"
      }) }),
      cache: new InMemoryCache()
    });
  }
}
