import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DispositivoPage } from './dispositivo.page';

describe('DispositivoPage', () => {
  let component: DispositivoPage;
  let fixture: ComponentFixture<DispositivoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DispositivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
