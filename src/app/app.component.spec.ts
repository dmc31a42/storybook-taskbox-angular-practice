import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { InboxScreenComponent } from './components/inbox-screen/inbox-screen.component';
import { PureInboxScreenComponent } from './components/pure-inbox-screen/pure-inbox-screen.component';
import { TaskModule } from './components/task.module';
import { TasksState } from './state/task.state';

describe('App', () => {
  let component: InboxScreenComponent;
  let fixture: ComponentFixture<InboxScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PureInboxScreenComponent,
        InboxScreenComponent,        
      ],
      imports: [
        TaskModule,
        NgxsModule.forRoot([TasksState]),
      ],
      providers: [
        Store,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  test('should render the App component', async () => {
    expect(component).not.toBe(null);
  });
})