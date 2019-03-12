import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Jogo } from 'src/app/models/jogo';

@Component({
    selector: 'app-jogo-modal',
    templateUrl: './jogo-modal.component.html',
    styleUrls: ['./jogo-modal.component.scss']
})
export class JogoModalComponent implements OnInit {
    jogoForm = new FormGroup({
        titulo: new FormControl('', [Validators.required]),
        ano: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
        plataforma: new FormControl('', [Validators.required]),
        id: new FormControl('')
    });

    modalTitle: string;

    constructor(private dialogRef: MatDialogRef<JogoModalComponent>,
                @Inject(MAT_DIALOG_DATA) data) {

        this.modalTitle = data.title;
        if (data.jogo !== null) {
            this.jogoForm.setValue({
                titulo: data.jogo.nome,
                plataforma: data.jogo.plataforma,
                ano: data.jogo.ano_lancamento,
                id: data.jogo.id
            });
        }
    }

    ngOnInit() { }

    getErrorMessage() {
        return 'O campo é obrigatório';
    }

    close() {
        this.dialogRef.close();
    }

    save() {
        this.dialogRef.close(
            new Jogo(
                this.jogoForm.get("id").value,
                this.jogoForm.get("titulo").value,
                this.jogoForm.get("ano").value,
                this.jogoForm.get("plataforma").value
            )
        );
    }
}
