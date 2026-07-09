import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSuggestionCard } from './ai-suggestion-card';

describe('AiSuggestionCard', () => {
  let component: AiSuggestionCard;
  let fixture: ComponentFixture<AiSuggestionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSuggestionCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AiSuggestionCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
