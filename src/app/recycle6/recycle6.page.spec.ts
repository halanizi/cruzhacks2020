import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Recycle6Page } from './recycle6.page';

describe('Recycle6Page', () => {
  let component: Recycle6Page;
  let fixture: ComponentFixture<Recycle6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recycle6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Recycle6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
