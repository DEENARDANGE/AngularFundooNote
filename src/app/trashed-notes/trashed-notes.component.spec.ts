import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashedNotesComponent } from './trashed-notes.component';

describe('TrashedNotesComponent', () => {
  let component: TrashedNotesComponent;
  let fixture: ComponentFixture<TrashedNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashedNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashedNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
