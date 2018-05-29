import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FamillesService } from 'services/familles.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArtFamily } from 'model/model.ArtFamily';
@Component({
  selector: 'app-famille-form',
  templateUrl: './famille-form.component.html',
  styleUrls: ['./famille-form.component.css']
})
export class FamilleFormComponent implements OnInit, OnDestroy {

  familyId: number;
  famille: ArtFamily;
  familyForm: FormGroup;
  private sub: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private famillesService: FamillesService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params =>{
      this.familyId=params['id']
    })

    this.familyForm = new FormGroup({
      code: new FormControl('', Validators.required),
      libelle: new FormControl('', Validators.required)
    });

    if(this.familyId)
    {
      this.famillesService.findById(this.familyId).subscribe(
        
        famille=>{
          this.familyId = famille.familyId;
          this.familyForm.patchValue({
            code: famille.code,
            libelle: famille.label,
          });
        },error =>{
          console.log(error);
        }
       
      );
    }
   }
   ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

   onSave(){
     if(this.familyForm.valid)
     {
       if(this.familyId)
       {
        let famille = new ArtFamily(this.familyId,
          this.familyForm.controls['code'].value,
          this.familyForm.controls['libelle'].value);
          this.famillesService.updateFamily(famille).subscribe();
       }
       else
       {
        let famille: ArtFamily = new ArtFamily(null,
        this.familyForm.controls['code'].value,
        this.familyForm.controls['libelle'].value);
        this.famillesService.saveFamily(famille).subscribe();
       }
       this.familyForm.reset();
       this.router.navigate(['familles'])  
     }
     else
     {
        alert("Champs obligatoire");
     }
    
   }
  
}
