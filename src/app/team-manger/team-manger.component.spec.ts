import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMangerComponent } from './team-manger.component';

describe('TeamMangerComponent', () => {
  let component: TeamMangerComponent;
  let fixture: ComponentFixture<TeamMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
