import { Component, Input } from '@angular/core';
import { todos, ToDo } from '../todos';

@Component({
    selector: 'app-todo-board',
    templateUrl: './todo-board.component.html',
    styleUrls: ['./todo-board.component.css']
})

export class TodoBoard {
    @Input() todos = todos;

    add() {
        todos.push();
    }
}