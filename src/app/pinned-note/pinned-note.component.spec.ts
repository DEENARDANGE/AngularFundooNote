import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedNoteComponent } from './pinned-note.component';

describe('PinnedNoteComponent', () => {
  let component: PinnedNoteComponent;
  let fixture: ComponentFixture<PinnedNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinnedNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
