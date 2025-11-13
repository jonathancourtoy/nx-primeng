import {Component} from '@angular/core';
import {TableModule} from "primeng/table";

@Component({
    selector: 'app-my-table',
    imports: [
        TableModule
    ],
    templateUrl: './my-table.html',
    styleUrl: './my-table.css'
})
export class MyTable {
    items = [
        {name: 'Name1', firstname: 'Firstname1'},
        {name: 'Name2', firstname: 'Firstname2'},
    ]
}
