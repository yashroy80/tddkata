import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Please enter comma separated numbers!'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Please enter comma separated numbers!');
  });

  it(`should have sum as 0 on app load`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.value).toBe('');
    expect(app.result).toEqual(0);
  });

  it(`should output 0 when inserting space/empty text`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    let input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = '';
    input.dispatchEvent(new Event('input'));
    expect(app.result).toEqual(0);
  });

  it(`should output 1 when input is 1`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    let input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = '1';
    input.dispatchEvent(new Event('input'));
    expect(app.result).toEqual(1);
  });

  it(`should output 6 when input is 1,5`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    let input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = '1,5';
    input.dispatchEvent(new Event('input'));
    expect(app.result).toEqual(6);
  });

  it(`should handle newline characters, output should be 6 when input is '1\\n2,3'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    let input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = '1\\n2,3';
    input.dispatchEvent(new Event('input'));
    expect(app.result).toEqual(6);
  });

  it(`should support different delimiters, output should be 3 when input is '//;\\n1;2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    let input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = '//;\\n1;2';
    input.dispatchEvent(new Event('input'));
    expect(app.result).toEqual(3);
  });

  it(`should throw error when negative numbers are inserted'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    let input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = '1,-2';
    input.dispatchEvent(new Event('input'));
    expect(app.error).toEqual('negative numbers not allowed -2');
  });
});
