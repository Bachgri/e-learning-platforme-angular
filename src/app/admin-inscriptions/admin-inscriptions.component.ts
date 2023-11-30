import { Component, OnInit } from '@angular/core';
import { AdminProfServiceService } from '../admin-prof-service.service';
// import { ins } from '../admin-professeur/inscrs';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-admin-inscriptions',
  templateUrl: './admin-inscriptions.component.html',
  styleUrls: ['./admin-inscriptions.component.scss'],
})
export class AdminInscriptionsComponent implements OnInit {
  inscriptions: any[] = []; //ins;
  searchText = '';
  isSideNavCollapsed = false;
  screenWidth = 0;
  constructor(private service: AdminProfServiceService) {}
  ngOnInit(): void {
    this.loadAll();
  }
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  loadAll() {
    this.service.inscriptions().subscribe((d) => {
      this.inscriptions = d;
    });
  }
  update(e: any) {
    e.valider = true;
    this.service.editStudent(e).subscribe((d) => {
      this.loadAll();
    });
  }
}
