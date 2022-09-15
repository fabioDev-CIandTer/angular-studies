import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.css']
})
export class DeleteAllComponent {

  @Output() public deleteAllEmitter = new EventEmitter();

  deleteAll(){
    const confirm = window.confirm("Tem certeza que deseja excluir todas as tarfeas?");
    this.deleteAllEmitter.emit(confirm);
  }

}
