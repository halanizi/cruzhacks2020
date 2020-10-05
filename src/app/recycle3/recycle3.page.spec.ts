import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Recycle3Page } from './recycle3.page';

describe('Recycle3Page', () => {
  let component: Recycle3Page;
  let fixture: ComponentFixture<Recycle3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recycle3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Recycle3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
