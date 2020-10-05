import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { nearestlocationsPage } from './nearestlocations.page';

describe('nearestlocationsPage', () => {
  let component: nearestlocationsPage;
  let fixture: ComponentFixture<nearestlocationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [nearestlocationsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(nearestlocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
