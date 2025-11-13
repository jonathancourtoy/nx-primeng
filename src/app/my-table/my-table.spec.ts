import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MyTable} from './my-table';
import {TableModule} from "primeng/table";

describe('MyTable', () => {
  let component: MyTable;
  let fixture: ComponentFixture<MyTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTable, TableModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MyTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
