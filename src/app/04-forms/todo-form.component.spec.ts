import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  xit('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBe(true);
  });

  xit('should make a name control required', () => {
    const control = component.form.get('name');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
});
