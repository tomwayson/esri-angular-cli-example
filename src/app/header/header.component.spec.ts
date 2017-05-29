/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule, OverlayContainer } from '@angular/material';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  const title = 'Angular CLI Esri';
  let overlayContainerElement: HTMLElement;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MaterialModule],
      providers: [
        {
          provide: OverlayContainer, useFactory: () => {
            overlayContainerElement = document.createElement('div');
            return { getContainerElement: () => overlayContainerElement };
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.title = title;
    fixture.detectChanges();
  });

  it(`should have as title '${title}'`, async(() => {
    expect(component.title).toEqual(title);
  }));

  it('should render title in a span tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain(title);
  }));
});
