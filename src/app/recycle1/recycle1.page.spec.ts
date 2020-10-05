import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Recycle1Page } from './recycle1.page';

describe('Recycle1Page', () => {
  let component: Recycle1Page;
  let fixture: ComponentFixture<Recycle1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recycle1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Recycle1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
