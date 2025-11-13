import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MyTable} from "./my-table/my-table";

@Component({
    imports: [RouterModule, MyTable],
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected title = 'test';
}
