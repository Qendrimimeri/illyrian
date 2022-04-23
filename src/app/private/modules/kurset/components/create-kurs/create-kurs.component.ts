import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-create-kurs',
  templateUrl: './create-kurs.component.html',
  styleUrls: ['./create-kurs.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CreateKursComponent implements OnInit {

  public kursForm !: FormGroup;

  constructor(

    private config: NgbModalConfig, 
    private modalService: NgbModal,
    private formBuilder : FormBuilder, 
    private http : HttpClient, 
    private router : Router
    ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;

  }

  open(content:any) {
    this.modalService.open(content);
  }
  ngOnInit(): void {
    this.kursForm = this.formBuilder.group({
      label:[''],
      title:[''],
      img:['../../../../assets/img/kurset/figma.webp'],
      module: [''],
      duration:[''],
      price:[''],
    })
  }
  shto (){
    this.http.post<any>('http://localhost:3000/kurset', this.kursForm.value)
    .subscribe(res => {
      alert('Kursi u shtua me sukses');
      this.kursForm.reset();
      this.router.navigate(['admin']);
    }, err => {
      alert("Ka Probleme me regjistrim");
    })
  }

}
