import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Recycle5Page } from './recycle5.page';

describe('Recycle5Page', () => {
  let component: Recycle5Page;
  let fixture: ComponentFixture<Recycle5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recycle5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Recycle5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
