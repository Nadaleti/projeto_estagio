import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-delete-modal',
    templateUrl: './delete-modal.component.html',
    styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {
    modalContent: string;
    idToDelete: number;
    modalType: string;

    constructor(private dialogRef: MatDialogRef<DeleteModalComponent>,
        @Inject(MAT_DIALOG_DATA) data) {
            this.modalContent = data.modalContent;
            this.idToDelete = data.id;
            this.modalType = data.modalType; 
    }

    ngOnInit() { }

    close() {
        this.dialogRef.close();
    }

    delete() {
        this.dialogRef.close(this.idToDelete);
    }

}
