import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Recycle7Page } from './recycle7.page';

describe('Recycle7Page', () => {
  let component: Recycle7Page;
  let fixture: ComponentFixture<Recycle7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recycle7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Recycle7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
