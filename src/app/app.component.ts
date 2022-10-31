import { Component, OnInit } from '@angular/core';
import { Force } from './interface/force';
import { ForceService } from './service/force.service';
import { EngagementService } from './service/engagement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'policeapp';
  forces: any = [];
  engagement: any = [];
  renderengagement = false;

  constructor(private forceService: ForceService, private engagementService: EngagementService) {}

  ngOnInit(): void {
    this.onGetForces();
  }

  onGetForces(): void {
    this.forceService.getForces().subscribe(
      (response) => {
        this.forces = response;
      }
    );
  }

  onGetEngagement(): void {
    this.engagementService.getEngagement().subscribe(
      (response) => {
        this.engagement = response;
        this.engagement.description = this.engagement.description.replaceAll("<p>","").replaceAll("</p>","").replaceAll("<br />","").replaceAll("<ul>","").replaceAll("<li>","").replaceAll("</ul>","").replaceAll("</li>"," ");
      }
    );
  }

  selectForce(force: Force) {
    this.engagementService.ext = force.id;
    this.renderengagement = true;
    this.onGetEngagement();
  }

  clearEngagement() {
    this.renderengagement = false;
  }
}
