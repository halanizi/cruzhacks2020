import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { plasticPage } from './plastic.page';

describe('plasticPage', () => {
  let component: plasticPage;
  let fixture: ComponentFixture<plasticPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [plasticPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(plasticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
