import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Jogador } from 'src/app/models/jogador';

@Component({
    selector: 'app-jogador-modal',
    templateUrl: './jogador-modal.component.html',
    styleUrls: ['./jogador-modal.component.scss']
})
export class JogadorModalComponent implements OnInit {
    jogadorForm = this.fb.group({
        nome: ['', [Validators.required]],
        sexo: ['', [Validators.required]],
        id: ['']
    });

    constructor(private dialogRef: MatDialogRef<JogadorModalComponent>,
                @Inject(MAT_DIALOG_DATA) data,
                private fb: FormBuilder) {
                    this.jogadorForm.setValue({
                        nome: data.nome,
                        sexo: data.sexo,
                        id: data.id
                    });
                 }

    ngOnInit() { }

    close() {
        this.dialogRef.close();
    }

    getErrorMessage() {
        return 'O campo é obrigatório';
    }

    save() {
        this.dialogRef.close(
            new Jogador(
                this.jogadorForm.get('id').value,
                this.jogadorForm.get("nome").value,
                this.jogadorForm.get("sexo").value,
                300,
                0
            )
        );
    }
}
