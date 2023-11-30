import { Component, OnInit } from '@angular/core';
import { AdminProfServiceService } from '../admin-prof-service.service';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-admin-professeur',
  templateUrl: './admin-professeur.component.html',
  styleUrls: ['./admin-professeur.component.scss'],
})
export class AdminProfesseurComponent implements OnInit {
  profs: any[] = [];
  add: any = {};
  addMode = false;
  constructor(private service: AdminProfServiceService) {}
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  searchText: string = '';
  ngOnInit(): void {
    this.loadProfs();
  }
  get getProfs() {
    return this.profs.filter((prof: any) => {
      const searchText = this.searchText.toLowerCase();
      return prof.fullName.toLowerCase().includes(searchText); //||
      // prof.cin.toLowerCase().includes(searchText) ||
      // prof.email.toLowerCase().includes(searchText) ||
      // prof.compteurs[0].numpark.toLowerCase().includes(searchText)
    });
  }

  loadProfs() {
    this.service.getAllProfs().subscribe(
      (data: any) => {
        this.profs = data;
      },
      (x) => {
        console.error(x);
      },
      () => {}
    );
  }
  addProf(e: any) {
    console.log('====================================');
    console.log(e);
    console.log('====================================');
    e.role = { id: 2 };
    this.service.addProf(e).subscribe((d) => {
      this.loadProfs();
    });
    this.add = {};
  }
}
