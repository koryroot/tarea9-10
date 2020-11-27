import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-edit-facturas',
  templateUrl: './edit-facturas.component.html',
  styleUrls: ['./edit-facturas.component.scss']
})
export class EditFacturasComponent implements OnInit {
  public label: string;
  public form: FormGroup;
  constructor(private route:Router, private router:ActivatedRoute, private fb:FormBuilder ) {
   this.label = router.snapshot.params.accion;
   this.initForm();
  }

  ngOnInit(): void {
  }

  initForm(){
    this.form = this.fb.group({
      nombre: ['', []],
      rnc : ['', []],
      fecha: ['', []],
      // descripcion: ['', []],
    })
  }

}
