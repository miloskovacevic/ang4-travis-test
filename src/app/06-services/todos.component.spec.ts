import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';



describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
      service = new TodoService(null);
      component = new TodosComponent(service);
  });

  it('should set todos from server', () => {
    let todos = [1, 2, 3, 7, 9];
    // arange
    spyOn(service, 'getTodos').and.callFake(() => {
        return Observable.from([ todos ]);
    });

    // act
    component.ngOnInit();

    // assert
    // expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos).toBe(todos);
  });


  it('should call the server to save the changes when a new todo item is added', () => {
    // arange
    let spy = spyOn(service, 'add').and.callFake((t) => {
        return Observable.empty();
    });

    // act
    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo returned from server', () => {
    let todo = {id: 1};
    // arange
    // 1.nacin
    // let spy = spyOn(service, 'add').and.callFake((t) => {
    //     return Observable.from([ todo ]);
    // });
    // 2.nacin
    let spy = spyOn(service, 'add').and.returnValue(Observable.from([ todo ]));

    // act
    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });


   it('should set the message property if server returns an error when adding a new todo', () => {
    let errorMessage = 'error from the server';
    let spy = spyOn(service, 'add').and.returnValue(Observable.throw(errorMessage));

    // act
    component.add();

    expect(component.message).toBe(errorMessage);
  });

  it('it should call the server to delete a todo item if the user confirms', () => {

    //arange
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    // act
    component.delete(2);

    // expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(2);
  });

  it('it should NOT call the server to delete a todo item if the user NOT confirms', () => {

    //arange
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    // act
    component.delete(2);

    expect(spy).not.toHaveBeenCalled();

  });


});

