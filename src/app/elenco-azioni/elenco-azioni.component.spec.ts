import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoAzioniComponent } from './elenco-azioni.component';

describe('ElencoAzioniComponent', () => {
  let component: ElencoAzioniComponent;
  let fixture: ComponentFixture<ElencoAzioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoAzioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoAzioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
