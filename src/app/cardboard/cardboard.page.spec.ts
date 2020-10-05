import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { cardboardPage } from './cardboard.page';

describe('cardboardPage', () => {
  let component: cardboardPage;
  let fixture: ComponentFixture<cardboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [cardboardPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(cardboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
