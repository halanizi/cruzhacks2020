import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Recycle4Page } from './recycle4.page';

describe('Recycle4Page', () => {
  let component: Recycle4Page;
  let fixture: ComponentFixture<Recycle4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recycle4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Recycle4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
