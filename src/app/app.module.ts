import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskModule } from './components/task.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { PureTaskListComponent } from './components/pure-task-list/pure-task-list.component';
import { PureInboxScreenComponent } from './components/pure-inbox-screen/pure-inbox-screen.component';
import { InboxScreenComponent } from './components/inbox-screen/inbox-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    PureInboxScreenComponent,
    InboxScreenComponent,
  ],
  imports: [
    BrowserModule,
    TaskModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }