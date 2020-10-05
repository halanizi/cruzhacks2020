import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { metalPage } from './metal.page';

describe('metalPage', () => {
  let component: metalPage;
  let fixture: ComponentFixture<metalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [metalPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(metalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
