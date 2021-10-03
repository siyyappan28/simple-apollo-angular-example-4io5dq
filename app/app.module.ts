import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { UpvoterComponent } from './upvoter.component';

// Apollo
import { GraphQLModule } from './graphql.module';

@NgModule({
  imports: [
    BrowserModule, 
    // Apollo
    GraphQLModule
  ],
  declarations: [
    AppComponent,
    ListComponent,
    UpvoterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
