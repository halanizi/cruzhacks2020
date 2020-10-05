import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { glassPage } from './glass.page';

describe('glassPage', () => {
  let component: glassPage;
  let fixture: ComponentFixture<glassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [glassPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(glassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
