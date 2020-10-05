import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Recycle2Page } from './recycle2.page';

describe('Recycle2Page', () => {
  let component: Recycle2Page;
  let fixture: ComponentFixture<Recycle2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recycle2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Recycle2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
