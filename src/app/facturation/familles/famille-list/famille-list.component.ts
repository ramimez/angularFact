import { Component, OnInit } from '@angular/core';
import { UserService } from 'services/user.service';
import { ArtFamily } from 'model/model.ArtFamily';
import { FamillesService } from 'services/familles.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-famille-list',
  templateUrl: './famille-list.component.html',
  styleUrls: ['./famille-list.component.css']
})
export class FamilleListComponent implements OnInit {

  private famillies :ArtFamily[];

  constructor(private router: Router,
              private famillesService: FamillesService) { }

  ngOnInit() {
    this.getFamilies();
  }

  getFamilies(){
    this.famillesService.findAll().subscribe(
      famillies=>{
        this.famillies = famillies;
      },
      err =>{
        console.log(err);
      }
    );
  }
  deleteFamily(artFamily:ArtFamily){
    if(artFamily){
      this.famillesService.deleteFamilyById(artFamily.familyId).subscribe(
        res => {
          this.getFamilies();
          this.router.navigate(['familles']);
          console.log('done');
        }
      );
    }
  }
  redirectToNewFamily()
  {
    this.router.navigate(['new-family']);
  }
  redirectToEditFamily(artFamily :ArtFamily)
  {
    this.router.navigate(['edit-family',artFamily.familyId]);
  }
}
